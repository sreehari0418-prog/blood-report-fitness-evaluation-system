import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

/**
 * Health Notification Service
 * Manages local notifications for health reminders
 */

// Request notification permissions
export const setupNotifications = async () => {
    // Only run on native platforms
    if (!Capacitor.isNativePlatform()) {
        console.log('Notifications only work on native platforms');
        return false;
    }

    try {
        const permission = await LocalNotifications.requestPermissions();
        return permission.display === 'granted';
    } catch (error) {
        console.error('Error requesting notification permissions:', error);
        return false;
    }
};

// Schedule 3-month blood checkup reminder
export const schedule3MonthReminder = async () => {
    if (!Capacitor.isNativePlatform()) return;

    try {
        // Clear any existing reminders first
        await LocalNotifications.cancel({ notifications: [{ id: 1 }] });

        // Calculate 3 months from now
        const reminderDate = new Date();
        reminderDate.setMonth(reminderDate.getMonth() + 3);

        await LocalNotifications.schedule({
            notifications: [
                {
                    title: '🩺 Blood Checkup Reminder',
                    body: 'It\'s been 3 months since your last blood test. Time for a health checkup!',
                    id: 1,
                    schedule: { at: reminderDate },
                    sound: 'default',
                    actionTypeId: '',
                    extra: {
                        type: 'blood_checkup_reminder'
                    }
                }
            ]
        });

        console.log('3-month reminder scheduled for:', reminderDate);
        return reminderDate;
    } catch (error) {
        console.error('Error scheduling 3-month reminder:', error);
        return null;
    }
};

// Show instant notification (for testing or immediate alerts)
export const showInstantNotification = async (title, body) => {
    if (!Capacitor.isNativePlatform()) return;

    try {
        await LocalNotifications.schedule({
            notifications: [
                {
                    title: title,
                    body: body,
                    id: Date.now(),
                    schedule: { at: new Date(Date.now() + 1000) }, // 1 second delay
                    sound: 'default'
                }
            ]
        });
    } catch (error) {
        console.error('Error showing instant notification:', error);
    }
};

// Schedule health alert based on report analysis
export const scheduleHealthAlert = async (condition, severity, delayMinutes = 5) => {
    if (!Capacitor.isNativePlatform()) return;

    try {
        const alertTime = new Date();
        alertTime.setMinutes(alertTime.getMinutes() + delayMinutes);

        const severityEmojis = {
            high: '⚠️',
            medium: '🟡',
            low: 'ℹ️'
        };

        await LocalNotifications.schedule({
            notifications: [
                {
                    title: `${severityEmojis[severity] || '🔔'} Health Alert`,
                    body: `${condition} detected in your blood report. Check recommendations.`,
                    id: Date.now(),
                    schedule: { at: alertTime },
                    sound: 'default',
                    extra: {
                        type: 'health_alert',
                        condition: condition,
                        severity: severity
                    }
                }
            ]
        });
    } catch (error) {
        console.error('Error scheduling health alert:', error);
    }
};

// Get pending notifications
export const getPendingNotifications = async () => {
    if (!Capacitor.isNativePlatform()) return [];

    try {
        const pending = await LocalNotifications.getPending();
        return pending.notifications;
    } catch (error) {
        console.error('Error getting pending notifications:', error);
        return [];
    }
};

// Cancel all notifications
export const cancelAllNotifications = async () => {
    if (!Capacitor.isNativePlatform()) return;

    try {
        const pending = await LocalNotifications.getPending();
        await LocalNotifications.cancel({ notifications: pending.notifications });
    } catch (error) {
        console.error('Error canceling notifications:', error);
    }
};

// Listen for notification click
export const addNotificationListeners = () => {
    if (!Capacitor.isNativePlatform()) return;

    LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
        console.log('Notification clicked:', notification);
        // You can add custom navigation here based on notification.extra
    });
};
