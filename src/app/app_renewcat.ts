import { useEffect } from 'react';
import Purchases, {LOG_LEVEL} from 'react-native-purchases';
import {Platform} from "react-native";

export default function AppRenewcat() {
    useEffect(() => {
            Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

            if (Platform.OS === 'ios') {
                Purchases.configure({apiKey: ""});
            } else if (Platform.OS === 'android') {
                Purchases.configure({apiKey: "goog_DmqfwyVWkfNfqhAJMBMrJZVVbaZ"});
            }
        }, []
    )
}
