import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Bot, User, Sparkles, Copy, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001';

const QUICK_ACTIONS = [
    { q: "Analyze my latest report", icon: "📊" },
    { q: "Show me diet tips", icon: "🍽️" },
    { q: "Exercise recommendations", icon: "💪" },
    { q: "What's my hemoglobin?", icon: "🩸" }
];

const AIChat = ({ onBack, userProfile }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: `Hello ${userProfile?.name ? userProfile.name.split(' ')[0] : ''}! I'm your AI Health Assistant powered by medical knowledge. Ask me about your blood reports, personalized diet plans, or workout advice!`, sender: 'bot', confidence: 1.0 }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [useBackend, setUseBackend] = useState(true);
    const [copiedId, setCopiedId] = useState(null);
    const messagesEndRef = useRef(null);
    const [reports, setReports] = useState([]);

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
            console.warn('Backend unavailable, using enhanced fallback:', error);
            setUseBackend(false);
            return getEnhancedFallbackResponse(query);
        }
    };

    const getEnhancedFallbackResponse = (query) => {
        const lowerQ = query.toLowerCase();

        // Enhanced Report Analysis
        if (lowerQ.includes('analyze') || lowerQ.includes('summary') || lowerQ.includes('my report')) {
            if (reports.length === 0) {
                return {
                    text: "I don't see any blood reports uploaded yet. Upload one in the Blood Evaluation section to get personalized insights!",
                    confidence: 1.0
                };
            }
            const latest = reports[0];
            const abnormal = latest.results.filter(r => r.status !== 'Normal');

            if (abnormal.length === 0) {
                return {
                    text: `✅ Great news! Your latest report from ${latest.date} shows all parameters within normal range. Keep up the excellent work! 🌟\n\nMaintain your healthy lifestyle:\n• Balanced diet with proteins, veggies, and whole grains\n• Regular exercise 150 mins/week\n• 7-9 hours quality sleep\n• Stay hydrated (3-4L water daily)`,
                    confidence: 0.95
                };
            }

            let analysis = `📊 **Analysis of Report from ${latest.date}:**\n\n`;
            abnormal.forEach(item => {
                analysis += `🔹 **${item.parameter}**: ${item.value} ${item.unit} (${item.status})\n`;

                // Enhanced recommendations based on parameter
                if (item.parameter.toLowerCase().includes('hemoglobin') && item.status === 'Low') {
                    analysis += `   💡 Boost with: Spinach, red meat, lentils, dates, pomegranate\n   💊 Consider iron supplements with Vitamin C\n\n`;
                } else if (item.parameter.toLowerCase().includes('sugar') && item.status === 'High') {
                    analysis += `   💡 Control with: Low GI foods, avoid sweets, 30min daily walk\n   🍽️ Eat: Oats, quinoa, vegetables. Avoid: white rice, sugary drinks\n\n`;
                } else if (item.parameter.toLowerCase().includes('cholesterol') && item.status === 'High') {
                    analysis += `   💡 Manage with: Oats, nuts, fatty fish, olive oil\n   ❌ Avoid: Trans fats, fried foods, processed meats\n\n`;
                }
            });

            analysis += `\n⚠️ This is AI-generated advice. Consult your doctor for medical decisions.`;
            return { text: analysis, confidence: 0.9 };
        }

        // Specific Parameter Query
        const parameterKeywords = ['hemoglobin', 'sugar', 'glucose', 'cholesterol', 'thyroid', 'tsh', 'vitamin'];
        const foundParam = parameterKeywords.find(param => lowerQ.includes(param));

        if (foundParam && reports.length > 0) {
            const latest = reports[0];
            const result = latest.results.find(r => r.parameter.toLowerCase().includes(foundParam));

            if (result) {
                let response = `📊 Your latest **${result.parameter}** is **${result.value} ${result.unit}**, which is **${result.status}**.\n\n`;

                if (result.status === 'Low' && foundParam === 'hemoglobin') {
                    response += `💡 **How to improve:**\n🍽️ Iron-rich foods: Red meat, liver, spinach, lentils, dates\n🥤 Drink: Pomegranate juice, beetroot juice\n💊 Supplements: Iron with Vitamin C for better absorption\n⚠️ Avoid tea/coffee with meals`;
                } else if (result.status === 'High' && (foundParam === 'sugar' || foundParam === 'glucose')) {
                    response += `💡 **Management tips:**\n🍽️ Low GI foods: Oats, quinoa, brown rice, vegetables\n❌ Avoid: White rice, sugary drinks, pastries\n🏃 Exercise: 30 mins daily walking after meals\n📊 Monitor blood sugar regularly`;
                }

                return { text: response, confidence: 0.95 };
            }
        }

        // Diet Recommendations
        if (lowerQ.includes('diet') || lowerQ.includes('food') || lowerQ.includes('eat')) {
            const diseases = userProfile?.diseases?.toLowerCase() || '';

            if (diseases.includes('diabetes')) {
                return {
                    text: `🍽️ **Diabetes-Friendly Diet Plan:**\n\n✅ **Include:**\n• Low GI foods: Steel-cut oats, quinoa, barley\n• Vegetables: Broccoli, spinach, cauliflower\n• Proteins: Chicken, fish, tofu, eggs\n• Low GI fruits: Berries, apples, pears\n\n❌ **Avoid:**\n• White rice, white bread, pastries\n• Sugary drinks and sodas\n• High GI fruits: Mango, pineapple, watermelon\n• Fried and processed foods\n\n⏰ Eat small meals every 3-4 hours\n\n⚠️ Consult your doctor for personalized advice`,
                    confidence: 0.9
                };
            }

            return {
                text: `🍽️ **Balanced Diet Guidelines:**\n\n✅ **Proteins:** Eggs, chicken, fish, paneer, lentils (1.2g per kg body weight)\n✅ **Carbs:** Brown rice, oats, quinoa, sweet potato\n✅ **Healthy Fats:** Nuts, seeds, olive oil, avocado\n✅ **Fiber:** Vegetables, fruits, whole grains (25-30g daily)\n\n💡 **Tips:**\n• Eat rainbow (colorful vegetables)\n• Stay hydrated (3-4L water)\n• Avoid processed foods\n• Cook at home when possible`,
                confidence: 0.85
            };
        }

        // Exercise Recommendations
        if (lowerQ.includes('exercise') || lowerQ.includes('workout') || lowerQ.includes('gym') || lowerQ.includes('muscle')) {
            if (lowerQ.includes('muscle') || lowerQ.includes('build')) {
                return {
                    text: `💪 **Muscle Building Plan:**\n\n🏋️ **Workout:**\n• 4-6 days/week progressive resistance training\n• Focus on compound movements: Squats, deadlifts, bench press\n• 8-12 reps, 3-4 sets per exercise\n• 48 hours rest between same muscle groups\n\n🍽️ **Nutrition:**\n• Protein: 1.6-2.2g per kg body weight\n• Carbs: 4-6g per kg (for energy)\n• Calorie surplus: 300-500 kcal/day\n• Post-workout protein within 2 hours\n\n💤 **Recovery:** 7-8 hours sleep essential!`,
                    confidence: 0.9
                };
            } else if (lowerQ.includes('lose') || lowerQ.includes('weight loss')) {
                return {
                    text: `🏃 **Weight Loss Plan:**\n\n🏋️ **Exercise:**\n• 5-6 days/week\n• Mix: 60% cardio + 40% strength training\n• Zone 2 cardio: 150-300 mins/week\n• HIIT: 2-3 times/week (20 mins)\n\n🍽️ **Nutrition:**\n• Calorie deficit: 500 kcal/day for 0.5kg/week loss\n• High protein: 1.2-1.6g/kg (preserve muscle)\n• High fiber: 25-30g daily (keeps you full)\n• Hydration: 3-4 liters water daily\n\n📊 Track progress weekly, not daily!`,
                    confidence: 0.9
                };
            }

            return {
                text: `💪 **General Fitness Plan:**\n\n✅ **Cardio:** 150 mins moderate or 75 mins vigorous per week\n✅ **Strength:** 2-3 days/week full body\n✅ **Flexibility:** Yoga or stretching 2x/week\n\n🍽️ **Balanced nutrition:** 40% carbs, 30% protein, 30% fats\n💤 **Recovery:** 7-9 hours sleep\n💧 **Hydration:** 3-4L water daily`,
                confidence: 0.85
            };
        }

        // Nutrition Info
        const nutritionDB = {
            'chicken': { protein: 31, carbs: 0, fat: 3.6, calories: 165 },
            'eggs': { protein: 13, carbs: 1.1, fat: 11, calories: 155 },
            'paneer': { protein: 18, carbs: 1.2, fat: 20, calories: 265 },
            'oats': { protein: 17, carbs: 66, fat: 7, calories: 389 },
            'banana': { protein: 1.1, carbs: 23, fat: 0.3, calories: 89 }
        };

        for (const [food, nutrition] of Object.entries(nutritionDB)) {
            if (lowerQ.includes(food)) {
                return {
                    text: `🥗 **Nutrition Facts: ${food.charAt(0).toUpperCase() + food.slice(1)}** (per 100g)\n\n• Protein: ${nutrition.protein}g\n• Carbs: ${nutrition.carbs}g\n• Fat: ${nutrition.fat}g\n• Calories: ${nutrition.calories} kcal\n\n💡 Great for ${nutrition.protein > 20 ? 'muscle building' : 'balanced nutrition'}!`,
                    confidence: 1.0
                };
            }
        }

        // Sleep
        if (lowerQ.includes('sleep')) {
            return {
                text: `💤 **Sleep is Non-Negotiable!**\n\n🎯 Aim for 7-9 hours of quality sleep\n\n✅ **Tips for Better Sleep:**\n• Consistent schedule (same time daily)\n• Avoid screens 1 hour before bed\n• Keep bedroom cool (18-20°C)\n• No caffeine after 2 PM\n• Light dinner 2-3 hours before bed\n\n💡 Sleep affects: Recovery, muscle growth, metabolism, mood, immunity`,
                confidence: 0.9
            };
        }

        // Water/Hydration
        if (lowerQ.includes('water') || lowerQ.includes('hydrat')) {
            const weight = userProfile?.weight || 70;
            const waterIntake = Math.round(weight * 0.033 * 10) / 10;
            return {
                text: `💧 **Stay Hydrated!**\n\n🎯 Based on your weight (${weight}kg), aim for **${waterIntake}L** of water daily\n\n✅ **Benefits:**\n• Improved metabolism\n• Better athletic performance\n• Clearer skin\n• Enhanced kidney function\n• Better focus and energy\n\n💡 Drink more if exercising or in hot weather!`,
                confidence: 0.95
            };
        }

        // Default response
        return {
            text: `I'm here to help with your health! Try asking:\n\n📊 "Analyze my latest report"\n🩸 "What's my hemoglobin level?"\n🍽️ "Show me a diet plan for diabetes"\n💪 "How to build muscle?"\n🥗 "Nutrition in chicken"\n💧 "How much water should I drink?"\n\n${!useBackend ? '\n⚠️ Note: Backend is offline, using local intelligence.' : ''}`,
            confidence: 0.6
        };
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const response = useBackend
                ? await getBackendResponse(input)
                : getEnhancedFallbackResponse(input);

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

    return (
        <div className="chat-container fade-in">
            <div className="header-row">
                <button onClick={onBack} className="back-btn">
                    <ChevronLeft size={24} />
                </button>
                <h2>🤖 AI Health Assistant</h2>
                {!useBackend && <span className="offline-badge">Local Mode</span>}
            </div>

            <div className="chat-window">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                        {msg.sender === 'bot' && <div className="avatar bot"><Bot size={16} /></div>}
                        <div className="message-container">
                            <div className="message-bubble">
                                {msg.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < msg.text.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </div>
                            {msg.sender === 'bot' && msg.confidence && (
                                <div className="message-actions">
                                    <span className="confidence-badge">
                                        {msg.confidence >= 0.9 ? '🟢' : msg.confidence >= 0.7 ? '🟡' : '🔴'}
                                        {Math.round(msg.confidence * 100)}% confident
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
                <div className="quick-actions-row">
                    {QUICK_ACTIONS.map((action, idx) => (
                        <button
                            key={idx}
                            className="quick-action-btn"
                            onClick={() => handleQuickAction(action)}
                            disabled={isTyping}
                        >
                            <span className="action-icon">{action.icon}</span>
                            <span className="action-text">{action.q}</span>
                        </button>
                    ))}
                </div>

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

        .input-section {
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex-shrink: 0;
        }

        .quick-actions-row {
           display: flex;
           overflow-x: auto;
           gap: 8px;
           padding-bottom: 5px;
           scrollbar-width: none;
        }
        .quick-actions-row::-webkit-scrollbar {
            display: none;
        }
        .quick-action-btn {
           white-space: nowrap;
           background: white;
           border: 1.5px solid var(--color-primary);
           color: var(--color-primary);
           padding: 8px 14px;
           border-radius: 20px;
           font-size: 12px;
           transition: all 0.2s;
           display: flex;
           align-items: center;
           gap: 6px;
           font-weight: 500;
        }
        .quick-action-btn:hover:not(:disabled) {
           background: var(--color-primary);
           color: white;
           transform: translateY(-1px);
           box-shadow: 0 4px 12px rgba(244, 63, 94, 0.2);
        }
        .quick-action-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .action-icon {
            font-size: 14px;
        }
        .action-text {
            font-size: 11px;
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
