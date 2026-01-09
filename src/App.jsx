import React, { useState } from 'react'
import Login from './components/Login'
import ProfileSetup from './components/ProfileSetup'
import Dashboard from './components/Dashboard'
import BMICalculator from './components/BMI/BMICalculator'
import BloodEvaluation from './components/Blood/BloodEvaluation'
import FitnessHelper from './components/Fitness/FitnessHelper'
import HomeWorkout from './components/Fitness/HomeWorkout'
import WeightProgress from './components/WeightProgress'
import AIChat from './components/Chat/AIChat'
import Toast from './components/Toast'

function App() {
    const [currentPage, setCurrentPage] = useState('login');
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null) // Should retrieve from local storage on load

    // Notification State
    const [toastMsg, setToastMsg] = useState(null);

    React.useEffect(() => {
        // Attempt to load user
        const saved = localStorage.getItem('user_profile');
        if (saved) {
            setUserData(JSON.parse(saved));
        }

        // Simple reminder system (no welcome message)
        const messages = [
            "Drink a glass of water now! 💧",
            "Time to stretch your legs! 🚶",
            "Don't forget to eat a fruit today! 🍎",
            "Stay motivated! You're doing great. 💪",
            "Check your blood report regularly. 🩸",
            "Avoid sugary drinks for better health. 🥤❌"
        ];

        const interval = setInterval(() => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            setToastMsg(randomMsg);
        }, 120000); // Every 2 minutes (less frequent)

        return () => clearInterval(interval);
    }, []);

    const handleLogin = (userAuth) => {
        setUser(userAuth);
        // If we have profile skip to dash, else setup
        if (localStorage.getItem('user_profile')) {
            setUserData(JSON.parse(localStorage.getItem('user_profile')));
            setCurrentPage('dashboard');
        } else {
            setCurrentPage('profile_setup');
        }
    };

    const handleProfileComplete = (data) => {
        setUserData(data);
        localStorage.setItem('user_profile', JSON.stringify(data));
        setCurrentPage('dashboard');
    };

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);
    };

    const handleLogout = () => {
        localStorage.removeItem('user_profile');
        setUser(null);
        setUserData(null);
        setCurrentPage('login');
    };

    return (
        <div className="app-container">
            {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}

            {currentPage === 'login' && <Login onLogin={handleLogin} />}
            {currentPage === 'profile_setup' && <ProfileSetup onComplete={handleProfileComplete} />}
            {currentPage === 'dashboard' && <Dashboard userName={userData?.name} onNavigate={handleNavigate} onLogout={handleLogout} />}

            {currentPage === 'bmi' && <BMICalculator userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'blood' && <BloodEvaluation onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'fitness' && <FitnessHelper userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'homeworkout' && <HomeWorkout onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'weightprogress' && <WeightProgress userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'chat' && <AIChat userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
        </div>
    )
}

export default App
