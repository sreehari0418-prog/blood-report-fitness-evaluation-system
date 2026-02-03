import React, { useState } from 'react'
import Login from './components/Login'
import { api } from './utils/api'
import ProfileSetup from './components/ProfileSetup'
import Dashboard from './components/Dashboard'
import BMICalculator from './components/BMI/BMICalculator'
import BloodEvaluation from './components/Blood/BloodEvaluation'
import FitnessHelper from './components/Fitness/FitnessHelper'
import HomeWorkout from './components/Fitness/HomeWorkout'
import WeightProgress from './components/WeightProgress'
import AIChat from './components/Chat/AIChat'
import Toast from './components/Toast'
import SpecializedDiet from './components/Diet/SpecializedDiet'
import { setupNotifications, schedule3MonthReminder, addNotificationListeners } from './utils/notifications'

function App() {
    // Check for existing session immediately to avoid flash of login screen
    const savedUser = localStorage.getItem('user_profile');
    const [currentPage, setCurrentPage] = useState(savedUser ? 'dashboard' : 'login');
    const [currentData, setCurrentData] = useState(null); // Data passed between pages
    const [user, setUser] = useState(null); // Auth object
    const [userData, setUserData] = useState(savedUser ? JSON.parse(savedUser) : null);

    // Notification State
    const [toastMsg, setToastMsg] = useState(null);

    React.useEffect(() => {
        // Setup Notifications System
        const initNotifications = async () => {
            const permissionGranted = await setupNotifications();
            if (permissionGranted) {
                console.log('Notifications enabled');

                // Add notification listeners
                addNotificationListeners();

                // Schedule 3-month reminder (or reschedule if already exists)
                const nextCheckupDate = await schedule3MonthReminder();
                if (nextCheckupDate) {
                    console.log('Next blood checkup reminder:', nextCheckupDate.toLocaleDateString());
                }
            }
        };

        initNotifications();

        // Firebase Auth State Listener - replaces manual session check
        const unsubscribe = api.onAuthStateChange(async (firebaseUser) => {
            if (firebaseUser) {
                // User is logged in
                console.log('User logged in:', firebaseUser.email);
                setUser({ email: firebaseUser.email, id: firebaseUser.uid });

                // Load profile from Firestore
                try {
                    const response = await api.getProfile();
                    if (response.success && response.profile) {
                        setUserData(response.profile);
                        setCurrentPage('dashboard');
                    } else {
                        // No profile found, go to setup
                        setCurrentPage('profile_setup');
                    }
                } catch (error) {
                    console.error('Error loading profile:', error);
                    setCurrentPage('profile_setup');
                }
            } else {
                // User is logged out
                console.log('User logged out');
                setUser(null);
                setUserData(null);
                setCurrentPage('login');
            }
        });

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

        return () => {
            clearInterval(interval);
            unsubscribe(); // Clean up auth listener
        };
    }, []);

    const handleLogin = async (userAuth, isSignup = false) => {
        setUser(userAuth);

        if (isSignup) {
            // New user registration -> Force profile setup
            setCurrentPage('profile_setup');
            return;
        }

        try {
            // Logged in user -> Fetch profile
            const response = await api.getProfile();
            if (response.success && response.profile) {
                console.log("Profile found:", response.profile);
                setUserData(response.profile);
                localStorage.setItem('user_profile', JSON.stringify(response.profile));
                setCurrentPage('dashboard');
            } else {
                // Should not happen for login unless DB is empty
                console.log("No profile found, redirecting to setup");
                setCurrentPage('profile_setup');
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            // Fallback: Only use cached profile if it matches the current user
            const cachedProfile = localStorage.getItem('user_profile');
            if (cachedProfile) {
                const parsed = JSON.parse(cachedProfile);
                // Check if email matches (or if cache has no email, assume risk or force setup. 
                // With recent fix, email is present. If missing, it's risky but better to reset).

                if (parsed.email === userAuth.email) {
                    setUserData(parsed);
                    setCurrentPage('dashboard');
                } else {
                    // Cache mismatch or stale data
                    console.log("Cached profile does not match current user. Redirecting to setup.");
                    setCurrentPage('profile_setup');
                }
            } else {
                setCurrentPage('profile_setup');
            }
        }
    };

    const handleProfileComplete = (data) => {
        // Merge with auth user data to ensure email is preserved for unique storage keys
        const completeData = { ...data, email: user?.email };
        setUserData(completeData);
        localStorage.setItem('user_profile', JSON.stringify(completeData));
        setCurrentPage('dashboard');
    };

    const handleNavigate = (pageId, data = null) => {
        setCurrentData(data);
        setCurrentPage(pageId);
    };

    const handleLogout = async () => {
        await api.logout();
        // Firebase auth listener will handle state reset automatically
    };

    return (
        <div className="app-container">
            {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}

            {currentPage === 'login' && <Login onLogin={handleLogin} />}
            {currentPage === 'profile_setup' && <ProfileSetup onComplete={handleProfileComplete} />}
            {currentPage === 'dashboard' && <Dashboard userName={userData?.name} userProfile={userData} onNavigate={handleNavigate} onLogout={handleLogout} />}

            {currentPage === 'bmi' && <BMICalculator userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'blood' && <BloodEvaluation user={userData} onBack={() => setCurrentPage('dashboard')} initialViewReport={currentData} />}
            {currentPage === 'fitness' && <FitnessHelper userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'homeworkout' && <HomeWorkout onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'weightprogress' && <WeightProgress userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'chat' && <AIChat userProfile={userData} onBack={() => setCurrentPage('dashboard')} />}
            {currentPage === 'diet' && <SpecializedDiet user={userData} onBack={() => setCurrentPage('dashboard')} />}
        </div>
    )
}

export default App
