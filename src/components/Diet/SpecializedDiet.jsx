import React, { useState, useEffect } from 'react';
import { ChevronLeft, Utensils, AlertCircle, Upload, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { generateDietPlan } from '../../utils/dietGenerator';
import { MEDICAL_RANGES, generateDiseasePredictions, analyzeBloodReport } from '../../utils/bloodAnalysis';
import Tesseract from 'tesseract.js';

const SpecializedDiet = ({ onBack, user }) => {
    const [reportData, setReportData] = useState(null);
    const [dietPlan, setDietPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [activeTab, setActiveTab] = useState('breakfast');

    useEffect(() => {
        // Load latest report from history
        loadLatestReport();
    }, [user]);

    const loadLatestReport = () => {
        const reportKey = (user && user.email) ? `reports_${user.email}` : `temp_reports_${Date.now()}`;
        // Note: For temp reports, the key changes nicely if we don't know the exact timestamp of temp report,
        // but typically we should search for ANY temp report or user report.

        // Fallback: try to find any key starting with reports_ or temp_reports if we can't find exact.
        // Actually, let's keep it simple: assume user context is passed correctly or we search localStorage keys.

        // Simpler strategy: Just look for the one `BloodEvaluation` uses.
        // But `BloodEvaluation` uses `temp_reports_${Date.now()}` which is write-only mostly if not persisted in state.
        // Let's iterate keys to find the most recent one.

        let foundReport = null;
        if (user && user.email) {
            const saved = localStorage.getItem(`reports_${user.email}`);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.length > 0) foundReport = parsed[0]; // First is newest
            }
        } else {
            // Check for any temp reports
            const keys = Object.keys(localStorage).filter(k => k.startsWith('temp_reports_'));
            if (keys.length > 0) {
                // Sort by simplified logic or just pick one
                const saved = localStorage.getItem(keys[keys.length - 1]);
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (parsed.length > 0) foundReport = parsed[0];
                }
            }
        }

        if (foundReport) {
            setReportData(foundReport);
            const plan = generateDietPlan(foundReport);
            setDietPlan(plan);
        }
        setLoading(false);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        try {
            // Simplified OCR just for this quick upload (reusing logic conceptually but implementing inline for speed)
            // Ideally we reuse the function from BloodEvaluation but it's internal there.
            // Copied minimal logic for Diet page specialized upload:

            const { data: { text } } = await Tesseract.recognize(file, 'eng');

            // Simple Parsing (Re-implementing minimal parse for robustness here)
            // ... actually, importing logic would be best but it's inside a component.
            // Let's use a simplified parser for now or just generic mock if text found?
            // No, we need real values for the diet.

            // Let's replicate the extraction loop briefly.
            const rows = text.split('\n');
            const extractedValues = {};
            const KEYWORD_MAP = {
                'hemoglobin': ['hemoglobin', 'hb'],
                'glucose_fasting': ['glucose fasting', 'fbs'],
                'cholesterol': ['cholesterol'],
                'uric_acid': ['uric acid'],
                'tsh': ['tsh']
            };

            rows.forEach(row => {
                const lower = row.toLowerCase();
                Object.keys(KEYWORD_MAP).forEach(k => {
                    if (KEYWORD_MAP[k].some(key => lower.includes(key))) {
                        const nums = row.match(/(\d+(\.\d+)?)/g);
                        if (nums) extractedValues[k] = parseFloat(nums[0]);
                    }
                });
            });

            if (Object.keys(extractedValues).length === 0) {
                alert("Could not detect clear values. Please try a clearer image.");
                setUploading(false);
                return;
            }

            // Use Shared Analysis Logic to ensure data consistency with Blood Analyzer
            const fullAnalysisResults = analyzeBloodReport(extractedValues);

            // Generate Diet Plan
            setDietPlan(generateDietPlan(fullAnalysisResults));
            setReportData(fullAnalysisResults);

            // Saves this report to user history so it persists in Analyzer & Profile
            const reportKey = (user && user.email) ? `reports_${user.email}` : `temp_reports_${Date.now()}`;

            // IMPORTANT: Fetch latest from storage to append, avoiding overwrite issues
            const existing = JSON.parse(localStorage.getItem(reportKey) || '[]');

            const newHistory = [fullAnalysisResults, ...existing];
            localStorage.setItem(reportKey, JSON.stringify(newHistory));

        } catch (err) {
            console.error(err);
            alert("Error scanning file.");
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div className="p-4">Loading Diet Plan...</div>;

    if (!reportData) {
        return (
            <div className="diet-container fade-in">
                <div className="header-row">
                    <button onClick={onBack} className="back-btn"><ChevronLeft size={24} /></button>
                    <h2>Specialized Diet</h2>
                </div>

                <div className="no-report-state">
                    <div className="icon-box">
                        <Utensils size={40} color="var(--color-primary)" />
                    </div>
                    <h3>No Report Uploaded</h3>
                    <p>Please upload your blood test report to get a personalized diet plan tailored to your body's needs.</p>

                    <label className="btn-primary upload-btn-large">
                        {uploading ? 'Scanning...' : 'Upload Report Now'}
                        <Upload size={18} style={{ marginLeft: 8 }} />
                        <input type="file" accept="image/*" hidden onChange={handleFileUpload} disabled={uploading} />
                    </label>
                </div>

                <style>{`
                    .diet-container { padding: 20px; }
                    .header-row { display: flex; align-items: center; gap: 15px; margin-bottom: 30px; }
                    .back-btn { background: none; border: none; padding: 0; cursor: pointer; color: #333; }
                    .no-report-state { 
                        text-align: center; padding: 40px 20px; background: white; 
                        border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                        display: flex; flex-direction: column; align-items: center;
                    }
                    .icon-box { 
                        width: 80px; height: 80px; background: #e0f2fe; border-radius: 50%; 
                        display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
                    }
                    .no-report-state h3 { margin-bottom: 10px; color: #0c4a6e; }
                    .no-report-state p { color: #64748b; margin-bottom: 30px; max-width: 300px; line-height: 1.5; }
                    .upload-btn-large { 
                        padding: 12px 24px; background: var(--color-primary); color: white; 
                        border-radius: 99px; display: inline-flex; align-items: center; cursor: pointer;
                        font-weight: 500;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="diet-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn"><ChevronLeft size={24} /></button>
                <h2>Your Personalized Diet</h2>
            </div>

            {/* Health Alert Summary */}
            <div className="health-summary">
                {dietPlan.recommendations.some(r => r.includes("⚠️")) ? (
                    <div className="alert-badge warning">
                        <AlertCircle size={16} />
                        <span>Based on your report: Modifications applied for specific conditions.</span>
                    </div>
                ) : (
                    <div className="alert-badge success">
                        <Check size={16} />
                        <span>Report looks balanced. Showing base healthy plan.</span>
                    </div>
                )}
            </div>

            {/* Recommendations Carousel */}
            <div className="recommendations-box">
                <h4>Key Guidelines</h4>
                <ul>
                    {dietPlan.recommendations.slice(0, 3).map((rec, i) => (
                        <li key={i} className={rec.includes("⚠️") ? "high-priority" : ""}>{rec}</li>
                    ))}
                </ul>
            </div>

            {/* Meal Tabs */}
            <div className="meal-tabs">
                {['breakfast', 'lunch', 'snacks', 'dinner'].map(meal => (
                    <button
                        key={meal}
                        className={`tab-btn ${activeTab === meal ? 'active' : ''}`}
                        onClick={() => setActiveTab(meal)}
                    >
                        {meal.charAt(0).toUpperCase() + meal.slice(1)}
                    </button>
                ))}
            </div>

            {/* Meal Cards */}
            <div className="meal-content">
                {dietPlan[activeTab].map((item, idx) => (
                    <div key={idx} className="food-card slide-in">
                        <div className="food-header">
                            <h3>{item.name}</h3>
                            <span className="cal-badge">{item.calories} kcal</span>
                        </div>
                        <div className="macros-row">
                            <span className="macro">C: {item.carbs}</span>
                            <span className="macro">P: {item.protein}</span>
                            <span className="macro">F: {item.fat}</span>
                        </div>
                        <div className="benefits-tags">
                            {item.benefits.map((b, i) => <span key={i} className="tag">{b}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Restrictions */}
            {dietPlan.restrictions.length > 0 && (
                <div className="restrictions-box">
                    <h4>⛔ Avoid / Limit</h4>
                    <p>{dietPlan.restrictions.join(', ')}</p>
                </div>
            )}

            <style>{`
                .diet-container { padding: 20px; padding-bottom: 80px; }
                .header-row { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
                .back-btn { background: none; border: none; padding: 0; cursor: pointer; color: #333; }
                
                .health-summary { margin-bottom: 20px; }
                .alert-badge { 
                    padding: 10px 15px; border-radius: 8px; font-size: 13px; 
                    display: flex; align-items: center; gap: 8px; font-weight: 500;
                }
                .alert-badge.warning { background: #fff7ed; color: #c2410c; border: 1px solid #ffedd5; }
                .alert-badge.success { background: #f0fdf4; color: #15803d; border: 1px solid #dcfce7; }

                .recommendations-box { 
                    background: #f8fafc; padding: 15px; border-radius: 12px; margin-bottom: 20px;
                }
                .recommendations-box h4 { margin: 0 0 10px 0; font-size: 14px; color: #475569; }
                .recommendations-box ul { padding-left: 20px; margin: 0; font-size: 13px; color: #334155; }
                .recommendations-box li { margin-bottom: 5px; }
                .recommendations-box li.high-priority { color: #dc2626; font-weight: 600; }

                .meal-tabs { 
                    display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 10px; 
                    scrollbar-width: none;
                }
                .tab-btn {
                    padding: 8px 16px; border-radius: 20px; background: white; border: 1px solid #e2e8f0;
                    font-size: 13px; white-space: nowrap; cursor: pointer; transition: all 0.2s;
                }
                .tab-btn.active {
                    background: var(--color-primary); color: white; border-color: var(--color-primary);
                    box-shadow: 0 4px 6px -1px rgba(var(--color-primary-rgb), 0.4);
                }

                .food-card {
                    background: white; padding: 16px; border-radius: 12px; margin-bottom: 15px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06); border-left: 4px solid var(--color-primary);
                }
                .food-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
                .food-header h3 { margin: 0; font-size: 15px; font-weight: 600; color: #1e293b; max-width: 70%; }
                .cal-badge { font-size: 11px; font-weight: bold; background: #f1f5f9; padding: 4px 8px; border-radius: 6px; color: #64748b; }
                
                .macros-row { display: flex; gap: 15px; margin-bottom: 10px; font-size: 12px; color: #64748b; }
                .macro { font-weight: 500; }
                
                .benefits-tags { display: flex; flex-wrap: wrap; gap: 6px; }
                .tag { font-size: 10px; background: #ecfdf5; color: #047857; padding: 3px 8px; border-radius: 4px; }

                .restrictions-box {
                    margin-top: 25px; padding: 15px; background: #fef2f2; border-radius: 12px;
                    border: 1px dashed #fecaca;
                }
                .restrictions-box h4 { color: #b91c1c; margin: 0 0 5px 0; font-size: 13px; }
                .restrictions-box p { color: #7f1d1d; font-size: 12px; margin: 0; line-height: 1.4; }

                .slide-in { animation: slideIn 0.3s ease-out forwards; }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default SpecializedDiet;
