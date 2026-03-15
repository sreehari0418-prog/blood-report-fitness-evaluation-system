import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  // View State: 'login', 'forgot-email', 'forgot-otp', 'forgot-reset'
  const [view, setView] = useState('login');
  const [isLogin, setIsLogin] = useState(true);
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // UI State
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // --- Validation ---
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (view === 'login') {
        if (password.length < 6) {
          setError('Password must be at least 6 characters long.');
          return;
        }
    }

    setIsLoading(true);

    try {
      const { api } = await import('../utils/api.js');
      let result;

      if (view === 'login') {
          if (isLogin) {
            // --- LOGIN LOGIC ---
            result = await api.login(email, password);
          } else {
            // --- SIGNUP LOGIC ---
            result = await api.register(email, password);
          }

          if (result.success) {
            onLogin(result.user, !isLogin);
          } else {
            setError(result.error || 'Authentication failed');
          }
      } else if (view === 'forgot-email') {
          result = await api.requestPasswordReset(email);
          if (result.success) {
              setSuccess('Reset code sent! Please check your email.');
              setView('forgot-otp');
          } else {
              setError(result.error || 'User not found');
          }
      } else if (view === 'forgot-otp') {
          result = await api.verifyOTP(email, otp);
          if (result.success) {
              setView('forgot-reset');
          } else {
              setError(result.error || 'Invalid or expired OTP');
          }
      } else if (view === 'forgot-reset') {
          if (password !== confirmPassword) {
              setError('Passwords do not match');
              setIsLoading(false);
              return;
          }
          if (password.length < 6) {
              setError('Password must be at least 6 characters long');
              setIsLoading(false);
              return;
          }
          result = await api.resetPassword(email, otp, password);
          if (result.success) {
              setSuccess('Password reset successfully! Please login.');
              setView('login');
              setIsLogin(true);
              setPassword('');
          } else {
              setError(result.error || 'Failed to reset password');
          }
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    switch(view) {
      case 'forgot-email':
        return (
          <>
            <div className="form-group">
              <label htmlFor="email">Registered Email</label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : 'Send OTP'}
            </button>
            <p className="footer-text">
                <span className="link" onClick={() => { setView('login'); setError(''); }}>Back to Login</span>
            </p>
          </>
        );
      case 'forgot-otp':
        return (
          <>
            <p className="description-text">Enter the 6-digit code sent to <b>{email}</b></p>
            <div className="form-group">
              <label htmlFor="otp">Verification Code</label>
              <input
                type="text"
                id="otp"
                className="input-field otp-input"
                placeholder="123456"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : 'Verify Code'}
            </button>
            <p className="footer-text">
                Didn't get the code? <span className="link" onClick={() => setView('forgot-email')}>Resend</span>
            </p>
          </>
        );
      case 'forgot-reset':
        return (
          <>
             <div className="form-group">
              <label htmlFor="n-password">New Password</label>
              <input
                type="password"
                id="n-password"
                className="input-field"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="c-password">Confirm Password</label>
              <input
                type="password"
                id="c-password"
                className="input-field"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : 'Reset Password'}
            </button>
          </>
        );
      default:
        return (
          <>
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
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {isLogin && (
                <div className="forgot-password">
                  <span onClick={() => { setView('forgot-email'); setError(''); setSuccess(''); }}>Forgot Password?</span>
                </div>
              )}
            </div>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : (isLogin ? 'Login' : 'Sign Up')}
            </button>
            <p className="footer-text">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="link" onClick={() => { setIsLogin(!isLogin); setError(''); }}>
                {isLogin ? 'Sign up' : 'Login'}
              </span>
            </p>
          </>
        );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card fade-in">
        <div className="logo-section">
          <img src="app_logo.jpg" alt="BloodFit Logo" className="app-logo" />
          <h1>{view === 'login' ? 'Blood & Fit' : 'Reset Password'}</h1>
          <p>{view === 'login' ? 'Your personal health companion' : 'Follow the steps to regain access'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {renderForm()}
          
          {error && (
            <div className="error-box fade-in">
              <span>⚠️ {error}</span>
            </div>
          )}
          
          {success && (
            <div className="success-box fade-in">
              <span>✅ {success}</span>
            </div>
          )}
        </form>
      </div>

      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-md);
          background: linear-gradient(135deg, #fff1f2 0%, #fff 100%);
        }
        
        .login-card {
           width: 100%;
           max-width: 400px;
           background: rgba(255, 255, 255, 0.9);
           backdrop-filter: blur(10px);
           padding: var(--spacing-xl);
           border-radius: 24px;
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
           text-align: center;
           border: 1px solid rgba(255,255,255,0.5);
        }

        .logo-section {
          margin-bottom: var(--spacing-xl);
        }

        .app-logo {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: var(--spacing-md);
          border-radius: 20px; /* Softer edges */
          box-shadow: var(--shadow-md);
        }

        .logo-section h1 {
          font-size: 24px;
          color: var(--color-text-main);
          margin-bottom: 5px;
          font-weight: 800;
        }

        .logo-section p {
          color: var(--color-text-secondary);
          font-size: 14px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--color-text-main);
          font-size: 13px;
        }

        .input-field {
            width: 100%;
            padding: 12px;
            border: 1px solid #e2e8f0;
            border-radius: var(--radius-md);
            font-size: 14px;
            transition: all 0.2s;
        }
        .input-field:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.1);
        }

        .password-wrapper {
            position: relative;
        }
        .toggle-password {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            font-size: 12px;
            color: var(--color-primary);
            font-weight: 600;
            cursor: pointer;
        }

        .btn-primary {
          width: 100%;
          padding: 12px;
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:active { transform: scale(0.98); }

        .error-box, .success-box {
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #ef4444;
            padding: 10px;
            border-radius: var(--radius-md);
            font-size: 12px;
            text-align: left;
            display: flex; gap: 8px;
        }

        .success-box {
            background: #f0fdf4;
            border-color: #bbf7d0;
            color: #16a34a;
        }

        .description-text {
            font-size: 14px;
            color: var(--color-text-secondary);
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .otp-input {
            text-align: center;
            font-size: 24px;
            letter-spacing: 8px;
            font-weight: 700;
        }

        .footer-text {
          margin-top: 25px;
          font-size: 13px;
          color: var(--color-text-secondary);
        }

        .link {
          color: var(--color-primary);
          font-weight: 600;
          cursor: pointer;
        }
        .link:hover { text-decoration: underline; }

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
          to { opacity: 1; transform: translateY(0); }
        }
        
        .forgot-password {
            text-align: right;
            margin-top: 8px;
            font-size: 12px;
        }
        .forgot-password span {
            color: var(--color-primary);
            cursor: pointer;
            font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Login;
