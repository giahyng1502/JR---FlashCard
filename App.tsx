import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ThemeProvider} from "./src/context/theme_context.tsx";
import RootNavigator from "./src/navigation/app_navigation.tsx";
import AppStateChange from "./src/app/app_state_change.tsx";

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator/>
        <AppStateChange/>
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
