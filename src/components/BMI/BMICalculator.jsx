import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const BMICalculator = ({ userProfile, onBack }) => {
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState('');
    const [healthyRange, setHealthyRange] = useState('');
    const [riskPercentage, setRiskPercentage] = useState(0);
    const [needleRotation, setNeedleRotation] = useState(-90);

    useEffect(() => {
        if (userProfile) {
            calculateMetrics();
        }
    }, [userProfile]);

    const calculateMetrics = () => {
        const { weight, heightCm } = userProfile;
        if (!weight || !heightCm) return;

        // BMI Formula: weight (kg) / (height (m))^2
        const heightM = heightCm / 100;
        const bmiValue = parseFloat((weight / (heightM * heightM)).toFixed(1));
        setBmi(bmiValue);

        // Categories & Risk
        let cat = '';
        let risk = 0; // 0 to 100 for speedometer
        let rot = -90; // -90 (left) to 90 (right)

        if (bmiValue < 18.5) {
            cat = 'Underweight';
            risk = 20;
            rot = -60;
        } else if (bmiValue < 25) {
            cat = 'Normal Weight';
            risk = 0; // Ideal
            rot = 0; // Center (Green)
        } else if (bmiValue < 30) {
            cat = 'Overweight';
            risk = 40;
            rot = 45;
        } else {
            cat = 'Obese';
            risk = 80;
            rot = 80;
        }
        setCategory(cat);
        setRiskPercentage(risk);

        // Smooth transition for needle
        // Map BMI roughly to angle: 
        // 15 -> -90deg, 18.5 -> -30deg, 22 -> 0deg, 25 -> 30deg, 30 -> 60deg, 40 -> 90deg
        // Simplified mapping
        let angle = -90;
        if (bmiValue < 18.5) angle = -45;
        else if (bmiValue >= 18.5 && bmiValue < 25) angle = 0;
        else if (bmiValue >= 25 && bmiValue < 30) angle = 45;
        else angle = 75;

        // More dynamic angle
        const minBMI = 15;
        const maxBMI = 40;
        const clampedBMI = Math.max(minBMI, Math.min(bmiValue, maxBMI));
        const range = maxBMI - minBMI;
        const fraction = (clampedBMI - minBMI) / range; // 0 to 1
        const dynamicAngle = (fraction * 180) - 90;

        setNeedleRotation(dynamicAngle);

        // Healthy Range
        const minWeight = (18.5 * heightM * heightM).toFixed(1);
        const maxWeight = (24.9 * heightM * heightM).toFixed(1);
        setHealthyRange(`${minWeight}kg - ${maxWeight}kg`);
    };

    return (
        <div className="bmi-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>BMI Calculator</h2>
            </div>

            <div className="card result-card">
                <div className="speedometer-wrapper">
                    <div className="speedometer">
                        {/* SVG Gauge */}
                        <svg viewBox="0 0 200 110" className="gauge-svg">
                            <path d="M 20 100 A 80 80 0 0 1 73 26" fill="none" stroke="#FFD93D" strokeWidth="15" /> {/* Underweight - Yellow */}
                            <path d="M 73 26 A 80 80 0 0 1 127 26" fill="none" stroke="#6BCB77" strokeWidth="15" /> {/* Normal - Green */}
                            <path d="M 127 26 A 80 80 0 0 1 180 100" fill="none" stroke="#FF6B6B" strokeWidth="15" /> {/* Overweight - Red */}

                            {/* Needle */}
                            <line
                                x1="100" y1="100"
                                x2="100" y2="30"
                                stroke="#333"
                                strokeWidth="4"
                                strokeLinecap="round"
                                transform={`rotate(${needleRotation} 100 100)`}
                                className="needle"
                            />
                            <circle cx="100" cy="100" r="5" fill="#333" />
                        </svg>
                        <div className="bmi-value">
                            <h1>{bmi}</h1>
                            <p>{category}</p>
                        </div>
                    </div>
                </div>

                <div className="risk-indicator">
                    <p>Health Risk: <span className={bmi >= 25 || bmi < 18.5 ? 'text-danger' : 'text-success'}>
                        {bmi >= 30 ? 'High' : (bmi >= 25 ? 'Moderate' : (bmi < 18.5 ? 'Moderate' : 'Low'))}
                    </span></p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-box">
                    <h4>Healthy Weight Range</h4>
                    <p>{healthyRange}</p>
                </div>
                <div className="stat-box">
                    <h4>Weight for Age</h4>
                    <p className="highlight">65th Percentile</p>
                    <span className="sub-text">(Estimated)</span>
                </div>
                <div className="stat-box">
                    <h4>Height for Age</h4>
                    <p className="highlight">70th Percentile</p>
                    <span className="sub-text">(Estimated)</span>
                </div>
            </div>

            {/* Manual Validation Section */}
            <div className="card manual-bmi-card">
                <h3>Validate a BMI Value</h3>
                <p className="sub-text">Enter a BMI number to check its category.</p>
                <div className="manual-input-row">
                    <input
                        type="number"
                        placeholder="e.g. 24.5"
                        className="input-field"
                        onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (val > 0) {
                                // Re-using logic roughly for quick check
                                // In a real refactor, we'd pull logic out. 
                                // For now, simple check:
                                let cat = '';
                                if (val < 18.5) cat = 'Underweight 🔵';
                                else if (val < 25) cat = 'Normal ✅';
                                else if (val < 30) cat = 'Overweight ⚠️';
                                else cat = 'Obese 🚨';

                                // Update UI just for this section? 
                                // Or maybe just show it inline.
                                e.target.nextElementSibling.innerText = cat;
                                e.target.nextElementSibling.style.display = 'block';
                            } else {
                                e.target.nextElementSibling.style.display = 'none';
                            }
                        }}
                    />
                    <div className="manual-result-badge" style={{ display: 'none' }}></div>
                </div>
            </div>

            <style>{`
        .bmi-container {
           padding: var(--spacing-md);
        }
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-md);
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .result-card {
           background: white;
           padding: var(--spacing-xl);
           text-align: center;
           margin-bottom: var(--spacing-lg);
        }
        .speedometer-wrapper {
           position: relative;
           width: 220px;
           margin: 0 auto;
        }
        .gauge-svg {
           display: block;
           width: 100%;
        }
        .needle {
           transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .bmi-value {
           position: absolute;
           bottom: 0;
           left: 0;
           right: 0;
           text-align: center;
           transform: translateY(20px);
        }
        .bmi-value h1 {
           font-size: 3rem;
           color: var(--color-text-main);
        }
        .risk-indicator {
           margin-top: 40px;
           font-weight: 600;
        }
        .text-danger { color: var(--color-danger); }
        .text-success { color: var(--color-success); }

        .stats-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: var(--spacing-md);
        }
        .stat-box {
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
           box-shadow: var(--shadow-sm);
        }
        .stat-box h4 {
           font-size: var(--font-size-sm);
           color: var(--color-text-secondary);
           margin-bottom: 5px;
        }
        .stat-box p {
           font-size: var(--font-size-lg);
           font-weight: bold;
           color: var(--color-text-main);
        }
        .sub-text {
           font-size: 10px;
           color: #999;
        }

        .manual-bmi-card {
            margin-top: 20px;
            background: #f8fafc;
            border: 1px dashed #cbd5e1;
        }
        .manual-bmi-card h3 { font-size: 16px; margin-bottom: 5px; }
        .manual-input-row { 
            display: flex; 
            align-items: center; 
            gap: 15px; 
            margin-top: 15px; 
        }
        .manual-input-row .input-field { width: 100px; padding: 8px; }
        .manual-result-badge {
            font-weight: bold;
            font-size: 14px;
            padding: 5px 10px;
            background: white;
            border-radius: 99px;
            border: 1px solid #e2e8f0;
            box-shadow: var(--shadow-sm);
        }
      `}</style>
        </div>
    );
};

export default BMICalculator;
