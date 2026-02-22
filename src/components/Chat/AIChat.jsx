import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User, Sparkles, Copy, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const PREDEFINED_FLOW = {
    blood: {
        title: "Blood Report Help",
        questions: [
            { q: "How to read my blood report parameters?", a: "Blood reports list parameters (like Hemoglobin) with your result and a reference range. If your value is outside this range, it's flagged as High or Low. Always focus on the 'Status' column in our app for a quick summary." },
            { q: "What does 'Normal Range' mean?", a: "The normal range is the set of values that 95% of healthy individuals fall into. Being slightly outside doesn't always mean a serious problem, but it's a sign to check with your doctor." },
            { q: "Why are my Hemoglobin levels low?", a: "Low hemoglobin often indicates anemia. This can be caused by iron deficiency, vitamin B12 deficiency, or chronic conditions. It's best to look at your RBC count and Iron levels together for a better picture." },
            { q: "What should I do if my glucose is high?", a: "High fasting glucose levels suggest pre-diabetes or diabetes. You should reduce sugary foods, increase fiber, and stay active. Monitoring your HbA1c is also recommended for long-term tracking." },
            { q: "Is high cholesterol dangerous?", a: "High 'Bad' cholesterol (LDL) can cause plaque buildup in arteries, increasing heart risk. However, 'Good' cholesterol (HDL) helps protect your heart. Balance is key!" }
        ]
    },
    diet: {
        title: "Diet Help",
        questions: [
            { q: "What is a balanced diet?", a: "A balanced diet includes a mix of proteins (30%), healthy fats (30%), and complex carbohydrates (40%), along with plenty of fiber and micronutrients from fruits and vegetables." },
            { q: "Best foods to increase Hemoglobin?", a: "Focus on iron-rich foods: Spinach, red meat, lentils, dates, and pomegranate. Tip: Eat these with Vitamin C (like lemon or citrus) to boost absorption!" },
            { q: "How to control blood sugar through diet?", a: "Choose low Glycemic Index (GI) foods like oats, quinoa, and non-starchy vegetables. Avoid refined carbs like white rice and sugary drinks which cause sharp spikes." },
            { q: "Foods that help lower bad cholesterol?", a: "Oats, nuts (walnuts/almonds), fatty fish, and olive oil are excellent. Avoid trans fats found in fried and processed foods." },
            { q: "Should I take protein supplements?", a: "If you can't meet your protein needs through whole foods (eggs, chicken, paneer, sprouts), a supplement like Whey can help. But remember, food first!" }
        ]
    },
    doubts: {
        title: "Douts",
        questions: [
            { q: "How much water should I drink daily?", a: "A general rule is 3-4 liters per day, but it depends on your weight and activity level. If your urine is light yellow/clear, you're well hydrated!" },
            { q: "Why am I feeling tired all the time?", a: "Persistent fatigue can be due to many things found in blood tests: Low iron (Anemia), Vitamin D/B12 deficiency, or Thyroid issues. Check your latest report!" },
            { q: "How many hours of sleep do I need?", a: "Most adults need 7-9 hours of quality sleep. Sleep is when your body repairs muscle and regulates hormones. Consistent timing is just as important as duration." },
            { q: "Is daily exercise necessary?", a: "Aim for at least 30 minutes of moderate activity (like brisk walking) 5 days a week. For muscle building, 3-4 days of weight training is more effective." },
            { q: "How to reduce stress naturally?", a: "Regular exercise, 7+ hours of sleep, deep breathing exercises, and maintaining a healthy diet all contribute to lowering cortisol levels and reducing stress." }
        ]
    }
};

const AIChat = ({ onBack, userProfile }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: `Hello ${userProfile?.name ? userProfile.name.split(' ')[0] : ''}! How can I help you today?`, sender: 'bot', type: 'choice', options: ["Blood Report Help", "Diet Help", "Douts"] }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [copiedId, setCopiedId] = useState(null);
    const messagesEndRef = useRef(null);
    const [reports, setReports] = useState([]);
    const [activeFlow, setActiveFlow] = useState(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (userProfile?.email) {
            const savedReports = JSON.parse(localStorage.getItem(`reports_${userProfile.email}`) || '[]');
            setReports(savedReports);
        }
        scrollToBottom();
    }, [messages, userProfile?.email]);

    const copyToClipboard = (text, messageId) => {
        navigator.clipboard.writeText(text);
        setCopiedId(messageId);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleFlowAction = (option) => {
        // Find which category this option belongs to
        let category = null;
        if (option === "Blood Report Help") category = 'blood';
        else if (option === "Diet Help") category = 'diet';
        else if (option === "Douts") category = 'doubts';

        if (category) {
            const userMsg = { id: Date.now(), text: option, sender: 'user' };
            setMessages(prev => [...prev, userMsg]);
            setIsTyping(true);

            setTimeout(() => {
                const botMsg = {
                    id: Date.now() + 1,
                    text: `Great! Here are some common questions about ${PREDEFINED_FLOW[category].title}. Which one would you like to know more about?`,
                    sender: 'bot',
                    type: 'choice',
                    options: PREDEFINED_FLOW[category].questions.map(q => q.q)
                };
                setMessages(prev => [...prev, botMsg]);
                setIsTyping(false);
                setActiveFlow(category);
            }, 800);
            return;
        }

        // It's a sub-question
        if (activeFlow) {
            const selectedQ = PREDEFINED_FLOW[activeFlow].questions.find(q => q.q === option);
            if (selectedQ) {
                const userMsg = { id: Date.now(), text: option, sender: 'user' };
                setMessages(prev => [...prev, userMsg]);
                setIsTyping(true);

                setTimeout(() => {
                    const botMsg = {
                        id: Date.now() + 1,
                        text: selectedQ.a,
                        sender: 'bot',
                        confidence: 1.0,
                        type: 'post-flow'
                    };
                    setMessages(prev => [...prev, botMsg]);
                    setIsTyping(false);
                    // Reset or allow further questions
                    setTimeout(() => {
                        const resetMsg = {
                            id: Date.now() + 2,
                            text: "Would you like to ask something else? You can type any question below or choose a topic again.",
                            sender: 'bot',
                            type: 'choice',
                            options: ["Blood Report Help", "Diet Help", "Douts"]
                        };
                        setMessages(prev => [...prev, resetMsg]);
                    }, 1500);
                }, 800);
                return;
            }
        }
    };

    const getBackendResponse = async (query) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    userProfile: userProfile,
                    bloodReports: reports,
                    conversationHistory: messages.slice(-5).map(m => ({ text: m.text, sender: m.sender }))
                })
            });

            if (!response.ok) throw new Error('Backend unavailable');

            const data = await response.json();
            return {
                text: data.response,
                confidence: data.confidence,
                intent: data.intent,
                metadata: data.metadata
            };
        } catch (error) {
            console.warn('Chat Error:', error);
            return {
                text: "I'm having trouble connecting to my brain. Please make sure the backend is running and try again!",
                confidence: 0
            };
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await getBackendResponse(input);

            setTimeout(() => {
                const botMsg = {
                    id: Date.now() + 1,
                    text: response.text,
                    sender: 'bot',
                    confidence: response.confidence || 0.8,
                    intent: response.intent
                };
                setMessages(prev => [...prev, botMsg]);
                setIsTyping(false);
            }, 800);
        } catch (error) {
            console.error('Chat error:', error);
            const errorMsg = {
                id: Date.now() + 1,
                text: "Sorry, I encountered an error. Please try again!",
                sender: 'bot',
                confidence: 0
            };
            setMessages(prev => [...prev, errorMsg]);
            setIsTyping(false);
        }
    };

    const handleQuickAction = (action) => {
        setInput(action.q);
    };

    const renderMessage = (text) => {
        // Simple Markdown-to-JSX parser
        const lines = text.split('\n');
        return lines.map((line, i) => {
            let processedLine = line;

            // Bold Headers (### Header)
            if (processedLine.startsWith('### ')) {
                return <h4 key={i} style={{ margin: '12px 0 6px 0', color: 'var(--color-primary)' }}>{processedLine.replace('### ', '')}</h4>;
            }

            // Bold text (**text**)
            const boldRegex = /\*\*(.*?)\*\*/g;
            const segments = [];
            let lastIndex = 0;
            let match;

            while ((match = boldRegex.exec(processedLine)) !== null) {
                if (match.index > lastIndex) {
                    segments.push(processedLine.substring(lastIndex, match.index));
                }
                segments.push(<strong key={match.index}>{match[1]}</strong>);
                lastIndex = boldRegex.lastIndex;
            }
            if (lastIndex < processedLine.length) {
                segments.push(processedLine.substring(lastIndex));
            }

            // Bullet points (* or -)
            if (processedLine.trim().startsWith('* ') || processedLine.trim().startsWith('- ')) {
                return (
                    <div key={i} style={{ display: 'flex', gap: '8px', paddingLeft: '8px', marginBottom: '4px' }}>
                        <span>•</span>
                        <span>{segments.length > 0 ? segments : processedLine.replace(/^[*|-]\s/, '')}</span>
                    </div>
                );
            }

            return (
                <div key={i} style={{ marginBottom: i < lines.length - 1 ? '6px' : '0' }}>
                    {segments.length > 0 ? segments : processedLine}
                </div>
            );
        });
    };

    return (
        <div className="chat-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>🤖 IA Expert Assistant</h2>
            </div>

            <div className="chat-window">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                        {msg.sender === 'bot' && (
                            <div className="avatar bot">
                                {msg.intent === 'expert_analysis' ? <Sparkles size={16} /> : <Bot size={16} />}
                            </div>
                        )}
                        <div className="message-container">
                            <div className="message-bubble">
                                {renderMessage(msg.text)}
                            </div>

                            {msg.type === 'choice' && (
                                <div className="options-container">
                                    {msg.options.map((opt, i) => (
                                        <button
                                            key={i}
                                            className="choice-btn"
                                            onClick={() => handleFlowAction(opt)}
                                            disabled={isTyping}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {msg.sender === 'bot' && msg.confidence && (
                                <div className="message-actions">
                                    <span className="confidence-badge">
                                        {msg.confidence >= 0.9 ? '🟢' : msg.confidence >= 0.7 ? '🟡' : '🔴'}
                                        {msg.intent === 'expert_analysis' ? 'Expert Analysis' : `${Math.round(msg.confidence * 100)}% confident`}
                                    </span>
                                    <button
                                        onClick={() => copyToClipboard(msg.text, msg.id)}
                                        className="copy-btn"
                                        title="Copy response"
                                    >
                                        {copiedId === msg.id ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                                    </button>
                                </div>
                            )}
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
                <form onSubmit={handleSend} className="input-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about health, diet, or fitness..."
                        className="chat-input"
                        disabled={isTyping}
                    />
                    <button type="submit" className="send-btn" disabled={isTyping || !input.trim()}>
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
        .header-row h2 {
            flex: 1;
        }
        .offline-badge {
            background: #f59e0b;
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .chat-window {
           flex: 1;
           background: linear-gradient(135deg, #f8fafc 0%, #e7f2ff 100%);
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
           align-items: flex-start;
           gap: 8px;
        }
        .message-row.user {
           justify-content: flex-end;
        }
        .message-container {
            display: flex;
            flex-direction: column;
            gap: 4px;
            max-width: 80%;
        }
        .avatar {
           width: 32px;
           height: 32px;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
        }
        .avatar.bot { 
            background: linear-gradient(135deg, #7209B7 0%, #9d4edd 100%); 
            color: white; 
        }
        .avatar.user { 
            background: var(--color-primary); 
            color: white; 
        }

        .message-bubble {
           max-width: 100%;
           padding: 12px 16px;
           border-radius: 16px;
           font-size: 14px;
           line-height: 1.5;
           box-shadow: 0 2px 8px rgba(0,0,0,0.08);
           white-space: pre-wrap;
           word-wrap: break-word;
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

        .message-actions {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
            padding: 0 4px;
        }
        .confidence-badge {
            font-size: 10px;
            color: #64748b;
            font-weight: 500;
        }
        .copy-btn {
            background: transparent;
            border: none;
            color: #64748b;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: all 0.2s;
        }
        .copy-btn:hover {
            background: #f1f5f9;
            color: var(--color-primary);
        }

        .options-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
            width: 100%;
        }
        .choice-btn {
            background: white;
            border: 2px solid var(--color-primary);
            color: var(--color-primary);
            padding: 10px 16px;
            border-radius: 12px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            text-align: left;
            flex: 1 1 calc(50% - 8px);
            min-width: 120px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .choice-btn:hover:not(:disabled) {
            background: var(--color-primary);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(244, 63, 94, 0.2);
        }
        .choice-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .input-section {
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex-shrink: 0;
            padding-top: var(--spacing-sm);
            border-top: 1px solid #e2e8f0;
        }

        .input-form {
            display: flex;
            gap: 10px;
        }
        .chat-input {
            flex: 1;
            padding: 14px 18px;
            border-radius: 24px;
            border: 2px solid #cbd5e1;
            font-size: 14px;
            background: white;
            transition: all 0.2s;
        }
        .chat-input:focus { 
            border-color: var(--color-primary); 
            outline: none;
            box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.1);
        }
        .chat-input:disabled {
            background: #f1f5f9;
            cursor: not-allowed;
        }
        .send-btn {
            width: 48px; 
            height: 48px;
            background: linear-gradient(135deg, var(--color-primary) 0%, #ec4899 100%);
            color: white;
            border-radius: 50%;
            display: flex; 
            align-items: center; 
            justify-content: center;
            box-shadow: 0 4px 12px rgba(244, 63, 94, 0.3);
            transition: all 0.2s;
        }
        .send-btn:hover:not(:disabled) {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(244, 63, 94, 0.4);
        }
        .send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .typing span {
           animation: blink 1.4s infinite both;
           margin: 0 1px;
           font-size: 20px;
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
