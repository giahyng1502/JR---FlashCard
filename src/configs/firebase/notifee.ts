import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

export const registerBackgroundNotificationHandler = () => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('📥 [Background] FCM:', remoteMessage);
        // @ts-ignore
        const { title, body } = remoteMessage.data;
        const channelId = await notifee.createChannel({
            id: 'JRCard',
            name: 'JR Channel',
            sound: 'default',
            importance: AndroidImportance.HIGH,
        });
        console.log('✅ Created notification channel:', channelId);

        await notifee.displayNotification({
            title: title || 'Thông báo mới',
            body: body || 'Bạn có thông báo mới.',
            android: {
                channelId,
                smallIcon: 'ic_launcher',
                pressAction: {
                    id: 'default',
                },
            },
        });
    });
};
