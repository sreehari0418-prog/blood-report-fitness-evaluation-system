import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User } from 'lucide-react';

const PREDEFINED_QA = [
    { q: "What is a healthy BMI range?", a: "A healthy BMI range is typically between 18.5 and 24.9. Below 18.5 is considered underweight, and above 25 is considered overweight." },
    { q: "How to improve Hemoglobin?", a: "To improve low hemoglobin (anemia), consume iron-rich foods like spinach, red meat, lentils, dates, and beetroot. Vitamin C helps absorption." },
    { q: "Best Kerala breakfast for weight loss?", a: "Options include Puttu with Kadala currency (moderate quantity), Idli with Sambar, or Oats Upma. Avoid excess coconut and fried snacks." },
    { q: "How to reduce cholesterol naturally?", a: "Limit saturated fats (red meat, full-fat dairy). Eat more soluble fiber (oats, beans, fruits). Exercise regularly and avoid smoking." },
    { q: "What does high WBC mean?", a: "High White Blood Cell (WBC) count often indicates an infection, inflammation, or response to stress. Consult a doctor for proper diagnosis." },
    { q: "Daily water intake recommendation?", a: "General rule: Drink about 3-4 liters per day. Or roughly 35ml per kg of body weight. Stay hydrated!" },
    { q: "Foods to avoid for high blood sugar?", a: "Avoid sugary drinks, processed snacks, white bread/rice, and high-sugar fruits (like mango/grapes in excess). Focus on whole grains and veggies." },
    { q: "Benefits of walking daily?", a: "Walking 30 mins daily improves heart health, aids weight management, boosts mood, and strengthens bones. It's the simplest effective exercise." },
    { q: "Protein sources for vegetarians?", a: "Lentils (Dal), Chickpeas, Paneer, Tofu, Soy Chunks, Quinoa, Greek Yogurt, and Nuts (Almonds/Walnuts)." },
    { q: "How often should I check my blood?", a: "For healthy adults, a general checkup once a year is recommended. If you have specific conditions like diabetes, follow your doctor's advice." }
];

const AIChat = ({ onBack }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your Health Assistant. Choose a question below or ask me about your health.", sender: 'bot' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleQuestionClick = (qa) => {
        // Add user message
        const userMsg = { id: Date.now(), text: qa.q, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate bot typing
        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, text: qa.a, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="chat-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>AI Health Bot</h2>
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

            <div className="suggestions-area">
                <h3>Suggested Questions</h3>
                <div className="chips-container">
                    {PREDEFINED_QA.map((qa, idx) => (
                        <button key={idx} className="chip" onClick={() => handleQuestionClick(qa)} disabled={isTyping}>
                            {qa.q}
                        </button>
                    ))}
                </div>
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

        .suggestions-area {
           flex-shrink: 0;
           padding-bottom: var(--spacing-md);
        }
        .suggestions-area h3 {
           font-size: var(--font-size-sm);
           color: var(--color-text-secondary);
           margin-bottom: var(--spacing-sm);
        }
        .chips-container {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
           max-height: 150px;
           overflow-y: auto;
        }
        .chip {
           background: white;
           border: 1px solid var(--color-primary);
           color: var(--color-primary);
           padding: 6px 12px;
           border-radius: var(--radius-full);
           font-size: var(--font-size-xs);
           transition: all 0.2s;
        }
        .chip:hover {
           background: var(--color-primary);
           color: white;
        }
        .chip:disabled {
           opacity: 0.5;
           cursor: not-allowed;
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
