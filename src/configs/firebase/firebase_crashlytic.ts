import {crash, getCrashlytics, log, recordError} from "@react-native-firebase/crashlytics";
const crashlytics = getCrashlytics();

export const FirebaseCrashlytics = {
    log: (msg: string) => {
        log(crashlytics,msg);
    },
    recordError: (error: Error) => {
        recordError(crashlytics,error);
    },
    crashApp: () => {
        crash(crashlytics);
    },
};


