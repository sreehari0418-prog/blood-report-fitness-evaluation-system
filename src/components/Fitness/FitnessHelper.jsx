import React, { useState, useEffect } from 'react';
import { ChevronLeft, Target, Utensils, Zap, Coffee } from 'lucide-react';

const KERALA_FOODS = {
    breakfast: [
        { name: 'Puttu & Kadala Curry', cal: 450 },
        { name: 'Appam & Egg Roast', cal: 400 },
        { name: 'Idli & Sambar', cal: 300 },
        { name: 'Dosa & Chutney', cal: 350 },
        { name: 'Oats Upma', cal: 250 }
    ],
    lunch: [
        { name: 'Kerala Rice Meals with Fish Curry', cal: 650 },
        { name: 'Red Rice, Thoran & Curd', cal: 500 },
        { name: 'Biriyani (Chicken)', cal: 800 },
        { name: 'Kanji & Payar', cal: 400 }
    ],
    snack: [
        { name: 'Banana Fry (Pazham Pori) - 2 pcs', cal: 300 },
        { name: 'Tea & Vada', cal: 250 },
        { name: 'Fruit Salad', cal: 150 },
        { name: 'Nuts & Dates', cal: 200 }
    ],
    dinner: [
        { name: 'Chapati & Veg Curry', cal: 400 },
        { name: 'Wheat Porotta & Chicken', cal: 600 },
        { name: 'Kanji (Rice Gruel)', cal: 300 },
        { name: 'Salad & Grilled Fish', cal: 350 }
    ]
};

const FitnessHelper = ({ userProfile, onBack }) => {
    const [goal, setGoal] = useState(null); // 'gain', 'loss', 'maintain'
    const [calories, setCalories] = useState(0);
    const [dietPlan, setDietPlan] = useState(null);

    useEffect(() => {
        if (goal && userProfile) {
            generatePlan();
        }
    }, [goal]);

    const calculateCalories = () => {
        if (!userProfile) return 2000;

        // Mifflin-St Jeor Equation
        const { weight, heightCm, age, gender } = userProfile;
        let bmr = (10 * weight) + (6.25 * heightCm) - (5 * age);

        if (gender === 'male') bmr += 5;
        else bmr -= 161;

        // Assume Sedentary/Light Active x 1.375
        let tdee = Math.round(bmr * 1.375);

        if (goal === 'loss') return tdee - 500;
        if (goal === 'gain') return tdee + 500;
        return tdee;
    };

    const generatePlan = () => {
        const targetCal = calculateCalories();
        setCalories(targetCal);

        // Simple greedy allocation or random selection for variety
        // Target distribution: Break(25%), Lunch(35%), Snack(10%), Dinner(30%)

        const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // Logic to try to match calories could be complex, for now we pick random balanced meals
        // In a real app, we'd sum them up to match 'targetCal'

        setDietPlan({
            breakfast: getRandom(KERALA_FOODS.breakfast),
            lunch: getRandom(KERALA_FOODS.lunch),
            snack: getRandom(KERALA_FOODS.snack),
            dinner: getRandom(KERALA_FOODS.dinner)
        });
    };

    return (
        <div className="fitness-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>Fitness Helper</h2>
            </div>

            {!goal ? (
                <div className="goal-selection">
                    <h3>What is your goal?</h3>
                    <button className="goal-card" onClick={() => setGoal('loss')}>
                        <div className="icon-box loss"><Target size={24} /></div>
                        <div className="text">
                            <h4>Weight Loss</h4>
                            <p>Reduce body fat locally.</p>
                        </div>
                    </button>
                    <button className="goal-card" onClick={() => setGoal('maintain')}>
                        <div className="icon-box maintain"><Zap size={24} /></div>
                        <div className="text">
                            <h4>Maintain Weight</h4>
                            <p>Stay healthy and fit.</p>
                        </div>
                    </button>
                    <button className="goal-card" onClick={() => setGoal('gain')}>
                        <div className="icon-box gain"><Utensils size={24} /></div>
                        <div className="text">
                            <h4>Weight Gain</h4>
                            <p>Build muscle mass.</p>
                        </div>
                    </button>
                </div>
            ) : (
                <div className="plan-view fade-in">
                    <div className="summary-card">
                        <div className="cal-target">
                            <span className="label">Daily Target</span>
                            <h1>{calories}</h1>
                            <span className="unit">kcal</span>
                        </div>
                        <div className="goal-badge">
                            {goal === 'loss' ? 'Weight Loss' : (goal === 'gain' ? 'Weight Gain' : 'Maintain')}
                        </div>
                        <button className="change-btn" onClick={() => setGoal(null)}>Change Goal</button>
                    </div>

                    <div className="meals-list">
                        <h3>📅 Today's Kerala Diet Plan</h3>

                        {dietPlan && (
                            <>
                                <MealCard type="Breakfast" icon={<Coffee size={18} />} data={dietPlan.breakfast} />
                                <MealCard type="Lunch" icon={<Utensils size={18} />} data={dietPlan.lunch} />
                                <MealCard type="Snack" icon={<Coffee size={18} />} data={dietPlan.snack} />
                                <MealCard type="Dinner" icon={<Utensils size={18} />} data={dietPlan.dinner} />
                            </>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        .fitness-container {
           padding: var(--spacing-md);
        }
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-xl);
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .goal-selection {
           display: flex;
           flex-direction: column;
           gap: var(--spacing-md);
        }
        .goal-selection h3 {
           text-align: center;
           margin-bottom: var(--spacing-md);
        }
        .goal-card {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-lg);
           box-shadow: var(--shadow-sm);
           text-align: left;
           width: 100%;
           transition: transform 0.2s;
        }
        .goal-card:active { transform: scale(0.98); }
        .icon-box {
           width: 50px;
           height: 50px;
           border-radius: var(--radius-md);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
        }
        .icon-box.loss { background: #FF6B6B; }
        .icon-box.maintain { background: #4CC9F0; }
        .icon-box.gain { background: #4ECDC4; }
        
        .summary-card {
           background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%);
           color: white;
           padding: var(--spacing-lg);
           border-radius: var(--radius-lg);
           text-align: center;
           margin-bottom: var(--spacing-xl);
           box-shadow: var(--shadow-md);
           position: relative;
        }
        .cal-target h1 {
           font-size: 3rem;
           line-height: 1;
           margin: 10px 0;
        }
        .change-btn {
           position: absolute;
           top: 10px;
           right: 10px;
           background: rgba(255,255,255,0.2);
           color: white;
           font-size: 10px;
           padding: 4px 8px;
           border-radius: var(--radius-full);
        }

        .meals-list h3 {
           margin-bottom: var(--spacing-md);
        }
        .meal-card {
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
           margin-bottom: var(--spacing-sm);
           box-shadow: var(--shadow-sm);
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        .meal-info h4 {
           font-size: var(--font-size-sm);
           color: var(--color-text-secondary);
           margin-bottom: 2px;
           display: flex;
           align-items: center;
           gap: 6px;
        }
        .meal-info p {
           font-weight: 600;
           color: var(--color-text-main);
        }
        .meal-cal {
           font-size: var(--font-size-sm);
           color: var(--color-primary);
           font-weight: bold;
        }
      `}</style>
        </div>
    );
};

const MealCard = ({ type, icon, data }) => (
    <div className="meal-card">
        <div className="meal-info">
            <h4>{icon} {type}</h4>
            <p>{data.name}</p>
        </div>
        <div className="meal-cal">
            {data.cal} kcal
        </div>
    </div>
);

export default FitnessHelper;
