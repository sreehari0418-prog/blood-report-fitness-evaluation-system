// Firebase Authentication API
// Replaces Flask backend with Firebase Auth + Firestore

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from './firebase';
import { firestoreAPI } from './firestoreAPI';

export const api = {
    /**
     * Register new user with Firebase Auth
     * @param {string} email - User email
     * @param {string} password - User password
     */
    async register(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Create default profile in Firestore
            await firestoreAPI.saveProfile(user.uid, {
                email: user.email,
                name: email.split('@')[0],
                createdAt: new Date()
            });

            return {
                success: true,
                user: {
                    email: user.email,
                    id: user.uid
                }
            };
        } catch (error) {
            console.error('Registration error:', error);
            return {
                success: false,
                error: error.message || 'Registration failed'
            };
        }
    },

    /**
     * Login existing user with Firebase Auth
     * @param {string} email - User email
     * @param {string} password - User password
     */
    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            return {
                success: true,
                user: {
                    email: user.email,
                    id: user.uid
                }
            };
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                error: error.code === 'auth/invalid-credential'
                    ? 'Invalid email or password'
                    : error.message
            };
        }
    },

    /**
     * Logout current user
     */
    async logout() {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Get current user's profile from Firestore
     */
    async getProfile() {
        try {
            const user = auth.currentUser;
            if (!user) {
                return { success: false, error: 'No user logged in' };
            }

            return await firestoreAPI.getProfile(user.uid);
        } catch (error) {
            console.error('Error getting profile:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Update current user's profile in Firestore
     * @param {object} profileData - Profile data to update
     */
    async updateProfile(profileData) {
        try {
            const user = auth.currentUser;
            if (!user) {
                return { success: false, error: 'No user logged in' };
            }

            await firestoreAPI.saveProfile(user.uid, profileData);
            return { success: true, message: 'Profile updated' };
        } catch (error) {
            console.error('Error updating profile:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Get current authenticated user
     */
    getCurrentUser() {
        return auth.currentUser;
    },

    /**
     * Listen to auth state changes
     * @param {function} callback - Callback function for auth state changes
     */
    async onAuthStateChange(callback) {
        return onAuthStateChanged(auth, callback);
    },

    /**
     * Password Reset Flow (Custom OTP)
     */
    async requestPasswordReset(email) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/auth/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            return await response.json();
        } catch (error) {
            return { success: false, error: 'Network error. Please try again.' };
        }
    },

    async verifyOTP(email, otp) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/auth/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
            return await response.json();
        } catch (error) {
            return { success: false, error: 'Network error. Please try again.' };
        }
    },

    async resetPassword(email, otp, password) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, password })
            });
            return await response.json();
        } catch (error) {
            return { success: false, error: 'Network error. Please try again.' };
        }
    }
};
