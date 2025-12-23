import React, { useState, useRef } from 'react';
import { ChevronLeft, Upload, Camera, RefreshCw } from 'lucide-react';

const ShapePredictor = ({ onBack }) => {
    const [image, setImage] = useState(null);
    const [weightMod, setWeightMod] = useState(0); // -1 (loss), 0 (normal), 1 (gain)
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
                setWeightMod(0);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSimulation = (type) => {
        if (!image) return;
        // Simple state logic: 
        // type 'gain' -> adds "5kg" visual effect
        // type 'loss' -> subtracts "5kg" visual effect
        // We accumulate or just set? User asked specifically for +5 or -5. 
        // Let's allow step-based modification for fun, or fixed toggle.
        // Let's do steps so they can see progressive change.

        if (type === 'gain') setWeightMod(prev => Math.min(prev + 1, 3)); // Max +15kg sim
        if (type === 'loss') setWeightMod(prev => Math.max(prev - 1, -3)); // Max -15kg sim
    };

    // Calculate dynamic styles for simulation
    const getSimulationStyle = () => {
        // Standard "Widening" effect for weight gain, "Narrowing" for loss.
        // It's a rough approximation but works surprisingly well for visual motivation.
        const scaleX = 1 + (weightMod * 0.035); // 3.5% width change per "5kg" step
        const scaleY = 1 - (weightMod * 0.01); // Slight height squash/stretch to maintain some proportions

        return {
            transform: `scale(${scaleX}, ${scaleY})`,
            transition: 'transform 0.5s ease-in-out',
            filter: weightMod > 0 ? 'contrast(0.95)' : 'contrast(1.05)' // Subtle contrast tweak
        };
    };

    return (
        <div className="shape-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>AI Shape Predictor</h2>
            </div>

            <div className="intro-card">
                <p>Upload a full-body photo. Use the buttons to simulate <strong>+5kg</strong> or <strong>-5kg</strong> changes.</p>
            </div>

            <div className="preview-area">
                {!image ? (
                    <div className="upload-placeholder" onClick={() => fileInputRef.current.click()}>
                        <Camera size={48} color="#cbd5e1" />
                        <p>Tap to Upload Photo</p>
                    </div>
                ) : (
                    <div className="image-wrapper">
                        <img
                            src={image}
                            alt="User upload"
                            className="simulated-image"
                            style={getSimulationStyle()}
                        />
                        {weightMod !== 0 && (
                            <div className="mod-badge">
                                {weightMod > 0 ? `+${weightMod * 5}kg Estimate` : `${weightMod * 5}kg Estimate`}
                            </div>
                        )}
                    </div>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    hidden
                />
            </div>

            {image && (
                <div className="controls-area fade-in">
                    <div className="control-row">
                        <button
                            className="sim-btn loss"
                            onClick={() => handleSimulation('loss')}
                        >
                            - 5 kg
                        </button>

                        <div className="status-display">
                            <span>Current</span>
                            <div className={`indicator ${weightMod === 0 ? 'active' : ''}`}></div>
                        </div>

                        <button
                            className="sim-btn gain"
                            onClick={() => handleSimulation('gain')}
                        >
                            + 5 kg
                        </button>
                    </div>

                    <button
                        className="reset-btn text-btn"
                        onClick={() => { setImage(null); setWeightMod(0); }}
                    >
                        <RefreshCw size={14} /> New Photo
                    </button>
                </div>
            )}

            <style>{`
                .shape-container {
                    padding: var(--spacing-md);
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                }
                .header-row {
                   display: flex;
                   align-items: center;
                   gap: var(--spacing-md);
                   margin-bottom: 20px;
                }
                .back-btn { background: transparent; color: var(--color-text-main); padding: 0; }
                
                .intro-card {
                    background: #F0F4FF;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    margin-bottom: 20px;
                    font-size: 13px;
                    color: var(--color-text-secondary);
                    text-align: center;
                    border: 1px solid #dbeafe;
                }

                .preview-area {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    border-radius: var(--radius-lg);
                    border: 2px dashed #e2e8f0;
                    margin-bottom: 20px;
                    overflow: hidden;
                    position: relative;
                }
                
                .upload-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    color: #94a3b8;
                }

                .image-wrapper {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .simulated-image {
                    max-width: 90%;
                    max-height: 90%;
                    object-fit: contain;
                    border-radius: 8px;
                }

                .mod-badge {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(0,0,0,0.7);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 99px;
                    font-size: 12px;
                    font-weight: bold;
                    backdrop-filter: blur(4px);
                }

                .controls-area {
                    padding-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
                .control-row {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    width: 100%;
                    justify-content: center;
                }

                .sim-btn {
                    padding: 12px 24px;
                    border-radius: 99px;
                    font-weight: bold;
                    font-size: 16px;
                    width: 100px;
                    transition: transform 0.1s;
                    box-shadow: var(--shadow-sm);
                }
                .sim-btn:active { transform: scale(0.95); }
                
                .sim-btn.loss { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
                .sim-btn.gain { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }

                .status-display {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 10px;
                    color: #64748b;
                }
                .indicator {
                    width: 8px; height: 8px;
                    background: #cbd5e1;
                    border-radius: 50%;
                    margin-top: 4px;
                }
                .indicator.active { background: var(--color-primary); transform: scale(1.2); }

                .reset-btn {
                    color: var(--color-text-muted);
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            `}</style>
        </div>
    );
};

export default ShapePredictor;
