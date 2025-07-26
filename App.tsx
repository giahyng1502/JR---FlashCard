import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ThemeProvider} from "./src/context/theme_context.tsx";
import RootNavigator from "./src/navigation/app_navigation.tsx";
// import AppStateChange from "./src/app/app_state_change.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from './src/i18n';

function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator/>
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
