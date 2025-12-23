import React from 'react';
import { ChevronLeft, Flame, Timer, Activity, PlayCircle } from 'lucide-react';

const WORKOUTS = [
    { id: 1, name: 'Jumping Jacks', calories: '10-15 cal/min', duration: '1 min', desc: 'Full body cardio warm-up.' },
    { id: 2, name: 'Push-ups', calories: '0.3-0.6 cal/rep', duration: '15-20 reps', desc: 'Strengthens chest, shoulders, and triceps.' },
    { id: 3, name: 'Plank', calories: '3-4 cal/min', duration: '30-45 sec', desc: 'Core stability and abdominal strength.' },
    { id: 4, name: 'Squats', calories: '0.3-0.5 cal/rep', duration: '20 reps', desc: 'Legs and glutes builder.' },
    { id: 5, name: 'Lunges', calories: '0.5 cal/rep', duration: '15 reps/leg', desc: 'Balance and leg strength.' },
    { id: 6, name: 'Burpees', calories: '10-15 cal/min', duration: '10-15 reps', desc: 'High intensity full body calorie burner.' },
    { id: 7, name: 'High Knees', calories: '7-9 cal/min', duration: '1 min', desc: 'Cardio and core engagement.' },
    { id: 8, name: 'Mountain Climbers', calories: '8-10 cal/min', duration: '45 sec', desc: 'Cardio, core, and arm endurance.' }
];

const HomeWorkout = ({ onBack }) => {
    return (
        <div className="workout-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>Home Workouts</h2>
            </div>

            <div className="info-card">
                <div className="intro-icon">
                    <Flame size={28} color="#FF6B6B" />
                </div>
                <p>Burn calories with these 8 basic home exercises. No equipment needed!</p>
            </div>

            <div className="workout-list">
                {WORKOUTS.map(w => (
                    <div key={w.id} className="workout-card">
                        <div className="w-header">
                            <h3>{w.name}</h3>
                            <span className="cal-badge"><Flame size={12} fill="currentColor" /> {w.calories}</span>
                        </div>
                        <p className="w-desc">{w.desc}</p>
                        <div className="w-footer">
                            <span className="duration"><Timer size={14} /> {w.duration}</span>
                            <button className="start-btn">View <PlayCircle size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .workout-container {
                    padding: var(--spacing-md);
                }
                .header-row {
                   display: flex;
                   align-items: center;
                   gap: var(--spacing-md);
                   margin-bottom: var(--spacing-lg);
                }
                .back-btn {
                   background: transparent;
                   color: var(--color-text-main);
                   padding: 0;
                }
                
                .info-card {
                    background: #FFF0F1;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: var(--color-text-main);
                    border: 1px solid #FFD1D1;
                }
                .intro-icon {
                    background: white;
                    padding: 10px;
                    border-radius: 50%;
                    box-shadow: var(--shadow-sm);
                }

                .workout-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .workout-card {
                    background: white;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-sm);
                    transition: transform 0.2s;
                    border: 1px solid #f1f5f9;
                }
                .workout-card:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .w-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                }
                .w-header h3 {
                    font-size: 16px;
                    color: var(--color-text-main);
                }
                .cal-badge {
                    font-size: 11px;
                    background: #ffe4e6;
                    color: #be123c;
                    padding: 4px 8px;
                    border-radius: 99px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-weight: 600;
                }

                .w-desc {
                    font-size: 12px;
                    color: var(--color-text-secondary);
                    margin-bottom: 15px;
                }

                .w-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 10px;
                    border-top: 1px solid #f1f5f9;
                }
                .duration {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-weight: 500;
                }
                .start-btn {
                    background: transparent;
                    color: var(--color-primary);
                    font-size: 12px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            `}</style>
        </div>
    );
};

export default HomeWorkout;
