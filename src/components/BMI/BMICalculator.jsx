import React, { useState, useEffect } from 'react';
import { ChevronLeft, Info, Activity, RefreshCw } from 'lucide-react';

const BMICalculator = ({ userProfile, onBack }) => {
    // State for Advanced Inputs
    const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'imperial'
    const [height, setHeight] = useState(''); // cm or ft
    const [heightInches, setHeightInches] = useState(''); // for imperial (ft/in)
    const [weight, setWeight] = useState(''); // kg or lbs
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState('sedentary');

    // Results State
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [idealWeight, setIdealWeight] = useState('');
    const [healthStatus, setHealthStatus] = useState('');

    // Auto-fill from profile on load
    useEffect(() => {
        if (userProfile) {
            if (userProfile.height) setHeight(userProfile.height);
            if (userProfile.weight) setWeight(userProfile.weight);
            if (userProfile.age) setAge(userProfile.age);
            if (userProfile.gender) setGender(userProfile.gender.toLowerCase());
        }
    }, [userProfile]);

    const calculateBMI = () => {
        let heightM = 0;
        let weightKg = 0;

        // Convert to Metric
        if (unitSystem === 'metric') {
            if (!height || !weight) return;
            heightM = parseFloat(height) / 100;
            weightKg = parseFloat(weight);
        } else {
            // Imperial
            if (!height || !weight) return; // 'height' acts as feet here
            const totalInches = (parseFloat(height) * 12) + (parseFloat(heightInches) || 0);
            heightM = totalInches * 0.0254;
            weightKg = parseFloat(weight) * 0.453592;
        }

        if (heightM <= 0 || weightKg <= 0) return;

        // BMI Calculation
        const bmiValue = parseFloat((weightKg / (heightM * heightM)).toFixed(1));
        setBmi(bmiValue);

        // Category & Health Logic
        let cat = '';
        let color = '';
        let status = '';

        if (bmiValue < 18.5) {
            cat = 'Underweight';
            color = 'var(--color-accent)';
            status = 'You may need to increase your calorie intake. Focus on nutrient-dense foods.';
        } else if (bmiValue < 24.9) {
            cat = 'Normal Weight';
            color = 'var(--color-success)';
            status = 'Great job! You have a healthy body weight. Maintain it with balanced diet and exercise.';
        } else if (bmiValue < 29.9) {
            cat = 'Overweight';
            color = 'var(--color-warning)';
            status = 'Try to incorporate more cardio and monitor portion sizes to reach a healthier range.';
        } else {
            cat = 'Obese';
            color = 'var(--color-danger)';
            status = 'It is recommended to consult a healthcare provider for a personalized weight management plan.';
        }
        setCategory({ label: cat, color });
        setHealthStatus(status);

        // Ideal Body Weight (Robinson Formula)
        // Men: 52 kg + 1.9 kg per inch over 5 feet
        // Women: 49 kg + 1.7 kg per inch over 5 feet
        const heightInInches = heightM / 0.0254;
        const inchesOver5ft = heightInInches - 60;

        let ideal = 0;
        if (gender === 'male') {
            ideal = 52 + (1.9 * Math.max(0, inchesOver5ft));
        } else {
            ideal = 49 + (1.7 * Math.max(0, inchesOver5ft));
        }

        setIdealWeight(`${ideal.toFixed(1)} - ${(ideal * 1.1).toFixed(1)} kg`);
    };

    const resetForm = () => {
        setBmi(null);
        setHeight('');
        setWeight('');
        setAge('');
    };

    return (
        <div className="advanced-bmi-container fade-in">
            <div className="bmi-header">
                <button onClick={onBack} className="btn-icon"><ChevronLeft size={24} /></button>
                <h2>Advanced BMI Calculator</h2>
                <div style={{ width: 24 }}></div> {/* Spacer */}
            </div>

            <div className="calculator-grid">
                {/* Input Section */}
                <div className="card input-card">
                    <div className="toggle-row">
                        <button
                            className={`toggle-btn ${unitSystem === 'metric' ? 'active' : ''}`}
                            onClick={() => setUnitSystem('metric')}
                        >Metric (cm/kg)</button>
                        <button
                            className={`toggle-btn ${unitSystem === 'imperial' ? 'active' : ''}`}
                            onClick={() => setUnitSystem('imperial')}
                        >Imperial (ft/lbs)</button>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Gender</label>
                            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Age (years)</label>
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="25" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>{unitSystem === 'metric' ? 'Height (cm)' : 'Height (ft)'}</label>
                            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unitSystem === 'metric' ? "175" : "5"} />
                        </div>
                        {unitSystem === 'imperial' && (
                            <div className="form-group">
                                <label>Inches</label>
                                <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} placeholder="10" />
                            </div>
                        )}
                        <div className="form-group">
                            <label>{unitSystem === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}</label>
                            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unitSystem === 'metric' ? "70" : "150"} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Activity Level</label>
                        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                            <option value="sedentary">Sedentary (Little or no exercise)</option>
                            <option value="light">Lightly active (1-3 days/week)</option>
                            <option value="moderate">Moderately active (3-5 days/week)</option>
                            <option value="active">Very active (6-7 days/week)</option>
                        </select>
                    </div>

                    <div className="action-row">
                        <button className="reset-btn" onClick={resetForm}><RefreshCw size={18} /></button>
                        <button className="calculate-btn" onClick={calculateBMI}>Calculate BMI</button>
                    </div>
                </div>

                {/* Result Section */}
                {bmi && (
                    <div className="card result-card fade-in">
                        <div className="result-header">
                            <h3>Your Result</h3>
                            <div className="bmi-badge" style={{ backgroundColor: category.color }}>
                                {category.label}
                            </div>
                        </div>

                        <div className="bmi-display">
                            <span className="bmi-number" style={{ color: category.color }}>{bmi}</span>
                            <span className="bmi-label">BMI Score</span>
                        </div>

                        <div className="progress-bar-container">
                            <div className="progress-track"></div>
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${Math.min(Math.max((bmi / 40) * 100, 0), 100)}%`,
                                    backgroundColor: category.color
                                }}
                            ></div>
                            <div className="markers">
                                <span style={{ left: '46%' }}>18.5</span>
                                <span style={{ left: '62.5%' }}>25</span>
                                <span style={{ left: '75%' }}>30</span>
                            </div>
                        </div>

                        <div className="health-insight">
                            <div className="insight-item">
                                <Activity size={20} className="icon" />
                                <div>
                                    <h4>Ideal Weight</h4>
                                    <p>{idealWeight}</p>
                                </div>
                            </div>
                            <div className="insight-item">
                                <Info size={20} className="icon" />
                                <div>
                                    <h4>Health Tip</h4>
                                    <p>{healthStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .advanced-bmi-container {
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .bmi-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .btn-icon { background: none; color: var(--color-text-main); padding: 0; }
                
                .toggle-row {
                    display: flex;
                    background: #f1f5f9;
                    border-radius: 12px;
                    padding: 4px;
                    margin-bottom: 20px;
                }
                .toggle-btn {
                    flex: 1;
                    padding: 10px;
                    border-radius: 8px;
                    background: transparent;
                    color: #64748b;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.2s;
                }
                .toggle-btn.active {
                    background: white;
                    color: var(--color-primary);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .form-row {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 15px;
                }
                .form-group { flex: 1; }
                .form-group label {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    color: #475569;
                    margin-bottom: 6px;
                }
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 16px;
                    background: #fff;
                    transition: border-color 0.2s;
                }
                .form-group input:focus, .form-group select:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }

                .action-row {
                    display: flex;
                    gap: 10px;
                    margin-top: 25px;
                }
                .reset-btn {
                    width: 48px;
                    background: #f1f5f9;
                    color: #64748b;
                    border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                }
                .calculate-btn {
                    flex: 1;
                    background: var(--color-primary);
                    color: white;
                    padding: 14px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 16px;
                    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.25);
                }
                .calculate-btn:active { transform: scale(0.98); }

                /* Result Card Styles */
                .result-card {
                    margin-top: 25px;
                    border: 1px solid #e2e8f0;
                }
                .result-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }
                .bmi-badge {
                    padding: 6px 12px;
                    border-radius: 99px;
                    color: white;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                
                .bmi-display {
                    text-align: center;
                    margin-bottom: 25px;
                }
                .bmi-number {
                    display: block;
                    font-size: 4rem;
                    font-weight: 800;
                    line-height: 1;
                }
                .bmi-label {
                    color: #94a3b8;
                    font-size: 14px;
                    font-weight: 500;
                }

                .progress-bar-container {
                    position: relative;
                    height: 12px;
                    background: #f1f5f9;
                    border-radius: 99px;
                    margin-bottom: 30px;
                }
                .progress-fill {
                    height: 100%;
                    border-radius: 99px;
                    transition: width 1s ease-out;
                }
                .markers {
                    position: absolute;
                    top: 15px;
                    left: 0;
                    width: 100%;
                    height: 20px;
                }
                .markers span {
                    position: absolute;
                    transform: translateX(-50%);
                    font-size: 10px;
                    color: #94a3b8;
                    font-weight: 600;
                }
                .markers span::before {
                    content: '';
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    width: 2px;
                    height: 12px;
                    background: white;
                    transform: translateX(-50%);
                }

                .health-insight {
                    background: #f8fafc;
                    border-radius: 12px;
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .insight-item {
                    display: flex;
                    gap: 15px;
                    align-items: flex-start;
                }
                .insight-item .icon {
                    color: var(--color-primary);
                    margin-top: 2px;
                }
                .insight-item h4 {
                    font-size: 14px;
                    margin-bottom: 4px;
                    color: var(--color-text-main);
                }
                .insight-item p {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.4;
                }

                .fade-in { animation: fadeIn 0.4s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

export default BMICalculator;
