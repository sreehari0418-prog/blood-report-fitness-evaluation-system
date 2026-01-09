import React, { useState } from 'react';
import { Activity, Calculator, FileText, Utensils, MessageSquare, Dumbbell, TrendingUp } from 'lucide-react';
import ProfileDashboard from './Profile/ProfileDashboard';

const Dashboard = ({ userName, onNavigate, onLogout }) => {
  const [showProfileDashboard, setShowProfileDashboard] = useState(false);

  // If profile is open, render it full screen
  if (showProfileDashboard) {
    return (
      <ProfileDashboard
        user={{ name: userName, email: 'user@example.com' }} // Simulated user data passing for now
        onClose={() => setShowProfileDashboard(false)}
        onLogout={onLogout}
      />
    );
  }

  const options = [
    {
      id: 'blood',
      title: 'Blood Evaluation',
      desc: 'Analyze reports & get insights',
      icon: <FileText size={24} />,
      color: '#4361EE',
      bg: '#F0F4FF'
    },
    {
      id: 'bmi',
      title: 'BMI Calculator',
      desc: 'Check your health risk & vitals',
      icon: <Calculator size={24} />,
      color: 'var(--color-primary)',
      bg: '#FFF0F1'
    },
    {
      id: 'fitness',
      title: 'Fitness Helper',
      desc: 'Diet plans & weight goals',
      icon: <Utensils size={24} />,
      color: '#2A9D8F',
      bg: '#EDF7F6'
    },
    {
      id: 'homeworkout',
      title: 'Home Workout',
      desc: '8 Basic exercises & calories',
      icon: <Dumbbell size={24} />,
      color: '#FF6B6B',
      bg: '#FFF0F1'
    },
    {
      id: 'chat',
      title: 'AI Health Bot',
      desc: 'Ask questions & get advice',
      icon: <MessageSquare size={24} />,
      color: '#7209B7',
      bg: '#F3E8FF'
    },
    {
      id: 'weightprogress', // Linking to the new route
      title: 'Weight Tracker',
      desc: 'Track your weight changes',
      icon: <TrendingUp size={24} />,
      color: '#8D99AE',
      bg: '#F1F5F9'
    }
  ];

  return (
    <div className="dashboard-container fade-in">
      <header className="dash-header">
        <div className="avatar" onClick={() => setShowProfileDashboard(true)} style={{ cursor: 'pointer' }}>
          {userName ? userName.charAt(0).toUpperCase() : 'U'}
        </div>
        <div className="welcome-text">
          <p>Welcome back,</p>
          <h3>{userName || 'User'}</h3>
        </div>
        {/* Notification icon removed */}
      </header>

      <div className="stats-preview">
        {/* Placeholder for quick stats or motivational quote */}
        <div className="stat-card">
          <h4>Stay Hydrated! 💧</h4>
          <p>Drink 8 glasses of water today.</p>
        </div>
      </div>

      <div className="options-grid">
        {options.map((opt) => (
          <button
            key={opt.id}
            className="option-card"
            onClick={() => onNavigate(opt.id)}
            style={{ '--hover-color': opt.color }}
          >
            <div className="icon-box" style={{ color: opt.color, backgroundColor: opt.bg }}>
              {opt.icon}
            </div>
            <div className="text-box">
              <h4>{opt.title}</h4>
              <p>{opt.desc}</p>
            </div>
            <div className="arrow">→</div>
          </button>
        ))}
      </div>

      <style>{`
        .dashboard-container {
          padding: var(--spacing-md);
          padding-bottom: 80px; /* Space for bottom nav if added */
        }
        
        .dash-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .avatar {
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: var(--font-size-lg);
          box-shadow: var(--shadow-md);
        }

        .welcome-text {
          flex: 1;
        }

        .welcome-text p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-xs);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .welcome-text h3 {
          color: var(--color-text-main);
        }

        .notif-btn {
          background: white;
          padding: 10px;
          border-radius: 50%;
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: var(--color-danger);
          border-radius: 50%;
          border: 1px solid white;
        }

        .stats-preview {
          margin-bottom: var(--spacing-xl);
        }

        .stat-card {
           background: linear-gradient(135deg, #4CC9F0 0%, #4361EE 100%);
           color: white;
           padding: var(--spacing-lg);
           border-radius: var(--radius-lg);
           box-shadow: var(--shadow-md);
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .option-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          background: white;
          padding: var(--spacing-md);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: var(--shadow-sm);
          text-align: left;
          width: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .option-card:hover { /* Desktop hover */
           transform: translateY(-2px);
           box-shadow: var(--shadow-md);
           border-color: var(--hover-color);
        }

        .option-card:active {
           transform: scale(0.98);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-box {
          flex: 1;
        }

        .text-box h4 {
           margin-bottom: 2px;
           color: var(--color-text-main);
        }

        .text-box p {
           font-size: var(--font-size-xs);
           color: var(--color-text-secondary);
        }

        .arrow {
          color: var(--color-text-muted);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
