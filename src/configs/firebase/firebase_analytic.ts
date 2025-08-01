// src/utils/firebase.ts
import  {getAnalytics, logEvent, logScreenView} from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import {crash, getCrashlytics, log, recordError} from "@react-native-firebase/crashlytics";

/**
 * Initialize custom firebase services
 */

const annalytics = getAnalytics()

export const FirebaseAnalytics = {
    logScreen: async (screenName: string) => {
        await logScreenView(annalytics,{
            screen_name: screenName,
            screen_class: screenName,
        });
    },
    logEvent: async (eventName: string, params?: Record<string, any>) => {
        await logEvent(annalytics,eventName,params);
    },
};



