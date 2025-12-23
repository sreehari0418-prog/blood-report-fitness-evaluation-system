import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User, Sparkles } from 'lucide-react';

const PREDEFINED_QA = [
    { q: "What is healthy BMI?", a: "Healthy BMI is 18.5 - 24.9." },
    { q: "Foods for Hemoglobin?", a: "Spinach, Red Meat, Dates, Beetroot." },
    { q: "How to reduce Cholesterol?", a: "Oats, soluble fiber, less fried food." },
    { q: "Water intake?", a: "3-4 Liters per day." }
];

const TOPICS = ['blood', 'report', 'diet', 'food', 'fitness', 'exercise', 'weight', 'bmi', 'sugar', 'cholesterol', 'protein', 'health', 'heart', 'hemoglobin', 'fat', 'muscle', 'gym', 'workout', 'yoga', 'sleep', 'water', 'cardio', 'calories'];

const AIChat = ({ onBack }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your Health Assistant. Ask me about your blood report, diet, or fitness.", sender: 'bot' }
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
            return "I apologize, but I can only answer questions related to Health, Blood Reports, Diet, and Fitness. Please ask me a health-related question! 🏥";
        }

        if (lowerQ.includes('bmi')) return "BMI is a simple calculation using a person's height and weight. The formula is BMI = kg/m2.";
        if (lowerQ.includes('diet') || lowerQ.includes('food')) return "A balanced diet emphasizes fruits, vegetables, whole grains, and fat-free or low-fat dairy products.";
        if (lowerQ.includes('hemoglobin') || lowerQ.includes('blood')) return "Hemoglobin is essential for transferring oxygen in your blood. Iron-rich foods are key to maintaining healthy levels.";
        if (lowerQ.includes('sugar') || lowerQ.includes('glucose')) return "High blood sugar can lead to diabetes. Reduce sugar intake and simple carbs like white rice and bread.";
        if (lowerQ.includes('weight') || lowerQ.includes('fat')) return "To lose weight, you need a calorie deficit. To gain weight, a surplus. Protein is essential for both.";

        return "That's a great health question. Make sure to consult a doctor for specific medical advice, but generally, staying active and eating whole foods is best.";
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
