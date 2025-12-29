import React, { useState, useEffect } from 'react';
import { ChevronLeft, Upload, FileText, CheckCircle, AlertTriangle, AlertCircle, Search, ScanLine } from 'lucide-react';
import Tesseract from 'tesseract.js';

const MEDICAL_RANGES = {
    // CBC
    'hemoglobin': {
        min: 12.5, max: 16.0, unit: 'gm/dl',
        foods: ['Spinach', 'Red Meat', 'Pumpkin Seeds'],
        impact: { low: "You may experience higher fatigue during cardio. Consider lower intensity now.", high: "Rarely caused by high altitude or smoking. Ensure good hydration." }
    },
    'total_count': {
        min: 4000, max: 11000, unit: 'cells/cumm',
        foods: ['Vitamin C', 'Garlic', 'Ginger'],
        impact: { low: "Immunity might be lower. Skip high-intensity sessions if you feel weak.", high: "Body is fighting something. Rest and recover properly." }
    },
    'neutrophil': { min: 40, max: 70, unit: '%', foods: [], impact: {} },
    'lymphocyte': { min: 20, max: 45, unit: '%', foods: [], impact: {} },
    'eosinophil': { min: 2, max: 8, unit: '%', foods: [], impact: {} },
    'monocyte': { min: 1, max: 6, unit: '%', foods: [], impact: {} },
    'basophil': { min: 0, max: 1, unit: '%', foods: [], impact: {} },
    'platelet_count': {
        min: 1.5, max: 4.5, unit: 'Lakhs/cumm',
        foods: ['Papaya Leaf', 'Pomegranate'],
        impact: { low: "Careful to avoid injury. High-impact sports are not recommended.", high: "Can indicate inflammation. Focus on recovery." }
    },
    'esr': { min: 0, max: 20, unit: 'mm/hr', foods: ['Anti-inflammatory foods'], impact: { high: "High inflammation. Focus on light movement and stretching." } },
    'mcv': { min: 80, max: 100, unit: 'fL', foods: ['Vitamin B12', 'Folic Acid'], impact: { low: "Lower oxygen capacity. Strength training may feel significantly harder." } },
    'mch': { min: 27, max: 32, unit: 'pg', foods: ['Iron rich foods'], impact: { low: "Fatigue risk. Focus on foundational strength movements." } },
    'mchc': { min: 32, max: 36, unit: 'g/dL', foods: [], impact: {} },

    // Thyroid
    't3': { min: 0.85, max: 2.68, unit: 'nmol/L', foods: ['Brazil Nuts', ' Seaweed'], impact: { low: "Lowered metabolism. You might find it harder to maintain energy." } },
    't4': { min: 5.1, max: 14.1, unit: 'ug/dL', foods: ['Dairy', 'Eggs', 'Fish'], impact: { low: "Similar to T3, watch for sluggishness during workouts." } },
    'tsh': { min: 0.27, max: 4.2, unit: 'uIU/mL', foods: ['Avoid cruciferous veg if hypothyroid'], impact: { high: "Watch for weight gain and low energy levels during routine." } },

    // Sugar & Lipids
    'glucose_fasting': {
        min: 70, max: 100, unit: 'mg/dL',
        foods: ['Low Carb', 'High Fiber'],
        impact: { high: "Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.", low: "Potential for dizziness. Have a small snack before exercise." }
    },
    'glucose_pp': { min: 70, max: 140, unit: 'mg/dL', foods: ['Complex Carbs', 'Vegetables'], impact: { high: "Spikes can affect recovery. A 10-min walk after meals is recommended." } },
    'cholesterol': { min: 0, max: 200, unit: 'mg/dL', foods: ['Oats', 'Nuts', 'Olive Oil'], impact: { high: "Focus on heart-healthy cardio like swimming or brisk walking." } },
    'triglycerides': { min: 0, max: 150, unit: 'mg/dL', foods: ['Avoid Sugar', 'Eat Fish'], impact: { high: "Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio." } },
    'hdl_cholesterol': { min: 40, max: 60, unit: 'mg/dL', foods: ['Avocado', 'Salmon'], impact: { low: "HIIT or intensive cardio can help boost this 'good' cholesterol." } },
    'ldl_cholesterol': { min: 0, max: 100, unit: 'mg/dL', foods: ['Fiber', 'Soy', 'Almonds'], impact: { high: "Heart health priority. Daily steady movement is mandatory." } },

    // Kidney
    'urea': { min: 15, max: 40, unit: 'mg/dL', foods: ['Reduce Protein', 'Hydrate'], impact: { high: "Kidney stress. Hydrate well and limit protein supplement intake temporarily." } },
    'creatinine': { min: 0.6, max: 1.2, unit: 'mg/dL', foods: ['Reduce Red Meat', 'Hydrate'], impact: { high: "Ensure excellent hydration; avoid over-exertion in extreme heat." } },
    'uric_acid': { min: 3.5, max: 7.2, unit: 'mg/dL', foods: ['Avoid Alcohol', 'Cherries', 'Vitamin C'], impact: { high: "Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore." } },
    'sodium': { min: 135, max: 145, unit: 'mmol/L', foods: ['Hydrate'], impact: { low: "Performance risk. Monitor salt loss during long workout sessions." } },
    'potassium': { min: 3.5, max: 5.5, unit: 'mmol/L', foods: ['Banana', 'Coconut Water'], impact: { low: "High risk of muscle cramps. Ensure steady electrolyte intake." } },

    // Liver
    'bilirubin_total': { min: 0.3, max: 1.2, unit: 'mg/dL', foods: ['Radish', 'Lemon Water'], impact: { high: "Liver stress. Keep training intensity moderate and skip supplements." } },
    'sgot': { min: 5, max: 40, unit: 'U/L', foods: ['Leafy Greens', 'Coffee'], impact: { high: "Could be muscle damage from training or liver stress. Take a rest day." } },
    'sgpt': { min: 7, max: 56, unit: 'U/L', foods: ['Whole Grains', 'Avoid Alcohol'], impact: { high: "Focus on recovery. Avoid using pain killers like Tylenol if high." } },
    'alkaline_phosphatase': { min: 44, max: 147, unit: 'IU/L', foods: ['Vitamin D'], impact: { low: "Vitamin D deficiency. Impacts bone health and muscle strength." } }
};

const BloodEvaluation = ({ onBack }) => {
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

        const saved = localStorage.getItem('blood_reports');
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

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

    // --- OCR LOGIC ---
    const processImage = async (file) => {
        setIsLoading(true);
        setStatusText('Starting OCR Engine...');

        try {
            // 1. Recognize text using Tesseract
            const { data: { text } } = await Tesseract.recognize(
                file,
                'eng',
                { logger: m => setStatusText(`${m.status} (${Math.round(m.progress * 100)}%)`) }
            );

            console.log("Raw OCR Text:", text);

            // 2. Parse text with improved regex
            const extractedValues = {};
            // Normalize: remove special chars, extra spaces, toLowerCase
            const normalizedText = text.toLowerCase()
                .replace(/[^a-z0-9\s\.]/g, ' ') // keep dots for decimals
                .replace(/\s+/g, ' ');

            Object.keys(MEDICAL_RANGES).forEach(key => {
                // Prepare variations of the key
                // e.g. "hemoglobin", "haemoglobin"
                const searchKey = key.replace(/_/g, ' ');

                // Robust Regex:
                // \b${searchKey} : Find the word
                // .{0,30} : Allow up to 30 chars of junk/units/separators
                // (\d{1,3}(\.\d{1,2})?) : Capture number (1-3 digits, optional decimal)
                // We handle common OCR errors in regex if possible, but pure regex is limited.
                const regex = new RegExp(`${searchKey}.{0,30}\\s(\\d{1,3}(\\.\\d{1,2})?)`, 'i');

                const match = normalizedText.match(regex);
                if (match && match[1]) {
                    extractedValues[key] = parseFloat(match[1]);
                }
            });

            // Fallback for tricky ones: Platelets often read as "platelet count" or just "platelet"
            if (!extractedValues['platelet_count'] && normalizedText.includes('platelet')) {
                const match = normalizedText.match(/platelet.{0,20}\s(\d+(\.\d+)?)/i);
                if (match) extractedValues['platelet_count'] = parseFloat(match[1]);
            }

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

            analyzeReport({
                date: new Date().toLocaleDateString(),
                values: extractedValues
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
        const results = [];
        const suggestions = [];

        Object.keys(data.values).forEach(key => {
            const val = parseFloat(data.values[key]);
            const range = MEDICAL_RANGES[key];
            if (!range) return;

            let status = 'Normal';
            if (val < range.min) status = 'Low';
            if (val > range.max) status = 'High';

            const fitnessImpact = status === 'Low' ? range.impact?.low : (status === 'High' ? range.impact?.high : null);

            if (status !== 'Normal') {
                suggestions.push({
                    parameter: key,
                    status: status,
                    foods: range.foods,
                    fitnessImpact: fitnessImpact
                });
            }

            results.push({
                parameter: key,
                value: val,
                unit: range.unit,
                range: `${range.min}-${range.max}`,
                status,
                fitnessImpact
            });
        });

        const fullAnalysis = { ...data, results, suggestions };
        setAnalyzedData(fullAnalysis);

        // Save to history
        const newHistory = [fullAnalysis, ...history];
        setHistory(newHistory);
        localStorage.setItem('blood_reports', JSON.stringify(newHistory));
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
