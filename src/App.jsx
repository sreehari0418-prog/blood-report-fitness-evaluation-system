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
    const savedUserParsed = savedUser ? JSON.parse(savedUser) : null;
    // Use 'loading' state during initial auth check to avoid flashing wrong page
    const [currentPage, setCurrentPage] = useState(savedUser ? 'dashboard' : 'loading');
    const [currentData, setCurrentData] = useState(null); // Data passed between pages
    const [user, setUser] = useState(null); // Auth object
    const [userData, setUserData] = useState(savedUserParsed);

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
                const authUser = { email: firebaseUser.email, id: firebaseUser.uid };
                setUser(authUser);

                // Check if we already have a valid matching cached profile
                // to avoid flashing the profile setup page on refresh
                const cached = localStorage.getItem('user_profile');
                if (cached) {
                    try {
                        const parsed = JSON.parse(cached);
                        if (parsed.email === firebaseUser.email) {
                            // Valid cache hit — use it immediately and avoid profile_setup flash
                            setUserData(parsed);
                            setCurrentPage('dashboard');
                            // Silently refresh from Firestore in background
                            api.getProfile().then(response => {
                                if (response.success && response.profile) {
                                    setUserData(response.profile);
                                    localStorage.setItem('user_profile', JSON.stringify(response.profile));
                                }
                            }).catch(() => { /* keep cached data if network fails */ });
                            return;
                        }
                    } catch (_) { /* invalid cache, continue */ }
                }

                // No valid cache — load profile from Firestore
                try {
                    const response = await api.getProfile();
                    if (response.success && response.profile) {
                        setUserData(response.profile);
                        localStorage.setItem('user_profile', JSON.stringify(response.profile));
                        setCurrentPage('dashboard');
                    } else {
                        // Genuinely new user — go to profile setup
                        setCurrentPage('profile_setup');
                    }
                } catch (error) {
                    console.error('Error loading profile:', error);
                    // Network error but user is authenticated — go to setup only if no cache
                    setCurrentPage('profile_setup');
                }
            } else {
                // User is logged out
                console.log('User logged out');
                setUser(null);
                setUserData(null);
                localStorage.removeItem('user_profile');
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

            {currentPage === 'loading' && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--color-background, #f8fafc)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ width: 48, height: 48, border: '4px solid #e2e8f0', borderTop: '4px solid #3b82f6', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 1rem' }} />
                        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Loading...</p>
                    </div>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            )}
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
