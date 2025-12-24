import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User, Sparkles } from 'lucide-react';

const PREDEFINED_QA = [
    { q: "Best protein sources?", a: "Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt." },
    { q: "Pre-workout snacks?", a: "Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds." },
    { q: "How to build muscle?", a: "Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep." },
    { q: "Weight loss tips?", a: "To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio." }
];

const TOPICS = ['blood', 'report', 'diet', 'food', 'fitness', 'exercise', 'weight', 'bmi', 'sugar', 'cholesterol', 'protein', 'health', 'heart', 'hemoglobin', 'fat', 'muscle', 'gym', 'workout', 'yoga', 'sleep', 'water', 'cardio', 'calories', 'supplement', 'recovery', 'strength'];

const AIChat = ({ onBack }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your Health & Fitness Assistant. Ask me anything about your blood report, nutrition, or workout strategy.", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (query) => {
        const lowerQ = query.toLowerCase();

        // Topic Check
        const isRelevant = TOPICS.some(topic => lowerQ.includes(topic));

        if (!isRelevant) {
            return "I apologize, but I'm specialized in Health, Blood Reports, Nutrition, and Fitness. For other topics, I might not have the best info. Ask me about your protein intake or blood levels! 🏥";
        }

        // More detailed answering logic
        if (lowerQ.includes('protein')) {
            return "Protein is the building block of muscle. For vegetarians: Paneer, Dal, Chickpeas, Soy, and Milk are great. For non-vegetarians: Chicken breast, Fish, and Eggs are gold standards. Aim for 1.2g to 2g of protein per kg of body weight depending on your activity level.";
        }
        if (lowerQ.includes('pre-workout') || lowerQ.includes('before gym') || lowerQ.includes('before workout')) {
            return "A good pre-workout snack should have easily digestible carbs. A banana is perfect. Alternatively, try oats or a slice of whole-grain bread with peanut butter. Avoid high-fat meals right before training as they digest slowly.";
        }
        if (lowerQ.includes('post-workout') || lowerQ.includes('after gym') || lowerQ.includes('after workout')) {
            return "Post-workout, your body needs protein and some carbs to recover. A protein shake with a fruit, or a meal with chicken/paneer and rice/sweet potato is ideal. Try to eat within 1-2 hours after training.";
        }
        if (lowerQ.includes('muscle')) {
            return "Building muscle requires consistent resistance training and a slight calorie surplus. Focus on compound movements like squats, pushups, and deadlifts. Don't forget recovery—muscles grow while you sleep, not while you train!";
        }
        if (lowerQ.includes('cardio')) {
            return "Cardio is vital for heart health. For fat loss, Zone 2 cardio (where you can still talk while running/walking) is great. For endurance, try HIIT (High-Intensity Interval Training). Aim for at least 150 minutes of moderate activity per week.";
        }
        if (lowerQ.includes('bmi')) {
            return "BMI (Body Mass Index) helps categorize weight. A healthy range is 18.5 - 24.9. However, it doesn't measure body fat percentage, so muscular people might show as 'overweight' despite being fit. Check your waist-to-height ratio for more accuracy.";
        }
        if (lowerQ.includes('diet') || lowerQ.includes('food')) {
            return "A healthy diet is 80% whole foods. Focus on 'eating the rainbow' (variety of veg), adequate protein, and healthy fats. In Kerala, try to balance parboiled rice with more fish, pulses, and leafy greens while reducing fried snacks.";
        }
        if (lowerQ.includes('hemoglobin') || lowerQ.includes('blood')) {
            return "Normal hemoglobin levels are 12-16 g/dL. Low levels cause fatigue during workouts. Boost it with iron-rich foods like spinach, beetroot, pomegranate, and red meat. Always take Vitamin C (like lemon) with iron for better absorption.";
        }
        if (lowerQ.includes('sugar') || lowerQ.includes('glucose')) {
            return "To manage blood sugar, focus on complex carbs (brown rice, oats) instead of simple carbs (white sugar, maida). Fiber slows down sugar absorption. Regular walking after meals significantly helps sensitive insulin levels.";
        }
        if (lowerQ.includes('weight') || lowerQ.includes('fat')) {
            return "Fat loss happens when you are in a calorie deficit (burning more than you eat). Avoid 'crash diets'. Instead, focus on high-protein, high-fiber intake and consistent movement to keep your metabolism high.";
        }
        if (lowerQ.includes('sleep') || lowerQ.includes('rest')) {
            return "Sleep is the most underrated fitness tool. Most recovery and muscle growth happen during deep sleep. Aim for 7-9 hours of quality rest per night for optimal hormones and performance.";
        }

        return "That's a valid health query. Generally, focusing on whole foods, 7-8 hours of sleep, and 30 minutes of daily movement will solve 90% of health issues. Consult a professional for specific clinic advice!";
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, text: getBotResponse(userMsg.text), sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    const handleChipClick = (qa) => {
        const userMsg = { id: Date.now(), text: qa.q, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, text: qa.a, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="chat-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>Health Assistant</h2>
            </div>

            <div className="chat-window">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                        {msg.sender === 'bot' && <div className="avatar bot"><Bot size={16} /></div>}
                        <div className="message-bubble">
                            {msg.text}
                        </div>
                        {msg.sender === 'user' && <div className="avatar user"><User size={16} /></div>}
                    </div>
                ))}
                {isTyping && (
                    <div className="message-row bot">
                        <div className="avatar bot"><Bot size={16} /></div>
                        <div className="message-bubble typing">
                            <span>.</span><span>.</span><span>.</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="input-section">
                {/* Suggestions Chips above input */}
                <div className="chips-row">
                    {PREDEFINED_QA.map((qa, idx) => (
                        <button key={idx} className="chip" onClick={() => handleChipClick(qa)} disabled={isTyping}>
                            {qa.q}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSend} className="input-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about health..."
                        className="chat-input"
                    />
                    <button type="submit" className="send-btn">
                        <Send size={20} />
                    </button>
                </form>
            </div>

            <style>{`
        .chat-container {
           padding: var(--spacing-md);
           display: flex;
           flex-direction: column;
           height: 100vh;
           max-height: 100vh;
        }
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-md);
           flex-shrink: 0;
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .chat-window {
           flex: 1;
           background: #f8fafc;
           border-radius: var(--radius-lg);
           padding: var(--spacing-md);
           overflow-y: auto;
           display: flex;
           flex-direction: column;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-md);
           border: 1px solid #e2e8f0;
        }
        .message-row {
           display: flex;
           align-items: flex-end;
           gap: 8px;
        }
        .message-row.user {
           justify-content: flex-end;
        }
        .avatar {
           width: 28px;
           height: 28px;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
        }
        .avatar.bot { background: #7209B7; color: white; }
        .avatar.user { background: var(--color-primary); color: white; }

        .message-bubble {
           max-width: 75%;
           padding: 10px 14px;
           border-radius: 12px;
           font-size: var(--font-size-sm);
           line-height: 1.4;
           box-shadow: var(--shadow-sm);
        }
        .bot .message-bubble {
           background: white;
           color: var(--color-text-main);
           border-bottom-left-radius: 4px;
        }
        .user .message-bubble {
           background: var(--color-primary);
           color: white;
           border-bottom-right-radius: 4px;
        }

        .input-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex-shrink: 0;
        }

        .chips-row {
           display: flex;
           overflow-x: auto;
           gap: 8px;
           padding-bottom: 5px;
           scrollbar-width: none;
        }
        .chip {
           white-space: nowrap;
           background: white;
           border: 1px solid var(--color-primary);
           color: var(--color-primary);
           padding: 6px 12px;
           border-radius: var(--radius-full);
           font-size: 11px;
           transition: all 0.2s;
        }
        .chip:hover {
           background: var(--color-primary);
           color: white;
        }

        .input-form {
            display: flex;
            gap: 10px;
            padding-bottom: 5px; /* for safe area */
        }
        .chat-input {
            flex: 1;
            padding: 12px 16px;
            border-radius: 99px;
            border: 1px solid #cbd5e1;
            font-size: 14px;
            background: white;
        }
        .chat-input:focus { border-color: var(--color-primary); outline: none; }
        .send-btn {
            width: 46px; 
            height: 46px;
            background: var(--color-primary);
            color: white;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            box-shadow: var(--shadow-md);
        }

        .typing span {
           animation: blink 1.4s infinite both;
           margin: 0 1px;
        }
        .typing span:nth-child(2) { animation-delay: 0.2s; }
        .typing span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes blink {
           0% { opacity: 0.2; }
           20% { opacity: 1; }
           100% { opacity: 0.2; }
        }
      `}</style>
        </div>
    );
};

export default AIChat;
