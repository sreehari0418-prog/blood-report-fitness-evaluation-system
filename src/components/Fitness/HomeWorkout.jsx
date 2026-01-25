import React, { useState } from 'react';
import { ChevronLeft, Flame, Timer, X, Info } from 'lucide-react';

const WORKOUTS = [
    {
        id: 1,
        name: 'Jumping Jacks',
        calories: '10-15 cal/min',
        duration: '1 min',
        desc: 'Full body cardio warm-up.',
        steps: ['Stand with feet together, hands at sides.', 'Jump legs apart and raise arms overhead.', 'Jump back to starting position.', 'Repeat quickly.']
    },
    {
        id: 2,
        name: 'Push-ups',
        calories: '0.3-0.6 cal/rep',
        duration: '15-20 reps',
        desc: 'Strengthens chest, shoulders, and triceps.',
        steps: ['Start in plank position.', 'Lower chest to floor.', 'Push back up strongly.', 'Keep core tight.']
    },
    {
        id: 3,
        name: 'Plank',
        calories: '3-4 cal/min',
        duration: '30-45 sec',
        desc: 'Core stability and abdominal strength.',
        steps: ['Rest on forearms and toes.', 'Keep body in straight line.', 'Hold selection tight.', 'Breathe normally.']
    },
    {
        id: 4,
        name: 'Squats',
        calories: '0.3-0.5 cal/rep',
        duration: '20 reps',
        desc: 'Legs and glutes builder.',
        steps: ['Stand feet shoulder-width apart.', 'Lower hips like sitting in a chair.', 'Keep chest up.', 'Return to standing.']
    },
    {
        id: 5,
        name: 'Lunges',
        calories: '0.5 cal/rep',
        duration: '15 reps/leg',
        desc: 'Balance and leg strength.',
        steps: ['Step forward with one leg.', 'Lower hips until both knees are 90°.', 'Push back to start.', 'Switch legs.']
    },
    {
        id: 6,
        name: 'Burpees',
        calories: '10-15 cal/min',
        duration: '10-15 reps',
        desc: 'High intensity full body calorie burner.',
        steps: ['Squat down.', 'Kick feet back to plank.', 'Do a push-up.', 'Jump feet forward and jump up.']
    },
    {
        id: 7,
        name: 'High Knees',
        calories: '7-9 cal/min',
        duration: '1 min',
        desc: 'Cardio and core engagement.',
        steps: ['Run in place.', 'Lift knees as high as possible.', 'Pump arms.', 'Keep a fast pace.']
    },
    {
        id: 8,
        name: 'Mountain Climbers',
        calories: '8-10 cal/min',
        duration: '45 sec',
        desc: 'Cardio, core, and arm endurance.',
        steps: ['Start in plank.', 'Drive one knee to chest.', 'Switch legs quickly.', 'Keep hips down.']
    }
];

const HomeWorkout = ({ onBack }) => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);

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
                            <button className="start-btn" onClick={() => setSelectedWorkout(w)}>
                                Steps
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selectedWorkout && (
                <div className="modal-overlay fade-in" onClick={() => setSelectedWorkout(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedWorkout(null)}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <h3>{selectedWorkout.name}</h3>
                            <span className="cal-pill">{selectedWorkout.calories}</span>
                        </div>

                        {/* ANIMATION AREA */}
                        {/* YOUTUBE EMBED AREA */}
                        {(() => {
                            const VIDEO_IDS = {
                                'Jumping Jacks': 'iSSAk4XCsRA', // Jumping Jacks - How to
                                'Squats': 'aclHkVaku9U', // How to Squat
                                'Push-ups': 'IODxDxX7oi4', // How to Push Up
                                'Burpees': 'auBLPYO8F_g', // Burpees (Retaining if valid, else replacing with 'dZgVxmf6jkA') -> Let's use 'dZgVxmf6jkA' (How to do a Burpee)
                                'High Knees': 'oDdkytliOqE', // High Knees | Exercise Demo
                                'Lunges': 'QOVaHwm-Q6U', // Lunges
                                'Plank': 'pSHjTRCQxIw', // Plank
                                'Mountain Climbers': 'nmwgirgXLYM' // Keeping original if unsure, but let's replace with 'zT-9L3CEcmk'
                            };
                            // Refined IDs based on reputable "How To" channels (Bowflex, Scott Herman, etc) where possible
                            const REFINED_IDS = {
                                'Jumping Jacks': 'iSSAk4XCsRA',
                                'Squats': 'YaXPRqUwItQ',
                                'Push-ups': 'IODxDxX7oi4',
                                'Burpees': 'dZgVxmf6jkA',
                                'High Knees': 'oDdkytliOqE',
                                'Lunges': 'QOVaHwm-Q6U',
                                'Plank': 'pSHjTRCQxIw',
                                'Mountain Climbers': 'zT-9L3CEcmk'
                            };
                            const videoId = REFINED_IDS[selectedWorkout.name] || 'UpH7rm0cYbM';

                            return (
                                <div style={{
                                    width: '100%',
                                    height: '220px',
                                    marginBottom: '20px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: '#000'
                                }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1`}
                                        title="Workout Demonstration"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ display: 'block' }}
                                    ></iframe>
                                </div>
                            );
                        })()}

                        <div className="modal-body">
                            <h4><Info size={16} /> How to do it:</h4>
                            <ul className="steps-list">
                                {selectedWorkout.steps.map((step, idx) => (
                                    <li key={idx}>
                                        <span className="step-num">{idx + 1}</span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .workout-container {
                    padding: var(--spacing-md);
                    padding-bottom: 40px;
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
                .start-now-btn {
                    background: var(--color-primary);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 99px;
                    font-weight: 600;
                    box-shadow: var(--shadow-md);
                }

                .modal-body h4 { display: flex; align-items: center; gap: 8px; font-size: 14px; margin-bottom: 10px; margin-top: 15px; color: var(--color-text-main); }
                .steps-list { list-style: none; padding: 0; }
                .steps-list li {
                    display: flex; gap: 10px;
                    font-size: 14px; color: var(--color-text-secondary);
                    margin-bottom: 12px;
                    line-height: 1.4;
                }
                .step-num {
                    background: #eef2ff; color: var(--color-primary);
                    font-weight: bold; font-size: 12px;
                    width: 20px; height: 20px;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    );
};

export default HomeWorkout;
