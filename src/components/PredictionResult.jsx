import React from 'react';

const PredictionResult = ({ predictions }) => {
    if (!predictions || predictions.length === 0) {
        return (
            <div className="prediction-card safe fade-in">
                <div className="status-icon">✅</div>
                <div className="content">
                    <h3>Great News!</h3>
                    <p>Our AI didn't detect any high-risk patterns in your report.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="prediction-container fade-in">
            <h3>AI Health Insights 🤖</h3>
            <p className="disclaimer">Based on your blood values, we identified potential risks:</p>

            <div className="prediction-list">
                {predictions.map((p, index) => (
                    <div key={index} className="prediction-card warning">
                        <div className="status-icon">⚠️</div>
                        <div className="content">
                            <h4>{p.label}</h4>
                            <p>{p.warning}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="recommendation">
                <p><strong>Recommendation:</strong> Please consult a certified doctor for precise diagnosis.</p>
            </div>

            <style>{`
                .prediction-container {
                    margin-top: 20px;
                    padding: 20px;
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    border: 1px solid #f1f5f9;
                }
                .prediction-container h3 {
                    margin: 0 0 10px 0;
                    color: #1e293b;
                    font-size: 18px;
                }
                .disclaimer {
                    color: #64748b;
                    font-size: 13px;
                    margin-bottom: 15px;
                }
                .prediction-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .prediction-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    padding: 16px;
                    border-radius: 12px;
                }
                .prediction-card.safe {
                    background: #f0fdf4;
                    border: 1px solid #dcfce7;
                }
                .prediction-card.warning {
                    background: #fef2f2;
                    border: 1px solid #fee2e2;
                }
                .status-icon {
                    font-size: 24px;
                }
                .content h3, .content h4 {
                    margin: 0 0 5px 0;
                    color: #1e293b;
                }
                .content p {
                    margin: 0;
                    font-size: 13px;
                    color: #475569;
                    line-height: 1.4;
                }
                .recommendation {
                    margin-top: 20px;
                    padding-top: 15px;
                    border-top: 1px solid #e2e8f0;
                    font-size: 13px;
                    color: #334155;
                }
            `}</style>
        </div>
    );
};

export default PredictionResult;
