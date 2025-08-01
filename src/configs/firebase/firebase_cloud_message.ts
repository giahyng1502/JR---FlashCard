import messaging from "@react-native-firebase/messaging";

export const FirebaseMessaging = {
    requestPermission: async () => {
        const authStatus = await messaging().requestPermission();
        return (
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
    },
    getToken: async () => {
        return await messaging().getToken();
    },
    onMessage: (handler: (msg: any) => void) => {
        return messaging().onMessage(handler);
    },
    onBackgroundMessage: (handler: (msg: any) => void) => {
        messaging().setBackgroundMessageHandler(handler);
    },
};
