// Firestore Database API
// Handles all database operations with Firebase Firestore

import {
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    updateDoc,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';

export const firestoreAPI = {
    // ============================================================================
    // USER PROFILE OPERATIONS
    // ============================================================================

    /**
     * Save or update user profile
     * @param {string} userId - Firebase Auth UID
     * @param {object} profileData - Profile information
     */
    async saveProfile(userId, profileData) {
        try {
            const userRef = doc(db, 'users', userId);
            await setDoc(userRef, {
                ...profileData,
                updatedAt: serverTimestamp()
            }, { merge: true });

            return { success: true };
        } catch (error) {
            console.error('Error saving profile:', error);
            throw error;
        }
    },

    /**
     * Get user profile
     * @param {string} userId - Firebase Auth UID
     */
    async getProfile(userId) {
        try {
            const userRef = doc(db, 'users', userId);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                return {
                    success: true,
                    profile: { id: userSnap.id, ...userSnap.data() }
                };
            } else {
                return { success: false, error: 'Profile not found' };
            }
        } catch (error) {
            console.error('Error getting profile:', error);
            throw error;
        }
    },

    /**
     * Update specific profile fields
     * @param {string} userId - Firebase Auth UID
     * @param {object} updates - Fields to update
     */
    async updateProfile(userId, updates) {
        try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, {
                ...updates,
                updatedAt: serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    },

    // ============================================================================
    // BLOOD REPORT OPERATIONS
    // ============================================================================

    /**
     * Save blood report with extracted values
     * @param {string} userId - Firebase Auth UID
     * @param {object} reportData - Blood test values
     */
    async saveBloodReport(userId, reportData) {
        try {
            const reportsRef = collection(db, `users/${userId}/bloodReports`);
            const docRef = await addDoc(reportsRef, {
                ...reportData,
                uploadDate: serverTimestamp()
            });

            return { success: true, reportId: docRef.id };
        } catch (error) {
            console.error('Error saving blood report:', error);
            throw error;
        }
    },

    /**
     * Get all blood reports for a user
     * @param {string} userId - Firebase Auth UID
     */
    async getBloodReports(userId) {
        try {
            const reportsRef = collection(db, `users/${userId}/bloodReports`);
            const q = query(reportsRef, orderBy('uploadDate', 'desc'));
            const querySnapshot = await getDocs(q);

            const reports = [];
            querySnapshot.forEach((doc) => {
                reports.push({ id: doc.id, ...doc.data() });
            });

            return { success: true, reports };
        } catch (error) {
            console.error('Error getting blood reports:', error);
            throw error;
        }
    },

    // ============================================================================
    // DISEASE PREDICTION OPERATIONS
    // ============================================================================

    /**
     * Save ML disease prediction
     * @param {string} userId - Firebase Auth UID
     * @param {string} reportId - Blood report ID
     * @param {object} predictions - ML prediction results
     */
    async savePrediction(userId, reportId, predictions) {
        try {
            const predictionRef = doc(db, `users/${userId}/bloodReports/${reportId}/predictions`, 'latest');
            await setDoc(predictionRef, {
                ...predictions,
                predictionDate: serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error saving prediction:', error);
            throw error;
        }
    },

    /**
     * Get prediction history for a user
     * @param {string} userId - Firebase Auth UID
     */
    async getPredictionHistory(userId) {
        try {
            const reportsRef = collection(db, `users/${userId}/bloodReports`);
            const querySnapshot = await getDocs(reportsRef);

            const predictions = [];
            for (const reportDoc of querySnapshot.docs) {
                const predictionRef = collection(db, `users/${userId}/bloodReports/${reportDoc.id}/predictions`);
                const predSnapshot = await getDocs(predictionRef);

                predSnapshot.forEach(doc => {
                    predictions.push({
                        reportId: reportDoc.id,
                        ...doc.data()
                    });
                });
            }

            return { success: true, predictions };
        } catch (error) {
            console.error('Error getting predictions:', error);
            throw error;
        }
    },

    // ============================================================================
    // WEIGHT TRACKING OPERATIONS
    // ============================================================================

    /**
     * Save weight log entry
     * @param {string} userId - Firebase Auth UID
     * @param {object} weightData - Weight measurement data
     */
    async saveWeightLog(userId, weightData) {
        try {
            const weightRef = collection(db, `users/${userId}/weightLogs`);
            await addDoc(weightRef, {
                ...weightData,
                timestamp: serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Error saving weight log:', error);
            throw error;
        }
    },

    /**
     * Get weight logs for a user
     * @param {string} userId - Firebase Auth UID
     */
    async getWeightLogs(userId) {
        try {
            const weightRef = collection(db, `users/${userId}/weightLogs`);
            const q = query(weightRef, orderBy('timestamp', 'asc'));
            const querySnapshot = await getDocs(q);

            const logs = [];
            querySnapshot.forEach((doc) => {
                logs.push({ id: doc.id, ...doc.data() });
            });

            return { success: true, logs };
        } catch (error) {
            console.error('Error getting weight logs:', error);
            throw error;
        }
    }
};

export default firestoreAPI;
