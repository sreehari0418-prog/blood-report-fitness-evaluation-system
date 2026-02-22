import React, { useState, useEffect } from 'react';
import { ChevronLeft, Upload, FileText, CheckCircle, AlertTriangle, AlertCircle, Search, ScanLine } from 'lucide-react';
import Tesseract from 'tesseract.js';
import { MEDICAL_RANGES, generateDiseasePredictions, analyzeBloodReport, KEYWORD_MAP } from '../../utils/bloodAnalysis';
import { predictDiseases } from '../../utils/mlService';
import PredictionResult from '../PredictionResult';

import * as pdfjsLib from 'pdfjs-dist';
// Explicitly load worker for Vite
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const BloodEvaluation = ({ onBack, user, initialViewReport }) => {
    const [report, setReport] = useState(null);
    const [analyzedData, setAnalyzedData] = useState(null);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [statusText, setStatusText] = useState('');

    // Manual Scanner State (New Feature)
    const [selectedParams, setSelectedParams] = useState([]);
    const [manualValues, setManualValues] = useState({});
    const [mlError, setMlError] = useState(null); // NEW: ML Error State

    // Image Enhancement Toggle
    const [enableLens, setEnableLens] = useState(false); // Toggle for Digital Lens

    useEffect(() => {
        const reportKey = (user && user.email) ? `reports_${user.email}` : `temp_reports_${Date.now()}`;
        const saved = localStorage.getItem(reportKey);
        if (saved) {
            setHistory(JSON.parse(saved));
        } else {
            setHistory([]);
        }

        if (initialViewReport) {
            setAnalyzedData(initialViewReport);
        }
    }, [user, initialViewReport]);



    // --- IMAGE PREPROCESSING (Digital Lens) ---
    const preprocessImage = (imageFile) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(imageFile);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Upscale for better detail
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                // Contrast Stretching (Safer than strict binarization)
                // This keeps gray text readable even if lighting is bad
                const contrast = 50; // Range: -100 to 100
                const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

                for (let i = 0; i < data.length; i += 4) {
                    // 1. Grayscale
                    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;

                    // 2. Apply Contrast
                    let newValue = factor * (avg - 128) + 128;

                    // Clamp 0-255
                    if (newValue < 0) newValue = 0;
                    if (newValue > 255) newValue = 255;

                    data[i] = newValue;     // R
                    data[i + 1] = newValue; // G
                    data[i + 2] = newValue; // B
                }

                ctx.putImageData(imageData, 0, 0);

                // Return processed image as Blob
                canvas.toBlob((blob) => {
                    resolve(blob);
                });
            };
        });
    };

    // --- SHARED TEXT PARSING LOGIC (Gen-2: Adaptive & Fuzzy) ---
    const processTextData = (text) => {
        console.log("Processing Extracted Text (Gen-2 Engine)...");
        console.log("--- RAW EXTRACTED TEXT ---");
        console.log(text);
        console.log("--------------------------");

        const rows = text.split('\n');
        const extractedValues = {};

        // 1. Metadata Extraction (Before Header Filtering)
        let patientMeta = { Age: 30, Gender: 'M' }; // Defaults
        for (let i = 0; i < Math.min(rows.length, 20); i++) {
            const row = rows[i].toLowerCase();
            if (row.includes('age')) {
                const ageMatch = row.match(/(\d{1,3})/);
                if (ageMatch) patientMeta.Age = parseInt(ageMatch[0]);
            }
            if (row.includes('male') || row.includes('sex : m')) patientMeta.Gender = 'M';
            else if (row.includes('female') || row.includes('sex : f')) patientMeta.Gender = 'F';
        }

        // 2. Levenshtein Distance for Fuzzy Matching (Simulates "Training")
        const levenshtein = (a, b) => {
            const matrix = [];
            for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
            for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
            for (let i = 1; i <= b.length; i++) {
                for (let j = 1; j <= a.length; j++) {
                    if (b.charAt(i - 1) === a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                    }
                }
            }
            return matrix[b.length][a.length];
        };

        const isFuzzyMatch = (text, keyword) => {
            const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
            const cleanKey = keyword.toLowerCase().replace(/[^a-z0-9]/g, '');

            // Direct match
            if (cleanText.includes(cleanKey)) return true;

            // Fuzzy match (Tolerance: 1 error for short, 2 for long)
            const tolerance = cleanKey.length > 5 ? 2 : 1;

            // Check substrings (words)
            const words = cleanText.split(/(?:[a-z]+)/).filter(w => w.length >= 3);
            return words.some(w => Math.abs(w.length - cleanKey.length) <= tolerance && levenshtein(w, cleanKey) <= tolerance);
        };

        // 2. Header Filtering (Ignore Patient Details)
        let startIndex = 0;
        const HEADER_KEYWORDS = ['investigation', 'test name', 'result', 'observed value', 'unit', 'reference range', 'biological reference'];

        // Try to find the start of the "Results Table"
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i].toLowerCase();
            if (HEADER_KEYWORDS.some(k => row.includes(k))) {
                startIndex = i; // Found the table header
                console.log(`Table header detected at line ${i}. Ignoring previous text.`);
                break;
            }
        }

        const dataRows = rows.slice(startIndex);

        dataRows.forEach(row => {
            const lowerRow = row.toLowerCase().trim();
            if (!lowerRow) return;

            // 3. Safety Filter: Ignore lines that still look like Patient Info
            // (Even if we missed the header, these keys are risky)
            const IGNORE_KEYS = ['patient', 'name:', 'age:', 'sex:', 'gender:', 'id:', 'referred by:', 'dr.', 'date:', 'time:'];
            if (IGNORE_KEYS.some(k => lowerRow.includes(k))) return;


            Object.keys(KEYWORD_MAP).forEach(paramKey => {
                let currentKey = paramKey; // Allow re-assignment for typo fixes

                // AUTO-CORRECT: Hemolab Report Typo
                // Row says "White Blood Cell Count" but unit is "10^12" -> It's actually RBC
                if (paramKey === 'total_count' && (lowerRow.includes('10^12') || lowerRow.includes('x10^12'))) {
                    console.log("Auto-Correcting 'White Blood Cell' to 'RBC' based on 10^12 unit");
                    currentKey = 'rbc_count';
                }

                if (extractedValues[currentKey]) return; // Already found

                const synonyms = KEYWORD_MAP[currentKey];

                // Adaptive Match: Check synonyms with fuzzy tolerance
                const matchedSynonym = synonyms.find(s => {
                    const cleanRow = lowerRow.replace(/[^a-z0-9\s]/g, '');
                    if (cleanRow.includes(s)) return true; // Fast path

                    // Slow path: Typo check
                    return s.split(' ').every(part => cleanRow.includes(part) || isFuzzyMatch(cleanRow, part));
                });

                if (matchedSynonym) {
                    console.log(`🔍 Potential match found for ${currentKey} via synonym: "${matchedSynonym}" in row: "${lowerRow}"`);

                    // Clean the row specifically for number extraction
                    // 1. Fix spaces around dots/commas: "14 . 5" -> "14.5"
                    let cleanNumbersRow = lowerRow
                        .replace(/(\d)\s+[\.,]\s+(\d)/g, '$1.$2') // "14 . 5"
                        .replace(/(\d)\s+[\.,](?=\d)/g, '$1.')    // "14 .5"
                        .replace(/(?<=\d)[\.,]\s+(\d)/g, '.$1');   // "14. 5"

                    // 2. Context-Aware Comma Handling
                    // For large counts (WBC, Platelets), comma is thousands separator (remove it)
                    // For others (Hemoglobin), comma is likely decimal (replace with dot)
                    if (['total_count', 'platelet_count', 'absolute_neutrophil_count'].includes(currentKey)) {
                        cleanNumbersRow = cleanNumbersRow.replace(/,/g, '');
                    } else {
                        cleanNumbersRow = cleanNumbersRow.replace(/,/g, '.');
                    }

                    // 3. SMART FIX: Remove Reference Ranges/Intervals BEFORE extracting numbers
                    // Strategy: Only remove if it's a clear range pattern (number-dash-number)
                    let cleanRowForExtraction = cleanNumbersRow;

                    // Remove patterns like "13.2 - 16.6" or "4-11" but NOT standalone numbers
                    cleanRowForExtraction = cleanRowForExtraction.replace(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/g, '   ');
                    cleanRowForExtraction = cleanRowForExtraction.replace(/(\d+\.?\d*)\s+to\s+(\d+\.?\d*)/gi, '   ');
                    cleanRowForExtraction = cleanRowForExtraction.replace(/[<>]\s*\d+(\.\d+)?/g, '   ');

                    // 4. Common OCR Fixes
                    cleanRowForExtraction = cleanRowForExtraction
                        .replace(/[oO](?=\d)/g, '0').replace(/(?<=\d)[oO]/g, '0')
                        .replace(/\.\./g, '.');

                    // Find all numbers in the cleaned row
                    const numberMatches = cleanRowForExtraction.match(/(\d+\.?\d*)/g);

                    if (numberMatches) {
                        let bestMatchValue = null;

                        for (const numStr of numberMatches) {
                            let val = parseFloat(numStr);
                            if (isNaN(val)) continue;

                            // Filter out years and obvious non-results
                            if (val > 1900 && val < 2100 && currentKey !== 'total_count') continue;
                            if (val === 0 && currentKey !== 'basophil') continue;

                            const range = MEDICAL_RANGES[currentKey];
                            if (range) {
                                // CRITICAL FIX: Smart scaling with better logic
                                // Try different scales and pick the one that fits best
                                const scales = [1, 10, 100, 1000, 0.1, 0.01, 0.001];
                                let bestFit = null;
                                let bestDeviation = Infinity;

                                for (let scale of scales) {
                                    const scaledVal = val * scale;

                                    // Calculate how well this fits in the range
                                    // Perfect fit = value is within range
                                    // Acceptable fit = within 3x the range (for abnormal values)
                                    const minAcceptable = range.min * 0.2; // Allow 80% below
                                    const maxAcceptable = range.max * 3.0; // Allow 3x above

                                    if (scaledVal >= minAcceptable && scaledVal <= maxAcceptable) {
                                        // Calculate deviation from ideal range
                                        let deviation;
                                        if (scaledVal < range.min) {
                                            deviation = range.min - scaledVal;
                                        } else if (scaledVal > range.max) {
                                            deviation = scaledVal - range.max;
                                        } else {
                                            deviation = 0; // Perfect fit!
                                        }

                                        // Prefer scale=1 if it fits (no unnecessary scaling)
                                        if (scale === 1) {
                                            deviation *= 0.9; // Give slight preference to unscaled
                                        }

                                        if (deviation < bestDeviation) {
                                            bestDeviation = deviation;
                                            bestFit = scaledVal;
                                        }
                                    }
                                }

                                if (bestFit !== null) {
                                    bestMatchValue = bestFit;
                                    break; // Found a good match
                                }
                            } else {
                                // No range defined, accept the first valid number
                                bestMatchValue = val;
                                break;
                            }
                        }

                        if (bestMatchValue !== null) {
                            extractedValues[currentKey] = bestMatchValue;
                        }
                    }
                }
            });
        });

        // Debug & Finish
        if (Object.keys(extractedValues).length === 0 && text.length > 50) {
            console.warn("No values extracted despite text content.");
        }
        finishAnalysis(extractedValues, patientMeta);
    };

    // --- FIRESTORE LOGGING ---
    const saveToFirestore = async (analysisResult) => {
        try {
            // Lazy load Firestore to avoid initialization race conditions
            const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
            const { db } = await import('../../utils/firebase');

            const reportData = {
                userId: user ? user.uid : 'anonymous',
                userEmail: user ? user.email : 'anonymous',
                timestamp: serverTimestamp(),
                mode: analysisMode,
                values: analysisResult.values,
                risks: analysisResult.risks || [],
                mlPredictions: analysisResult.mlPredictions || [],
                summary: analysisMode === 'expert' ? 'Expert Rule Analysis' : 'ML Model Analysis'
            };

            await addDoc(collection(db, 'reports'), reportData);
            console.log("✅ Report saved to Firestore");
        } catch (error) {
            console.error("❌ Error saving to Firestore:", error);
        }
    };

    const finishAnalysis = async (extractedValues, patientMeta = { Age: 30, Gender: 'M' }) => {
        let ruleBasedRisks = [];
        let mlAssessment = null;

        // MODE 1: EXPERT (Rule-Based Only)
        if (analysisMode === 'expert') {
            console.log("🩺 Running Expert Mode (Rule-Based System)...");
            ruleBasedRisks = generateDiseasePredictions(extractedValues);
            // ML is strictly SKIPPED in Expert Mode per user request ("should not overlap")
        }

        // MODE 2: ADVANCED ML (Model Only)
        else if (analysisMode === 'ml') {
            try {
                console.log("🧠 Running Advanced ML Mode...");
                // Send ONLY 16 medical CBC features
                const mlPayload = {
                    Total_Leukocyte_Count: extractedValues['total_count'] || 0,
                    RBC_Count: extractedValues['rbc_count'] || 0,
                    Hemoglobin: extractedValues['hemoglobin'] || 0,
                    Hematocrit: extractedValues['hematocrit'] || 0,
                    MCV: extractedValues['mcv'] || 0,
                    MCH: extractedValues['mch'] || 0,
                    MCHC: extractedValues['mchc'] || 0,
                    RDW_CV: extractedValues['rdw'] || 0,
                    Platelet_Count: extractedValues['platelet_count'] || 0,
                    Neutrophils: extractedValues['neutrophil'] || 0,
                    Lymphocytes: extractedValues['lymphocyte'] || 0,
                    Monocytes: extractedValues['monocyte'] || 0,
                    Eosinophils: extractedValues['eosinophil'] || 0,
                    Basophils: extractedValues['basophil'] || 0,
                    Absolute_Neutrophil_Count: extractedValues['absolute_neutrophil_count'] || 0,
                    Absolute_Lymphocyte_Count: extractedValues['absolute_lymphocyte_count'] || 0
                };

                const response = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(mlPayload)
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.status === 'success') {
                        mlAssessment = {
                            prediction: result.prediction,
                            confidence: result.confidence
                        };
                        console.log(`✓ ML Assessment: ${result.prediction}`);
                    }
                }
            } catch (err) {
                console.warn("ML Service unavailable:", err);
                setMlError("⚠️ ML Service Offline. Please start the backend server.");
            }
        }

        const finalRisks = analysisMode === 'expert' ? ruleBasedRisks : [];
        const finalML = (analysisMode === 'ml' && mlAssessment) ? [{
            disease: "AI Health Score",
            warning: `ML Assessment: ${mlAssessment.prediction} (${mlAssessment.confidence} Confidence)`,
            probability: mlAssessment.confidence,
            isDetected: mlAssessment.prediction !== 'Normal',
            isSupplementary: false
        }] : [];

        // Combine Results
        const resultPayload = {
            date: new Date().toLocaleDateString(),
            values: extractedValues,
            risks: finalRisks,
            mlPredictions: finalML
        };

        analyzeReport(resultPayload);

        // Save to Database (Both modes - User Request: "both should connect to firebase databse")
        await saveToFirestore(resultPayload);

        setIsLoading(false);
        setStatusText('');
    };

    // --- PDF HANDLING (Gemini Vision Cloud → pdfjs/Tesseract Fallback) ---
    const processPdf = async (file) => {
        setIsLoading(true);

        // ── STRATEGY 1: Gemini Vision (Cloud — highest accuracy) ──────────────
        try {
            setStatusText('✨ Sending to Gemini AI for extraction...');
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/extract-pdf`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success && result.text && result.text.length > 50) {
                    console.log(`✅ Gemini Vision extracted ${result.text.length} chars from ${result.pages} page(s)`);
                    setStatusText(`✅ Cloud extraction done (${result.pages} page${result.pages > 1 ? 's' : ''})! Analyzing...`);
                    await new Promise(r => setTimeout(r, 800)); // Brief pause to show success
                    processTextData(result.text);
                    return; // Done — no fallback needed
                } else if (result.error) {
                    console.warn('⚠️ Gemini Vision returned an error:', result.error);
                    // Show error briefly, then continue to fallback
                    setStatusText(`⚠️ Cloud extraction failed: ${result.error}`);
                    await new Promise(r => setTimeout(r, 1500));
                }
            }
        } catch (err) {
            // Backend offline or network error — silently fall back
            console.warn('🔄 Gemini Vision unavailable, falling back to local extraction:', err.message);
        }

        // ── STRATEGY 2: Local pdfjs + Tesseract.js (Fallback) ────────────────
        setStatusText('🔄 Using local extraction (fallback)...');
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            let fullText = "";

            // Loop through ALL pages
            for (let i = 1; i <= pdf.numPages; i++) {
                setStatusText(`Scanning Page ${i} of ${pdf.numPages}...`);
                const page = await pdf.getPage(i);

                // STRATEGY 2a: Direct Text (High Accuracy for digital PDFs)
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join('\n');

                if (pageText.length > 50) {
                    console.log(`Page ${i}: Digital text found.`);
                    fullText += pageText + "\n";
                } else {
                    // STRATEGY 2b: OCR Fallback (Image/Scanned PDF)
                    console.log(`Page ${i}: Scanned image detected. Using Tesseract.js OCR.`);

                    const viewport = page.getViewport({ scale: 2.5 });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({ canvasContext: context, viewport: viewport }).promise;

                    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
                    if (blob) {
                        const { data: { text } } = await Tesseract.recognize(
                            blob, 'eng',
                            { logger: () => { } }
                        );
                        fullText += text + "\n";
                    }
                }
            }

            if (fullText.length > 20) {
                setStatusText('Analyzing compiled report...');
                processTextData(fullText);
            } else {
                alert("Could not extract meaningful text from this PDF.");
                setIsLoading(false);
            }

        } catch (err) {
            console.error(err);
            alert("Error processing PDF: " + err.message);
            setIsLoading(false);
        }
    };


    // --- OCR LOGIC ---
    const processImage = async (file, isPdfDerived = false) => {
        setIsLoading(true);
        setStatusText('Preprocessing Image...');

        try {
            // ── STRATEGY 1: Gemini Vision (Cloud — highest accuracy) ──────────────
            // Now supported for both PDF and Images in Expert mode!
            if (analysisMode === 'expert') {
                try {
                    setStatusText('✨ Sending to Gemini AI for extraction...');
                    const formData = new FormData();
                    formData.append('file', file);

                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/extract-image`, {
                        method: 'POST',
                        body: formData
                    });

                    if (response.ok) {
                        const result = await response.json();
                        if (result.success && result.text && result.text.length > 50) {
                            console.log(`✅ Gemini Vision extracted ${result.text.length} chars from image`);
                            setStatusText(`✅ Cloud extraction done! Analyzing...`);
                            await new Promise(r => setTimeout(r, 800));
                            processTextData(result.text);
                            return; // Success!
                        }
                    }
                } catch (cloudErr) {
                    console.warn("🔄 Gemini Cloud unavailable for image, falling back:", cloudErr);
                }
            }

            // OPTION 2: Try Backend Enhanced OCR (ML Correction + Table Detection)
            // Checks: Must be in ML Mode AND not a PDF
            if (analysisMode === 'ml') {
                try {
                    setStatusText('Analyzing with Advanced AI...');

                    const formData = new FormData();
                    formData.append('image', file);

                    // Use configured backend URL (Local or Render)
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/ocr`, {
                        method: 'POST',
                        body: formData
                    });

                    if (response.ok) {
                        const result = await response.json();
                        if (result.success && Object.keys(result.detected_values).length > 0) {
                            console.log("✅ Using Backend OCR Results:", result);

                            // Show corrections if any
                            const correctionCount = result.corrections ? Object.keys(result.corrections).length : 0;
                            if (correctionCount > 0) {
                                setStatusText(`Corrected ${correctionCount} values with AI...`);
                                await new Promise(r => setTimeout(r, 1000)); // Show message briefly
                            }

                            // Extract metadata (Age/Gender) from raw text if possible, using existing logic equivalent
                            let patientMeta = { Age: 30, Gender: 'M' };
                            const lowerText = result.raw_text.toLowerCase();

                            // Simple client-side meta extraction from raw text
                            const ageMatch = lowerText.match(/age\s*[:\-\.]?\s*(\d{1,3})/);
                            if (ageMatch) patientMeta.Age = parseInt(ageMatch[1]);

                            if (lowerText.includes('female') || lowerText.includes('sex: f')) patientMeta.Gender = 'F';

                            // Call finishAnalysis directly with corrected values
                            finishAnalysis(result.detected_values, patientMeta);
                            return; // Done!
                        }
                    }
                } catch (backendErr) {
                    console.warn("Backend OCR unavailable, falling back to local Tesseract:", backendErr);
                }
            }

            // OPTION 2: Fallback to Local Tesseract.js (Original Method)
            setStatusText('Scanning Text (Local)...');

            // Enhanced Preprocessing (Lens effect simulation)
            const shouldPreprocess = !isPdfDerived && enableLens;
            const processedFile = shouldPreprocess ? await preprocessImage(file) : file;

            const { data: { text } } = await Tesseract.recognize(
                processedFile, 'eng',
                { logger: m => setStatusText(`${m.status} (${Math.round(m.progress * 100)}%)`) }
            );

            processTextData(text);

        } catch (err) {
            console.error(err);
            alert("Error scanning image. Please check the file and try again.");
            setIsLoading(false);
        }
    };

    // NEW: Analysis Mode State
    const [analysisMode, setAnalysisMode] = useState('expert'); // 'expert' (Rule-Based) or 'ml' (Advanced ML)

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // NEW: Handle PDF
        if (file.type === 'application/pdf') {
            processPdf(file);
        }
        // EXISTING: Handle Image
        else if (file.type.startsWith('image/')) {
            setReport(file);
            processImage(file);
        } else {
            alert("Please upload an Image (JPG/PNG) or PDF report.");
        }
    };

    const analyzeReport = (data) => {
        // Use shared logic to generate full analysis structure
        const fullAnalysis = analyzeBloodReport(data.values, data.risks);

        // Attach ML predictions to the final report object
        if (data.mlPredictions) {
            fullAnalysis.mlPredictions = data.mlPredictions;
        }

        setAnalyzedData(fullAnalysis);

        // Save to history
        // Load latest history to ensure we don't overwrite with stale state if it changed elsewhere
        const reportKey = (user && user.email) ? `reports_${user.email}` : `temp_reports_${Date.now()}`;
        const currentHistory = JSON.parse(localStorage.getItem(reportKey) || '[]');

        const newHistory = [fullAnalysis, ...currentHistory];
        setHistory(newHistory);
        localStorage.setItem(reportKey, JSON.stringify(newHistory));
    };

    const handleManualCheck = (e) => {
        e.preventDefault();
        if (!manualValue) return;

        const val = parseFloat(manualValue);
        const range = MEDICAL_RANGES[manualParam];

        let status = 'Normal';
        if (val < range.min) status = 'Low';
        if (val > range.max) status = 'High';

        setManualResult({
            parameter: manualParam,
            value: val,
            unit: range.unit,
            range: `${range.min}-${range.max}`,
            status,
            foods: range.foods,
            fitnessImpact: status === 'Low' ? range.impact?.low : (status === 'High' ? range.impact?.high : null)
        });
    };

    return (
        <div className="blood-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>Blood Evaluation</h2>
            </div>

            {!analyzedData ? (
                <div className="main-content">
                    {/* NEW: Analysis Mode Toggle */}
                    <div className="mode-toggle-container">
                        <label className="mode-label">Analysis Mode:</label>
                        <div className="mode-switch">
                            <button
                                className={`mode-btn ${analysisMode === 'expert' ? 'active' : ''}`}
                                onClick={() => setAnalysisMode('expert')}
                            >
                                🩺 Expert
                            </button>
                            <button
                                className={`mode-btn ${analysisMode === 'manual' ? 'active' : ''}`}
                                onClick={() => setAnalysisMode('manual')}
                            >
                                ✍️ Manual
                            </button>
                            <button
                                className={`mode-btn ${analysisMode === 'ml' ? 'active' : ''}`}
                                onClick={() => setAnalysisMode('ml')}
                            >
                                🧠 ML
                            </button>
                        </div>
                        <p className="mode-desc">
                            {analysisMode === 'expert' ? "Rule-based expert system. Specific & verified diagnosis." :
                                analysisMode === 'manual' ? "Enter results manually. Select up to 20 parameters." :
                                    "Experimental AI model. Predicts overall health risk."}
                        </p>
                        {mlError && analysisMode === 'ml' && (
                            <div className="error-banner" style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px', borderRadius: '8px', marginTop: '10px', fontSize: '13px', textAlign: 'center' }}>
                                {mlError}
                            </div>
                        )}
                    </div>

                    <div className="divider"></div>
                    {/* Manual Scanner Mode */}
                    {analysisMode === 'manual' ? (
                        <div className="card manual-scanner-card">
                            <h3>📋 Manual Scanner</h3>
                            <p className="sub-label">Select up to 20 parameters and enter values.</p>

                            <div className="param-counter" style={{ margin: '15px 0', padding: '10px', background: '#f0f9ff', borderRadius: '8px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: '#0369a1' }}>
                                Selected: {selectedParams.length}/20
                            </div>

                            {/* Parameter Selection */}
                            <div className="param-select-row" style={{ marginBottom: '20px' }}>
                                <select
                                    className="input-field"
                                    onChange={(e) => {
                                        const param = e.target.value;
                                        if (param && !selectedParams.includes(param) && selectedParams.length < 20) {
                                            setSelectedParams([...selectedParams, param]);
                                            setManualValues({ ...manualValues, [param]: '' });
                                        }
                                        e.target.value = '';
                                    }}
                                    disabled={selectedParams.length >= 20}
                                    style={{ width: '100%' }}
                                >
                                    <option value="">+ Add Parameter ({50 - selectedParams.length} available)</option>
                                    {Object.keys(MEDICAL_RANGES).filter(key => !selectedParams.includes(key)).map(key => (
                                        <option key={key} value={key}>
                                            {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} ({MEDICAL_RANGES[key].unit})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Input Fields for Selected Parameters */}
                            <div className="manual-inputs-grid" style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
                                {selectedParams.map(param => (
                                    <div key={param} className="manual-input-row" style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'center' }}>
                                        <label style={{ flex: '1', fontSize: '13px', fontWeight: '500' }}>
                                            {param.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="input-field"
                                            placeholder={`Enter ${MEDICAL_RANGES[param].unit}`}
                                            value={manualValues[param] || ''}
                                            onChange={(e) => setManualValues({ ...manualValues, [param]: e.target.value })}
                                            style={{ flex: '0.6' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedParams(selectedParams.filter(p => p !== param));
                                                const newValues = { ...manualValues };
                                                delete newValues[param];
                                                setManualValues(newValues);
                                            }}
                                            style={{ background: '#fee2e2', color: '#991b1b', border: 'none', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer', fontSize: '12px' }}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Submit Button */}
                            {selectedParams.length > 0 && (
                                <button
                                    className="btn-primary"
                                    onClick={() => {
                                        // Filter out empty values and convert to numbers
                                        const extractedValues = {};
                                        selectedParams.forEach(param => {
                                            const val = parseFloat(manualValues[param]);
                                            if (!isNaN(val)) {
                                                extractedValues[param] = val;
                                            }
                                        });

                                        if (Object.keys(extractedValues).length === 0) {
                                            alert('Please enter at least one value.');
                                            return;
                                        }

                                        // Call existing analysis logic
                                        finishAnalysis(extractedValues, { Age: 30, Gender: 'M' });
                                    }}
                                    style={{ width: '100%' }}
                                >
                                    🔍 Analyze Health ({Object.values(manualValues).filter(v => v).length} values)
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            {/* Upload Section (Hidden in Manual Mode) */}
                            <div className="upload-card">
                                <div className="icon-circle">
                                    <Upload size={32} color="var(--color-primary)" />
                                </div>
                                <h3>Upload Report Image</h3>
                                <p>Take a clear photo of your report. AI will scan for values.</p>

                                {/* Digital Lens Toggle */}
                                <div style={{ marginBottom: '15px' }}>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            checked={enableLens}
                                            onChange={(e) => setEnableLens(e.target.checked)}
                                        />
                                        <span className="checkmark"></span>
                                        Enable Digital Lens (Enhance Image)
                                    </label>
                                </div>

                                <label className="btn-secondary upload-btn">
                                    {isLoading ? (statusText || 'Scanning...') : 'Select Image (JPG/PNG)'}
                                    <input
                                        type="file"
                                        accept="image/*,application/pdf"
                                        hidden
                                        onChange={handleFileUpload}
                                        disabled={isLoading}
                                    />
                                </label>
                            </div>
                        </>
                    )}

                    <div className="divider"></div>

                    {history.length > 0 && (
                        <div className="history-section">
                            <h3>Recent Reports</h3>
                            {history.map((h, i) => (
                                <div key={i} className="history-item" onClick={() => setAnalyzedData(h)}>
                                    <FileText size={18} className="text-muted" />
                                    <span>{h.date}</span>
                                    <span className="arrow">→</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="results-section fade-in">
                    <div className="results-header">
                        <h3>Report Analysis</h3>
                        <button className="text-btn" onClick={() => setAnalyzedData(null)}>Close</button>
                    </div>

                    {/* NEW AI PREDICTION SECTION (ONNX) */}
                    {analyzedData.mlPredictions && <PredictionResult predictions={analyzedData.mlPredictions} />}

                    {/* AI DISEASE RISK SECTION (NEW) */}
                    {analyzedData.risks && analyzedData.risks.length > 0 && (
                        <div className="risk-container fade-up">
                            <h4>⚠️ AI Health Risk Detection</h4>
                            <div className="risk-grid">
                                {analyzedData.risks.map((risk, idx) => (
                                    <div key={idx} className="risk-card" style={{ borderLeft: `4px solid ${risk.color}` }}>
                                        <div className="risk-header">
                                            <span className="condition-title">{risk.condition}</span>
                                            <span className="risk-badge" style={{ background: risk.color }}>{risk.risk}</span>
                                        </div>
                                        <p className="risk-advice">{risk.advice}</p>
                                        <button className="view-details" onClick={() => alert(`Detailed explanation for ${risk.condition}: \n\nThis condition was flagged based on your values. Please consult a doctor for verification.`)}>View Details</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Only show parameters that were actually found (simulated) */}
                    <div className="params-list">
                        {analyzedData.results.map((res, idx) => (
                            <div key={idx} className="param-card">
                                <div className="param-header">
                                    <h4>{res.parameter.replace(/_/g, ' ').toUpperCase()}</h4>
                                    <span className={`status-badge ${res.status.toLowerCase()}`}>
                                        {res.status === 'Normal' && <CheckCircle size={14} />}
                                        {res.status === 'High' && <AlertTriangle size={14} />}
                                        {res.status === 'Low' && <AlertCircle size={14} />}
                                        {res.status}
                                    </span>
                                </div>
                                <div className="param-value">
                                    <span className="val">{res.value}</span>
                                    <span className="unit">{res.unit}</span>
                                </div>
                                <p className="range-info">Ref Range: {res.range}</p>
                            </div>
                        ))}
                    </div>

                    {analyzedData.suggestions.length > 0 && (
                        <div className="suggestions-box">
                            <h3>🥗 Health & Fitness Recommendations</h3>
                            {analyzedData.suggestions.map((s, i) => (
                                <div key={i} className="suggestion-item">
                                    <div className="suggestion-header">
                                        <strong>{s.status} {s.parameter.replace(/_/g, ' ').toUpperCase()}</strong>
                                    </div>
                                    {s.foods.length > 0 && <p className="food-list">💡 <b>Diety Tip:</b> Eat {s.foods.join(', ')}</p>}
                                    {s.fitnessImpact && <p className="fitness-list">⚡ <b>Fitness Impact:</b> {s.fitnessImpact}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <style>{`
        .blood-container {
           padding: var(--spacing-md);
        }
        /* ... Existing Styles ... */
        /* Risk Styles */
        .risk-container {
            background: #fffafa; border: 1px solid #fee2e2; padding: 15px; border-radius: 12px; margin-bottom: 20px;
        }
        .risk-container h4 { color: #b91c1c; margin-top: 0; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
        .risk-grid { display: flex; flex-direction: column; gap: 10px; }
        .risk-card { background: white; padding: 12px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .risk-header { display: flex; justify-content: space-between; margin-bottom: 5px; align-items: center; }
        .condition-title { font-weight: 700; color: #1f2937; }
        .risk-badge { font-size: 10px; color: white; padding: 2px 8px; border-radius: 99px; font-weight: 700; text-transform: uppercase; }
        .risk-advice { font-size: 13px; color: #4b5563; margin: 0; line-height: 1.4; }
        .view-details { margin-top: 8px; font-size: 11px; background: white; border: 1px solid #e5e7eb; padding: 4px 10px; border-radius: 4px; cursor: pointer; }
        
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-lg);
        }
        .back-btn, .text-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
           font-weight: 600;
        }

        .card {
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
           box-shadow: var(--shadow-sm);
           margin-bottom: var(--spacing-lg);
        }

        /* Manual Entry */
        .manual-card h3 { font-size: var(--font-size-base); margin-bottom: 5px; }
        .sub-label { font-size: 12px; color: var(--color-text-secondary); margin-bottom: 15px; }
        .manual-form {
           display: flex;
           flex-direction: column;
           gap: 10px;
        }
        .manual-form .row { display: flex; gap: 10px; }
        .manual-form .input-field { 
            padding: 10px; 
            border: 1px solid #e2e8f0; 
            border-radius: var(--radius-sm); 
            flex: 1;
            font-size: 14px;
        }
        .small-btn { padding: 10px; width: 100%; display: flex; justify-content: center; gap: 8px; }

        .manual-result {
            margin-top: 15px;
            padding: 10px;
            background: #f8fafc;
            border-radius: var(--radius-sm);
            border-left: 3px solid var(--color-text-muted);
        }
        .result-badge {
            display: inline-block;
            font-size: 10px;
            font-weight: bold;
            padding: 2px 8px;
            border-radius: 99px;
            margin-bottom: 5px;
            text-transform: uppercase;
        }
        .result-badge.normal { background: #dcfce7; color: #166534; border-color: #166534; }
        .result-badge.high { background: #fee2e2; color: #991b1b; }
        .result-badge.low { background: #fef9c3; color: #854d0e; }
        
        .diet-tip { margin-top: 8px; font-size: 12px; color: #155724; background: #d4edda; padding: 5px; border-radius: 4px; }

        .divider { text-align: center; color: var(--color-text-muted); font-size: 12px; margin: 20px 0; font-weight: bold; }

        .upload-card {
           text-align: center;
           padding: 20px;
           background: #F8F9FA;
           border: 1px dashed #cbd5e1;
           border-radius: var(--radius-lg);
        }
        .icon-circle {
           width: 60px; height: 60px;
           background: #eef2ff;
           border-radius: 50%;
           display: flex; align-items: center; justify-content: center;
           margin: 0 auto 15px;
        }
        .upload-btn {
           display: inline-block;
           margin-top: 15px;
           font-size: 14px;
           padding: 8px 16px;
           background: white; border: 1px solid #e2e8f0; border-radius: 99px;
        }

        .results-header {
           display: flex; justify-content: space-between; align-items: center;
           margin-bottom: 20px;
        }
        .params-list { display: grid; gap: 10px; }
        .param-card {
           background: white; padding: 15px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
        }
        .param-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .status-badge { font-size: 10px; padding: 2px 8px; border-radius: 99px; font-weight: bold; float: right; }
        .status-badge.normal { background: #dcfce7; color: #166534; }
        .status-badge.high { background: #fee2e2; color: #991b1b; }
        .status-badge.low { background: #fef9c3; color: #854d0e; }

        .param-value .val { font-size: 18px; font-weight: bold; margin-right: 5px; }
        .param-value .unit { font-size: 12px; color: #64748b; }
        .range-info { font-size: 10px; color: #94a3b8; margin-top: 2px; }

        .suggestions-box { margin-top: 20px; background: #fffbeb; padding: 15px; border-radius: var(--radius-md); border-left: 4px solid #f59e0b; }
        .suggestions-box h3 { font-size: 14px; margin-bottom: 12px; color: #92400e; display: flex; align-items: center; gap: 8px; }
        .suggestion-item { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #fef3c7; }
        .suggestion-item:last-child { border-bottom: none; }
        .suggestion-header { margin-bottom: 6px; color: #92400e; }
        .food-list, .fitness-list { font-size: 11px; margin-top: 4px; line-height: 1.4; color: #78350f; }
        .fitness-list { font-style: italic; color: #b45309; }
        .fitness-tip { margin-top: 8px; font-size: 11px; color: #b45309; background: #fffbeb; padding: 8px; border-radius: 4px; border: 1px dashed #f59e0b; }

        .scan-mode-toggle {
            display: flex; justify-content: center; gap: 10px; margin: 15px 0;
        }
        .mode-btn {
            padding: 6px 12px;
            font-size: 12px;
            border: 1px solid #e2e8f0;
            background: white;
            border-radius: 99px;
            cursor: pointer;
            position: relative;
        }
        .mode-btn.active {
            background: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
        }
        .dot {
            width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-left: 5px;
        }
        .dot.online { background: #22c55e; }
        .dot.offline { background: #ef4444; }
      `}</style>
        </div>
    );
};

export default BloodEvaluation;
