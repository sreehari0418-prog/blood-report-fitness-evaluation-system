import React, { useState, useEffect } from 'react';
import { ChevronLeft, Upload, FileText, CheckCircle, AlertTriangle, AlertCircle, Search, ScanLine } from 'lucide-react';
import Tesseract from 'tesseract.js';

const MEDICAL_RANGES = {
    // CBC
    'hemoglobin': { min: 12.5, max: 16.0, unit: 'gm/dl', foods: ['Spinach', 'Red Meat', 'Pumpkin Seeds'] },
    'total_count': { min: 4000, max: 11000, unit: 'cells/cumm', foods: ['Vitamin C', 'Garlic', 'Ginger'] },
    'neutrophil': { min: 40, max: 70, unit: '%', foods: [] },
    'lymphocyte': { min: 20, max: 45, unit: '%', foods: [] },
    'eosinophil': { min: 2, max: 8, unit: '%', foods: [] },
    'monocyte': { min: 1, max: 6, unit: '%', foods: [] },
    'basophil': { min: 0, max: 1, unit: '%', foods: [] },
    'platelet_count': { min: 1.5, max: 4.5, unit: 'Lakhs/cumm', foods: ['Papaya Leaf', 'Pomegranate'] },
    'esr': { min: 0, max: 20, unit: 'mm/hr', foods: ['Anti-inflammatory foods'] },
    'mcv': { min: 80, max: 100, unit: 'fL', foods: ['Vitamin B12', 'Folic Acid'] },
    'mch': { min: 27, max: 32, unit: 'pg', foods: ['Iron rich foods'] },
    'mchc': { min: 32, max: 36, unit: 'g/dL', foods: [] },

    // Thyroid
    't3': { min: 0.85, max: 2.68, unit: 'nmol/L', foods: ['Brazil Nuts', 'Seaweed'] },
    't4': { min: 5.1, max: 14.1, unit: 'ug/dL', foods: ['Dairy', 'Eggs', 'Fish'] },
    'tsh': { min: 0.27, max: 4.2, unit: 'uIU/mL', foods: ['Avoid cruciferous veg if hypothyroid'] },

    // Sugar & Lipids
    'glucose_fasting': { min: 70, max: 100, unit: 'mg/dL', foods: ['Low Carb', 'High Fiber'] },
    'glucose_pp': { min: 70, max: 140, unit: 'mg/dL', foods: ['Complex Carbs', 'Vegetables'] },
    'cholesterol': { min: 0, max: 200, unit: 'mg/dL', foods: ['Oats', 'Nuts', 'Olive Oil'] },
    'triglycerides': { min: 0, max: 150, unit: 'mg/dL', foods: ['Avoid Sugar', 'Eat Fish'] },
    'hdl_cholesterol': { min: 40, max: 60, unit: 'mg/dL', foods: ['Avocado', 'Salmon'] },
    'ldl_cholesterol': { min: 0, max: 100, unit: 'mg/dL', foods: ['Fiber', 'Soy', 'Almonds'] },

    // Kidney
    'urea': { min: 15, max: 40, unit: 'mg/dL', foods: ['Reduce Protein', 'Hydrate'] },
    'creatinine': { min: 0.6, max: 1.2, unit: 'mg/dL', foods: ['Reduce Red Meat', 'Hydrate'] },
    'uric_acid': { min: 3.5, max: 7.2, unit: 'mg/dL', foods: ['Avoid Alcohol', 'Cherries', 'Vitamin C'] },
    'sodium': { min: 135, max: 145, unit: 'mmol/L', foods: ['Hydrate'] },
    'potassium': { min: 3.5, max: 5.5, unit: 'mmol/L', foods: ['Banana', 'Coconut Water'] },

    // Liver
    'bilirubin_total': { min: 0.3, max: 1.2, unit: 'mg/dL', foods: ['Radish', 'Lemon Water'] },
    'sgot': { min: 5, max: 40, unit: 'U/L', foods: ['Leafy Greens', 'Coffee'] },
    'sgpt': { min: 7, max: 56, unit: 'U/L', foods: ['Whole Grains', 'Avoid Alcohol'] },
    'alkaline_phosphatase': { min: 44, max: 147, unit: 'IU/L', foods: ['Vitamin D'] }
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

    useEffect(() => {
        const saved = localStorage.getItem('blood_reports');
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    // --- OCR LOGIC ---
    const processImage = async (file) => {
        setIsLoading(true);
        setStatusText('Initializing OCR Engine...');

        try {
            // 1. Recognize text using Tesseract
            setStatusText('Scanning text... This may take a moment.');
            const { data: { text } } = await Tesseract.recognize(
                file,
                'eng',
                { logger: m => console.log(m) } // Optional logger
            );

            setStatusText('Analyzing extracted data...');
            console.log("Extracted Text:", text); // Debugging

            // 2. Parse text for keywords and values
            const extractedValues = {};
            const lowerText = text.toLowerCase().replace(/\s+/g, ' '); // Normalize

            Object.keys(MEDICAL_RANGES).forEach(key => {
                // Create regex to find key followed by numbers
                // Matches: "hemoglobin" ... "13.5" or "hemoglobin 13.5"
                // Adjust key for display names (e.g. "total count")
                const searchKey = key.replace(/_/g, ' ');

                // Regex explanation:
                // \b${searchKey}\b : match keyword word boundary
                // .{0,20} : allow up to 20 ignored characters (colons, units, etc) in between
                // (\d+(\.\d+)?) : capture number (int or float)
                const regex = new RegExp(`${searchKey}.{0,20}(\\d+(\\.\\d+)?)`, 'i');

                const match = lowerText.match(regex);
                if (match && match[1]) {
                    extractedValues[key] = parseFloat(match[1]);
                }
            });

            // 3. Analyze only what was found
            if (Object.keys(extractedValues).length === 0) {
                alert("Could not detect any known blood parameters clearly. Please try a clearer image or manual entry.");
                setIsLoading(false);
                return;
            }

            analyzeReport({
                date: new Date().toLocaleDateString(),
                values: extractedValues
            });

        } catch (err) {
            console.error(err);
            alert("Error scanning image. Please try again.");
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
            processImage(file);
        } else {
            alert("Please upload an Image (JPG/PNG) for OCR scanning.");
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

            if (status !== 'Normal' && range.foods.length > 0) {
                suggestions.push({
                    parameter: key,
                    status: status,
                    foods: range.foods
                });
            }

            results.push({
                parameter: key,
                value: val,
                unit: range.unit,
                range: `${range.min}-${range.max}`,
                status
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
            foods: range.foods
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
                            <h3>🥗 Diet Suggestions</h3>
                            {analyzedData.suggestions.map((s, i) => (
                                <div key={i} className="suggestion-item">
                                    <strong>{s.status} {s.parameter.replace(/_/g, ' ')}:</strong>
                                    <p>Run: {s.foods.join(', ')}</p>
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

        .suggestions-box { margin-top: 20px; background: #fffbeb; padding: 15px; border-radius: var(--radius-md); }
        .suggestions-box h3 { font-size: 14px; margin-bottom: 10px; color: #92400e; }
        .suggestion-item { font-size: 12px; margin-bottom: 5px; }
      `}</style>
        </div>
    );
};

export default BloodEvaluation;
