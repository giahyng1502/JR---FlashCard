import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ThemeProvider} from "./src/context/theme_context.tsx";
import RootNavigator from "./src/navigation/app_navigation.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from './src/i18n';
import {useAppTheme} from "./src/hooks";


function App() {
    const systemScheme = useColorScheme();
    const { themeMode } = useAppTheme();

    const barStyle =
        themeMode === 'dark'
            ? 'light-content'
            : themeMode === 'light'
                ? 'dark-content'
                : systemScheme === 'dark'
                    ? 'light-content'
                    : 'dark-content';

    return (
        <GestureHandlerRootView style={styles.container}>
            <ThemeProvider>
                <I18nextProvider i18n={i18n}>
                    <StatusBar barStyle={barStyle} />
                    <RootNavigator />
                </I18nextProvider>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
