/**
 * @format
 */
import 'react-native-get-random-values';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppWrapper from "./src/app/app_wapper";
import {registerBackgroundNotificationHandler} from "./src/configs/firebase/notifee";
import mobileAds from "react-native-google-mobile-ads/src";

AppRegistry.registerComponent(appName, () => AppWrapper);
//notification
registerBackgroundNotificationHandler();

mobileAds()
    .initialize()
    .then(adapterStatuses => {
        console.log('AdMob initialized');
    });

if (!__DEV__) {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.info = () => {};
    console.debug = () => {};
}
