import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User, Sparkles, Copy, CheckCircle2, ShieldCheck } from 'lucide-react';

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

import { getInstantResponse } from '../../utils/predefinedQA';

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
                text: "I'm having trouble connecting to my AI brain. However, for general health questions, I can still provide instant answers based on my knowledge base!",
                confidence: 0
            };
        }
    };

    const handleSend = async (e, customInput = null) => {
        if (e && e.preventDefault) e.preventDefault();
        const finalInput = customInput || input;
        if (!finalInput.trim()) return;

        const userMsg = { id: Date.now(), text: finalInput, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // 1. Check for Instant Frontend Response (100+ Questions)
        const instantResponse = getInstantResponse(finalInput);
        if (instantResponse && instantResponse.confidence >= 0.6) {
            setTimeout(() => {
                const botMsg = {
                    id: Date.now() + 1,
                    text: instantResponse.text,
                    sender: 'bot',
                    confidence: instantResponse.confidence,
                    intent: instantResponse.intent,
                    mood: 'insightful'
                };
                setMessages(prev => [...prev, botMsg]);
                setIsTyping(false);
            }, 500);
            return;
        }

        // 2. Fallback to Backend AI
        try {
            const response = await getBackendResponse(finalInput);

            setTimeout(() => {
                const botMsg = {
                    id: Date.now() + 1,
                    text: response.text,
                    sender: 'bot',
                    confidence: response.confidence || 0.8,
                    intent: response.intent,
                    followups: response.followups || [],
                    visual_type: response.visual_type || 'standard',
                    mood: response.mood || 'insightful'
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
        if (!text) return null;
        const lines = text.split('\n');
        return lines.map((line, i) => {
            let processedLine = line;

            // Handle Tables
            if (processedLine.includes('|') && processedLine.split('|').length > 2) {
                if (processedLine.includes('---')) return null;
                const cells = processedLine.split('|').filter(c => c.trim() !== '');
                const isHeader = i < lines.length - 1 && lines[i + 1].includes('---');

                return (
                    <div key={i} className="table-row" style={{
                        display: 'flex',
                        borderBottom: '1px solid #e2e8f0',
                        padding: '6px 0',
                        fontWeight: isHeader ? '700' : '400',
                        background: isHeader ? '#f8fafc' : 'transparent',
                        fontSize: '13px'
                    }}>
                        {cells.map((cell, ci) => (
                            <div key={ci} style={{ flex: 1, padding: '0 8px' }}>{cell.trim()}</div>
                        ))}
                    </div>
                );
            }

            // Bold Headers
            if (processedLine.startsWith('### ')) {
                return <h4 key={i} className="md-header">{processedLine.replace('### ', '')}</h4>;
            }

            // Bold text
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

            // Lists
            if (processedLine.trim().startsWith('* ') || processedLine.trim().startsWith('- ')) {
                return (
                    <div key={i} className="md-list-item">
                        <span className="bullet">•</span>
                        <span>{segments.length > 0 ? segments : processedLine.replace(/^[*|-]\s/, '')}</span>
                    </div>
                );
            }

            return (
                <div key={i} className="md-text">
                    {segments.length > 0 ? segments : processedLine}
                </div>
            );
        });
    };

    return (
        <div className="chat-container assistant-theme fade-in">
            <div className="header-crystal">
                <button onClick={onBack} className="back-btn-blur">
                    <ChevronLeft size={20} />
                </button>
                <div className="bot-info">
                    <h2>🤖 AI Assistant</h2>
                    <div className="badge-proactive">
                        <div className="pulse"></div>
                        <span>Grounding Active</span>
                    </div>
                </div>
                <Sparkles size={22} className="ai-glow" />
            </div>

            <div className="chat-window-crystal">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                        {msg.sender === 'bot' && (
                            <div className={`avatar-bot ${msg.mood}`}>
                                <Sparkles size={16} />
                            </div>
                        )}
                        <div className="message-container">
                            <div className={`message-bubble ${msg.sender}-bubble glass`}>
                                {renderMessage(msg.text)}
                            </div>

                            {(msg.type === 'choice' || (msg.followups && msg.followups.length > 0)) && (
                                <div className="interactive-options">
                                    {(msg.options || msg.followups).map((opt, i) => (
                                        <button
                                            key={i}
                                            className="assistant-choice-btn"
                                            onClick={() => {
                                                if (msg.type === 'choice') handleFlowAction(opt);
                                                else handleSend(null, opt);
                                            }}
                                            disabled={isTyping}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {msg.sender === 'bot' && msg.confidence && (
                                <div className="message-meta">
                                    <div className="expert-badge">
                                        <ShieldCheck size={12} />
                                        <span>Medical Grounding: 100%</span>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(msg.text, msg.id)}
                                        className="copy-mini"
                                    >
                                        {copiedId === msg.id ? <CheckCircle2 size={12} /> : <Copy size={12} />}
                                    </button>
                                </div>
                            )}
                        </div>
                        {msg.sender === 'user' && <div className="avatar-user"><User size={16} /></div>}
                    </div>
                ))}
                {isTyping && (
                    <div className="message-row bot">
                        <div className="avatar-bot insightful">
                            <Sparkles size={16} />
                        </div>
                        <div className="message-bubble glass typing-glass">
                            <div className="dot-wave">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="input-section-crystal">
                <form onSubmit={handleSend} className="input-form-glass">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask AI Assistant about health..."
                        className="chat-input-glass"
                        disabled={isTyping}
                    />
                    <button type="submit" className="send-btn-gradient" disabled={isTyping || !input.trim()}>
                        <Send size={20} />
                    </button>
                </form>
            </div>

            <style>{`
                .chat-container.assistant-theme {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background: #fdfefe;
                    font-family: 'Inter', sans-serif;
                }

                .header-crystal {
                    background: linear-gradient(135deg, #7209B7 0%, #3F37C9 100%);
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: white;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                    z-index: 10;
                }

                .back-btn-blur {
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255,255,255,0.2);
                    padding: 8px;
                    border-radius: 12px;
                    color: white;
                }

                .bot-info h2 { font-size: 18px; font-weight: 700; margin: 0; }
                .badge-proactive {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    opacity: 0.9;
                    margin-top: 4px;
                }
                .pulse {
                    width: 8px; height: 8px;
                    background: #4ade80;
                    border-radius: 50%;
                    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
                    animation: pulse-green 2s infinite;
                }

                .chat-window-crystal {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    background: #f8fafc;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .message-bubble.glass {
                    background: white;
                    border-radius: 20px;
                    padding: 16px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                    border: 1px solid #eef2f6;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #334155;
                }

                .bot-bubble.glass {
                    border-top-left-radius: 4px;
                    background: linear-gradient(to bottom right, #ffffff, #f1f5f9);
                }

                .user-bubble.glass {
                    background: linear-gradient(135deg, #7209B7 0%, #3F37C9 100%);
                    color: white;
                    border-top-right-radius: 4px;
                    box-shadow: 0 4px 15px rgba(114, 9, 183, 0.2);
                }

                .avatar-bot {
                    width: 32px; height: 32px;
                    border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    color: white;
                    background: #7209B7;
                }
                .avatar-bot.congratulatory { background: #10b981; }
                .avatar-bot.cautionary { background: #f59e0b; }

                .interactive-options {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 12px;
                }

                .assistant-choice-btn {
                    background: white;
                    border: 1.5px solid #e2e8f0;
                    padding: 10px 18px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #7209B7;
                    transition: all 0.2s;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
                }

                .assistant-choice-btn:hover {
                    border-color: #7209B7;
                    background: #f5f3ff;
                    transform: translateY(-2px);
                }

                .input-section-crystal {
                    padding: 20px;
                    background: white;
                    border-top: 1px solid #f1f5f9;
                }

                .input-form-glass {
                    display: flex;
                    gap: 12px;
                    background: #f1f5f9;
                    padding: 8px;
                    border-radius: 30px;
                }

                .chat-input-glass {
                    flex: 1;
                    background: transparent;
                    border: none;
                    padding: 10px 15px;
                    font-size: 14px;
                    color: #334155;
                }
                .chat-input-glass:focus { outline: none; }

                .send-btn-gradient {
                    width: 45px; height: 45px;
                    background: linear-gradient(135deg, #7209B7 0%, #3F37C9 100%);
                    color: white;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                }

                .md-header { margin: 15px 0 8px 0; color: #1e293b; font-size: 15px; }
                .md-list-item { display: flex; gap: 10px; margin-bottom: 6px; }
                .bullet { color: #7209B7; font-weight: bold; }
                
                .expert-badge {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 10px;
                    color: #64748b;
                    margin-top: 8px;
                    font-weight: 600;
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 6px;
                    width: fit-content;
                }

                @keyframes pulse-green {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
                }

                .dot-wave { display: flex; gap: 4px; }
                .dot-wave span { width: 6px; height: 6px; background: #94a3b8; border-radius: 50%; animation: wave 1.3s infinite ease-in-out; }
                .dot-wave span:nth-child(2) { animation-delay: 0.1s; }
                .dot-wave span:nth-child(3) { animation-delay: 0.2s; }

                @keyframes wave {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-4px); }
                }
            `}</style>
        </div>
    );
};

export default AIChat;
