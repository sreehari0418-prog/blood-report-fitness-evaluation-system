import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User, Sparkles } from 'lucide-react';

const PREDEFINED_QA = [
    { q: "Best protein sources?", a: "Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt." },
    { q: "Pre-workout snacks?", a: "Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds." },
    { q: "How to build muscle?", a: "Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep." },
    { q: "Weight loss tips?", a: "To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio." }
];

const TOPICS = ['blood', 'report', 'diet', 'food', 'fitness', 'exercise', 'weight', 'bmi', 'sugar', 'cholesterol', 'protein', 'health', 'heart', 'hemoglobin', 'fat', 'muscle', 'gym', 'workout', 'yoga', 'sleep', 'water', 'cardio', 'calories', 'supplement', 'recovery', 'strength'];

const AIChat = ({ onBack, userProfile }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: `Hello ${userProfile?.name ? userProfile.name.split(' ')[0] : ''}! I'm your Health Assistant. Ask me about your blood report, diet, or workout.`, sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Load All Relevant User Data
        if (userProfile?.email) {
            const savedReports = JSON.parse(localStorage.getItem(`reports_${userProfile.email}`) || '[]');
            setReports(savedReports);
        }
        scrollToBottom();
    }, [messages, userProfile?.email]);

    const getBotResponse = (query) => {
        const lowerQ = query.toLowerCase();

        // 1. Check for Report Analysis Request
        if (lowerQ.includes('analyze') || lowerQ.includes('summary') || lowerQ.includes('my report')) {
            if (reports.length === 0) {
                return "I don't see any blood reports uploaded yet. specific values. You can upload one in the Blood Evaluation section!";
            }
            const latest = reports[0]; // Assuming sorted by new
            const abnormal = latest.results.filter(r => r.status !== 'Normal');

            if (abnormal.length === 0) return "Your latest report looks perfect! All values are within the normal range. Keep it up! 🌟";

            const issues = abnormal.map(a => `${a.parameter} is ${a.status} (${a.value} ${a.unit})`).join(', ');
            return `Based on your latest report (${latest.date}), here are some things to watch: ${issues}. Would you like diet tips for any of these?`;
        }

        // 2. Specific Parameter Query (e.g. "is my hemoglobin low?")
        const paramMatch = TOPICS.find(t => lowerQ.includes(t));
        if (paramMatch && reports.length > 0) {
            const latest = reports[0];
            const found = latest.results.find(r => r.parameter.toLowerCase().includes(paramMatch));

            if (found) {
                return `Your latest ${found.parameter} is ${found.value} ${found.unit}, which is ${found.status}. ${found.fitnessImpact || ''}`;
            }
        }

        // Personalization Context
        const diseases = userProfile?.diseases ? userProfile.diseases.toLowerCase() : '';
        const allergies = userProfile?.allergies ? userProfile.allergies.toLowerCase() : '';
        const age = userProfile?.age || '';
        const weight = userProfile?.weight || '';
        const bloodGroup = userProfile?.bloodGroup || '';
        const gender = userProfile?.gender || '';

        // Topic Check
        const isRelevant = TOPICS.some(topic => lowerQ.includes(topic));

        if (!isRelevant && !lowerQ.includes('hello') && !lowerQ.includes('hi')) {
            return `I'm analyzing your health data... I can help with Blood Reports, Diet, and Fitness. Try asking "Analyze my report" or "How is my hemoglobin?".`;
        }

        // --- Profile Aware Responses ---
        if (lowerQ.includes('my profile') || lowerQ.includes('my health') || lowerQ.includes('about me')) {
            return `You are a ${age}-year-old ${gender} with Blood Group ${bloodGroup}. Current weight: ${weight}kg. Known conditions: ${diseases || 'None'}. Allergies: ${allergies || 'None'}.`;
        }

        // Disease/Condition Specific Responses
        if (diseases.includes('diabetes') && (lowerQ.includes('sugar') || lowerQ.includes('sweet') || lowerQ.includes('fruit'))) {
            return "Since you mentioned Diabetes, be very careful with high GI fruits like mangoes and chikoo. Opt for apples, berries, and papaya. Monitor your blood sugar regularly and avoid refined sugars completely.";
        }
        if (diseases.includes('hypertension') || diseases.includes('bp')) {
            if (lowerQ.includes('salt') || lowerQ.includes('diet')) {
                return "For hypertension management, the DASH diet is recommended. Reduce sodium intake (salt), avoid pickles and papad, and increase potassium-rich foods like bananas and leafy greens.";
            }
        }

        // Detailed Logic
        if (lowerQ.includes('protein')) {
            return "Protein is the building block. vegetarians: Paneer, Dal, Soy. Non-veg: Chicken, Fish. " + (diseases.includes('kidney') ? "However, since you have kidney concerns, please consult your doctor for the exact protein limit." : "Aim for 1.2g/kg body weight.");
        }
        if (lowerQ.includes('pre-workout') || lowerQ.includes('before gym')) {
            return "A banana or oatmeal 45 mins before workout is great energy.";
        }
        if (lowerQ.includes('post-workout') || lowerQ.includes('after gym')) {
            return "Post-workout, have a protein source (shake/chicken/eggs) within 45 mins to maximize recovery.";
        }
        if (lowerQ.includes('muscle')) {
            return "Building muscle requires specific resistance training, protein surplus, and sleep. Consistency is key!";
        }
        if (lowerQ.includes('cardio')) {
            return "Cardio improves heart health and burns calories. 150 mins/week is a good target.";
        }
        if (lowerQ.includes('bmi')) {
            return "BMI is a rough indicator. " + (userProfile?.weight ? `At ${userProfile.weight}kg, your focus should be on body composition (muscle vs fat) rather than just the scale.` : "Check your weight-to-height ratio.");
        }
        if (lowerQ.includes('diet') || lowerQ.includes('food')) {
            if (allergies) return `Given your allergies to ${allergies}, ensure you check food labels. Focus on whole, unprocessed foods.`;
            return "A balanced diet with protein, good fats, and fiber is essential. Avoid processed foods.";
        }

        // Default Logic for other keywords
        if (lowerQ.includes('hemoglobin')) return "Iron-rich foods (spinach, dates, red meat) help boost hemoglobin. Vitamin C helps absorption.";
        if (lowerQ.includes('sugar')) return "Minimize added sugars. Natural sugars in whole fruits are generally okay in moderation.";
        if (lowerQ.includes('weight')) return "Weight management is about Calorie In vs Calorie Out, quality of food, and hormonal balance.";
        if (lowerQ.includes('sleep')) return "7-9 hours of sleep is non-negotiable for recovery and mental health.";

        return "That's a good question. Based on general fitness guidelines, consistency in diet and exercise is 90% of the game. How is your sleep lately?";
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
