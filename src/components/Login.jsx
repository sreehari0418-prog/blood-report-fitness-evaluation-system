import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            onLogin({ email }); // Pass mock user data
        }, 1500);
    };

    return (
        <div className="login-container">
            <div className="login-card fade-in">
                <div className="logo-section">
                    <img src="/logo.png" alt="BloodFit Logo" className="app-logo" />
                    <h1>Blood & Fit</h1>
                    <p>Your personal health companion</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="input-field"
                            placeholder="hello@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary" disabled={isLoading}>
                        {isLoading ? <span className="spinner"></span> : 'Login'}
                    </button>
                </form>

                <p className="footer-text">
                    Don't have an account? <span className="link">Sign up</span>
                </p>
            </div>

            <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-md);
          background: linear-gradient(135deg, #FFF0F1 0%, #FFFFFF 100%);
        }
        
        .login-card {
           width: 100%;
           max-width: 400px;
           background: var(--color-surface);
           padding: var(--spacing-xl);
           border-radius: var(--radius-lg);
           box-shadow: var(--shadow-lg);
           text-align: center;
        }

        .logo-section {
          margin-bottom: var(--spacing-xl);
        }

        .app-logo {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: var(--spacing-md);
          filter: drop-shadow(0 4px 6px rgba(230, 57, 70, 0.2));
        }

        .logo-section h1 {
          font-size: var(--font-size-2xl);
          color: var(--color-primary-dark);
          margin-bottom: var(--spacing-xs);
        }

        .logo-section p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 500;
          color: var(--color-text-main);
          font-size: var(--font-size-sm);
        }

        .btn-primary {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-text {
          margin-top: var(--spacing-lg);
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
        }

        .link {
          color: var(--color-primary);
          font-weight: 600;
          cursor: pointer;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default Login;
