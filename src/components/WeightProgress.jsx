import React, { useState } from 'react';
import { ChevronLeft, TrendingDown, TrendingUp, Minus, Calendar, Activity } from 'lucide-react';

const WeightProgress = ({ onBack, userProfile }) => {
    const [weightLog, setWeightLog] = useState(() => {
        const saved = localStorage.getItem('weight_log');
        return saved ? JSON.parse(saved) : [];
    });
    const [currentWeight, setCurrentWeight] = useState('');

    const handleAddWeight = () => {
        if (!currentWeight || isNaN(currentWeight)) return;

        const newEntry = {
            weight: parseFloat(currentWeight),
            date: new Date().toISOString(),
            displayDate: new Date().toLocaleDateString()
        };

        const updated = [...weightLog, newEntry];
        setWeightLog(updated);
        localStorage.setItem('weight_log', JSON.stringify(updated));
        setCurrentWeight('');
    };

    const calculateProgress = () => {
        if (weightLog.length < 2) return { change: 0, type: 'neutral' };

        const latest = weightLog[weightLog.length - 1].weight;
        const previous = weightLog[weightLog.length - 2].weight;
        const change = latest - previous;

        return {
            change: Math.abs(change).toFixed(1),
            type: change > 0 ? 'gain' : change < 0 ? 'loss' : 'neutral'
        };
    };

    const progress = calculateProgress();
    const initialWeight = userProfile?.weight || (weightLog.length > 0 ? weightLog[0].weight : 0);
    const latestWeight = weightLog.length > 0 ? weightLog[weightLog.length - 1].weight : initialWeight;

    return (
        <div className="weight-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>Weight Progress</h2>
            </div>

            <div className="stats-card">
                <div className="stat-item">
                    <span className="label">Starting Weight</span>
                    <span className="value">{initialWeight} kg</span>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                    <span className="label">Current Weight</span>
                    <span className="value primary">{latestWeight} kg</span>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                    <span className="label">Change</span>
                    <span className={`value ${progress.type}`}>
                        {progress.type === 'gain' && <TrendingUp size={16} />}
                        {progress.type === 'loss' && <TrendingDown size={16} />}
                        {progress.type === 'neutral' && <Minus size={16} />}
                        {progress.change} kg
                    </span>
                </div>
            </div>

            <div className="input-section">
                <h3>Log Current Weight</h3>
                <div className="input-group">
                    <input
                        type="number"
                        placeholder="Enter weight in kg"
                        value={currentWeight}
                        onChange={(e) => setCurrentWeight(e.target.value)}
                        step="0.1"
                    />
                    <button className="add-btn" onClick={handleAddWeight}>
                        Add
                    </button>
                </div>
            </div>

            <div className="history-section">
                <h3>Weight History</h3>
                {weightLog.length === 0 ? (
                    <div className="empty-state">
                        <Activity size={40} color="#cbd5e1" />
                        <p>No entries yet. Start logging your weight!</p>
                    </div>
                ) : (
                    <div className="history-list">
                        {[...weightLog].reverse().map((entry, idx) => (
                            <div key={idx} className="history-item">
                                <div className="date-badge">
                                    <Calendar size={14} />
                                    {entry.displayDate}
                                </div>
                                <div className="weight-display">{entry.weight} kg</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .weight-container {
                    padding: var(--spacing-md);
                    padding-bottom: 40px;
                }
                .header-row {
                   display: flex;
                   align-items: center;
                   gap: var(--spacing-md);
                   margin-bottom: 20px;
                }
                .back-btn { background: transparent; color: var(--color-text-main); padding: 0; }
                
                .stats-card {
                    background: white;
                    padding: 20px;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 25px;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                }
                .label {
                    font-size: 11px;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                }
                .value {
                    font-size: 18px;
                    font-weight: bold;
                    color: var(--color-text-main);
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .value.primary { color: var(--color-primary); }
                .value.gain { color: #f59e0b; }
                .value.loss { color: #10b981; }
                .value.neutral { color: #64748b; }
                .divider {
                    width: 1px;
                    background: #e2e8f0;
                    align-self: stretch;
                }

                .input-section {
                    background: white;
                    padding: 20px;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                    margin-bottom: 25px;
                }
                .input-section h3 {
                    font-size: 14px;
                    margin-bottom: 15px;
                    color: var(--color-text-main);
                }
                .input-group {
                    display: flex;
                    gap: 10px;
                }
                .input-group input {
                    flex: 1;
                    padding: 12px;
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font-size: 14px;
                }
                .add-btn {
                    background: var(--color-primary);
                    color: white;
                    padding: 12px 24px;
                    border-radius: var(--radius-md);
                    font-weight: 600;
                    box-shadow: var(--shadow-sm);
                }

                .history-section h3 {
                    font-size: 14px;
                    margin-bottom: 15px;
                    color: var(--color-text-main);
                }
                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 40px 20px;
                    color: var(--color-text-muted);
                    font-size: 13px;
                }
                .history-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .history-item {
                    background: white;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-sm);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .date-badge {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 12px;
                    color: var(--color-text-secondary);
                }
                .weight-display {
                    font-size: 16px;
                    font-weight: bold;
                    color: var(--color-primary);
                }
            `}</style>
        </div>
    );
};

export default WeightProgress;
