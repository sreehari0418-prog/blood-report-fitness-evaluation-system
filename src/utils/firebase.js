// Firebase Configuration and Initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase project configuration
// TODO: User needs to replace these with actual Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyCRNLyBkav2ZbMNj9MakHKDdSzeabgFSTI",
    authDomain: "blood-fitness-app.firebaseapp.com",
    projectId: "blood-fitness-app",
    storageBucket: "blood-fitness-app.firebasestorage.app",
    messagingSenderId: "142443201042",
    appId: "1:142443201042:web:a962a38c46816d632b8ecb",
    measurementId: "G-QW6N5M6DKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
