import React, { useState, useMemo } from 'react';
import { ChevronLeft, TrendingDown, TrendingUp, Minus, Calendar, Activity, Info } from 'lucide-react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    Area,
    AreaChart
} from 'recharts';

const WeightProgress = ({ onBack, userProfile }) => {
    const [weightLog, setWeightLog] = useState(() => {
        if (!userProfile?.email) return [];
        const saved = localStorage.getItem(`weight_log_${userProfile.email}`);
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
        if (userProfile?.email) {
            localStorage.setItem(`weight_log_${userProfile.email}`, JSON.stringify(updated));
        }
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

    const chartData = useMemo(() => {
        return weightLog.map(entry => ({
            ...entry,
            formattedDate: new Date(entry.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
            weight: Number(entry.weight)
        }));
    }, [weightLog]);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="tooltip-date">{payload[0].payload.displayDate}</p>
                    <p className="tooltip-weight">{payload[0].value} <span className="unit">kg</span></p>
                </div>
            );
        }
        return null;
    };

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

            <div className="chart-section">
                <div className="section-header">
                    <h3>Weight Trend</h3>
                    <div className="info-badge">
                        <Info size={12} />
                        <span>Interactive</span>
                    </div>
                </div>
                {weightLog.length > 1 ? (
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={250}>
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis 
                                    dataKey="formattedDate" 
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                    dy={10}
                                />
                                <YAxis 
                                    hide={true}
                                    domain={['dataMin - 5', 'dataMax + 5']}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Area 
                                    type="monotone" 
                                    dataKey="weight" 
                                    stroke="var(--color-primary)" 
                                    strokeWidth={3}
                                    fillOpacity={1} 
                                    fill="url(#colorWeight)" 
                                    animationDuration={1500}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="empty-chart">
                        <p>Not enough data to show trend. Add {2 - weightLog.length} more log{2 - weightLog.length > 1 ? 's' : ''}.</p>
                    </div>
                )}
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

                .chart-section {
                    background: white;
                    padding: 20px;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    margin-bottom: 25px;
                }
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .section-header h3 {
                    font-size: 14px;
                    margin: 0;
                    color: var(--color-text-main);
                }
                .info-badge {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 100px;
                    font-size: 10px;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .chart-wrapper {
                    margin-left: -15px;
                    margin-right: -10px;
                }
                .empty-chart {
                    height: 150px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px dashed #f1f5f9;
                    border-radius: var(--radius-md);
                    color: var(--color-text-muted);
                    font-size: 13px;
                }
                .custom-tooltip {
                    background: white;
                    padding: 10px 15px;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-lg);
                    border: 1px solid #f1f5f9;
                }
                .tooltip-date {
                    font-size: 11px;
                    color: var(--color-text-secondary);
                    margin: 0 0 4px 0;
                }
                .tooltip-weight {
                    font-size: 18px;
                    font-weight: 800;
                    color: var(--color-primary);
                    margin: 0;
                }
                .tooltip-weight .unit {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--color-text-muted);
                }
            `}</style>
        </div>
    );
};

export default WeightProgress;
