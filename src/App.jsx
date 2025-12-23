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

        // --- REAL NOTIFICATION SYSTEM ---
        // 1. Request Permission on load (if supported)
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        // 2. Schedule Checks (Realistic)
        const checkSchedule = () => {
            const now = new Date();
            const hour = now.getHours();

            // Workout Reminder (e.g., 7 AM or 6 PM)
            // Just for demo, we check if it's the exact minute to trigger ONCE
            if (hour === 7 || hour === 18) {
                sendNativeNotification("Time to Workout! 🏋️", "Consistency is key. 20 mins home workout?");
            }

            // Blood Check Reminder (Monthly logic - simplified)
            const day = now.getDate();
            if (day === 1 && hour === 9) {
                sendNativeNotification("Blood Check Due 🩸", "It's the 1st of the month. Time for your routine checkup.");
            }
        };

        const interval = setInterval(checkSchedule, 3600000); // Check every hour

        // Also run a small demo check a few seconds after load just to prove it works
        setTimeout(() => {
            sendNativeNotification("App Active ⚡", "We will notify you for workouts & health checks.");
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const sendNativeNotification = (title, body) => {
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification(title, { body });
        } else {
            // Fallback to in-app toast for demo if permission denied
            setToastMsg(`${title}: ${body}`);
        }
    };

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
            {currentPage === 'chat' && <AIChat onBack={() => setCurrentPage('dashboard')} />}
        </div>
    )
}

export default App
