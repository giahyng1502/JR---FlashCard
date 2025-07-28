/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppWrapper from "./src/app/app_wapper";

AppRegistry.registerComponent(appName, () => AppWrapper);
