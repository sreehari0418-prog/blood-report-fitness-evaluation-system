import React, { useState, useEffect } from 'react';
import { ChevronLeft, Upload, FileText, CheckCircle, AlertTriangle, AlertCircle, Search, ScanLine } from 'lucide-react';
import Tesseract from 'tesseract.js';
import { MEDICAL_RANGES, generateDiseasePredictions, analyzeBloodReport, KEYWORD_MAP } from '../../utils/bloodAnalysis';

const BloodEvaluation = ({ onBack, user, initialViewReport }) => {
    const [report, setReport] = useState(null);
    const [analyzedData, setAnalyzedData] = useState(null);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [statusText, setStatusText] = useState('');

    // Manual Entry State
    const [manualParam, setManualParam] = useState('hemoglobin');
    const [manualValue, setManualValue] = useState('');
    const [manualResult, setManualResult] = useState(null);

    // Advanced Mode State
    const [scanMode, setScanMode] = useState('basic'); // 'basic' | 'advanced'
    const [serverStatus, setServerStatus] = useState('checking');

    useEffect(() => {
        // Check if local python server is running
        checkServer();

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

    const checkServer = async () => {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        try {
            const res = await fetch(`${API_URL}/health`);
            if (res.ok) setServerStatus('online');
            else setServerStatus('offline');
        } catch (e) {
            setServerStatus('offline');
        }
    };

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

    // --- OCR LOGIC ---
    const processImage = async (file) => {
        setIsLoading(true);
        setStatusText('Applying Digital Lens (Enhancing Quality)...');

        try {
            // 1. Preprocess the image (B&W, Contrast)
            const processedFile = await preprocessImage(file);

            setStatusText('Scanning Enhanced Image...');

            // 2. Recognize text using Tesseract
            const { data: { text } } = await Tesseract.recognize(
                processedFile,
                'eng',
                { logger: m => setStatusText(`${m.status} (${Math.round(m.progress * 100)}%)`) }
            );

            console.log("Raw OCR Text:", text);

            // 2. Parse text with improved regex for tables
            const rows = text.split('\n');
            const extractedValues = {};

            // Normalize helper
            const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9.]/g, '');

            // Specific Keyword mapping based on uploaded images
            // KEYWORD_MAP is imported from utils/bloodAnalysis.js

            rows.forEach(row => {
                const lowerRow = row.toLowerCase().trim();
                if (!lowerRow) return;

                // Try to match each parameter
                Object.keys(KEYWORD_MAP).forEach(paramKey => {
                    const synonyms = KEYWORD_MAP[paramKey];
                    const foundSynonym = synonyms.find(s => lowerRow.includes(s));

                    if (foundSynonym && !extractedValues[paramKey]) {
                        // FIX: "Ghost Values" / Extra Values Error
                        // Problem: The scanner might pick up "12" from "12/05/2023 Hemoglobin" or "1. Hemoglobin"
                        // Solution: Split the string by the keyword and ONLY look at the text AFTER the keyword (to the right).

                        const parts = lowerRow.split(foundSynonym);
                        if (parts.length < 2) return;

                        const textAfterKeyword = parts.slice(1).join(' ').trim();

                        // Regex Improvements:
                        // 1. Prioritize patterns with decimals: 5.3, 10.5
                        // 2. Then look for integers
                        // Match numbers, but exclude those attached to % or similar immediately if needed
                        const decimalMatch = textAfterKeyword.match(/(\d+\.\d+)/);
                        const integerMatch = textAfterKeyword.match(/(\d+)/);

                        let val = null;

                        if (decimalMatch) {
                            val = parseFloat(decimalMatch[0]);
                        } else if (integerMatch) {
                            val = parseFloat(integerMatch[0]);
                        }

                        if (val !== null && !isNaN(val)) {
                            // SANITY CHECK: Compare against Medical Range to detect OCR errors (like 53 instead of 5.3)
                            const range = MEDICAL_RANGES[paramKey];
                            if (range) {
                                // If value is way out of range (e.g., > 5x max), it might be a missing decimal
                                // Heuristic: If we dividing by 10 puts it right in the middle of Normal range, assume missed decimal.
                                // But be careful not to auto-fix actual high values. Only if it looks like a formatting error.

                                // Specific Fix for common Tesseract "missed dot" error:
                                if (val > range.max * 5) {
                                    if ((val / 10) >= range.min && (val / 10) <= range.max) {
                                        console.log(`Auto-correcting ${paramKey}: ${val} -> ${val / 10}`);
                                        val = val / 10;
                                    } else if ((val / 100) >= range.min && (val / 100) <= range.max) {
                                        // e.g. 5.35 -> 535
                                        val = val / 100;
                                    }
                                }

                                // Ignore if it looks like a Date (e.g. 2023) or completely wild
                                if (val > 1900 && val < 2100 && paramKey !== 'total_count') {
                                    return; // Likely a year
                                }
                            }

                            extractedValues[paramKey] = val;
                        }
                    }
                });
            });

            // 3. Analyze only what was found
            if (Object.keys(extractedValues).length === 0) {
                // SHOW ERROR with Raw Text for debugging
                const userConfirmed = window.confirm(
                    "Automatic scanning failed to find exact values. \n\nSee raw text?\n" + text.substring(0, 100) + "..."
                );
                if (userConfirmed) alert("Full Text Found by AI:\n" + text);

                setIsLoading(false);
                return;
            }

            // ** Run Disease Prediction Engine **
            const predictedRisks = generateDiseasePredictions(extractedValues);

            analyzeReport({
                date: new Date().toLocaleDateString(),
                values: extractedValues,
                risks: predictedRisks // Pass to analyzeReport
            });

        } catch (err) {
            console.error(err);
            alert("Error parsing image. Please try a clearer photo.");
        } finally {
            setIsLoading(false);
            setStatusText('');
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check if it's an image
        if (file.type.startsWith('image/')) {
            setReport(file);

            if (scanMode === 'advanced' && serverStatus === 'online') {
                processWithServer(file);
            } else {
                processImage(file);
            }
        } else {
            alert("Please upload an Image (JPG/PNG) for OCR scanning.");
        }
    };

    // --- SERVER SIDE LOGIC ---
    const processWithServer = async (file) => {
        setIsLoading(true);
        setStatusText('Sending to ML Neural Network...');

        const formData = new FormData();
        formData.append('file', file);

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const response = await fetch(`${API_URL}/analyze`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || "Server Error");

            console.log("ML Results:", data);

            // For now, since model isn't trained, we might not get perfect keys.
            // We interpret the raw results or mock success for demo.
            // In a real app, 'extract.py' would return exact keys like 'hemoglobin'.

            // DEMO FALLBACK: If raw_results is empty (untrained model), use Tesseract as backup
            // or just notify user.
            if (!data.raw_results || data.raw_results.length === 0) {
                alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan.");
                processImage(file); // Fallback
                return;
            }

            // If we had valid data, we would parse it here:
            // const extractedValues = mapServerDataToValues(data.raw_results);
            // analyzeReport({ date: ..., values: extractedValues });

        } catch (err) {
            console.error(err);
            alert("Error connecting to Python Backend. Make sure 'server.py' is running!");
            processImage(file); // Fallback to basic
        } finally {
            setIsLoading(false);
            setStatusText('');
        }
    };

    const analyzeReport = (data) => {
        // Use shared logic to generate full analysis structure
        const fullAnalysis = analyzeBloodReport(data.values, data.risks);

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
                    {/* Manual Entry Section */}

                    <div className="card manual-card">
                        <h3>Quick Check</h3>
                        <p className="sub-label">Enter a single value to check results instantly.</p>
                        <form onSubmit={handleManualCheck} className="manual-form">
                            <div className="row">
                                <select
                                    className="input-field"
                                    value={manualParam}
                                    onChange={(e) => { setManualParam(e.target.value); setManualResult(null); }}
                                >
                                    {Object.keys(MEDICAL_RANGES).map(key => (
                                        <option key={key} value={key}>
                                            {key.replace(/_/g, ' ').toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    step="0.1"
                                    className="input-field"
                                    placeholder="Value"
                                    value={manualValue}
                                    onChange={(e) => setManualValue(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-primary small-btn">
                                Check <Search size={16} />
                            </button>
                        </form>

                        {manualResult && (
                            <div className="manual-result fade-in">
                                <div className={`result-badge ${manualResult.status.toLowerCase()}`}>
                                    {manualResult.status}
                                </div>
                                <p className="result-text">
                                    <strong>{manualResult.parameter.replace(/_/g, ' ').toUpperCase()}:</strong> {manualResult.value} {manualResult.unit}
                                    <br />
                                    <span className="text-muted">Normal: {manualResult.range}</span>
                                </p>
                                {manualResult.status !== 'Normal' && manualResult.foods.length > 0 && (
                                    <div className="diet-tip">
                                        <strong>Tip:</strong> Eat {manualResult.foods.join(', ')}
                                    </div>
                                )}
                                {manualResult.fitnessImpact && (
                                    <div className="fitness-tip">
                                        <strong>Fitness Impact:</strong> {manualResult.fitnessImpact}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="divider">OR</div>

                    {/* Upload Section */}
                    <div className="upload-card">
                        <div className="icon-circle">
                            <Upload size={32} color="var(--color-primary)" />
                        </div>
                        <h3>Upload Report Image</h3>
                        <p>Take a clear photo of your report. AI will scan for values.</p>

                        {/* Mode Toggle */}
                        <div className="scan-mode-toggle">
                            <button
                                className={`mode-btn ${scanMode === 'basic' ? 'active' : ''}`}
                                onClick={() => setScanMode('basic')}
                            >
                                Basic (Browser)
                            </button>
                            <button
                                className={`mode-btn ${scanMode === 'advanced' ? 'active' : ''}`}
                                onClick={() => setScanMode('advanced')}
                            >
                                Advanced (Python ML)
                                {serverStatus === 'online' && <span className="dot online" title="Server Online"></span>}
                                {serverStatus === 'offline' && <span className="dot offline" title="Server Offline (Run server.py)"></span>}
                            </button>
                        </div>

                        <label className="btn-secondary upload-btn">
                            {isLoading ? (statusText || 'Scanning...') : 'Select Image (JPG/PNG)'}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleFileUpload}
                                disabled={isLoading}
                            />
                        </label>
                    </div>

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
