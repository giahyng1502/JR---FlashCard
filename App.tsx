import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ThemeProvider} from "./src/context/theme_context.tsx";
import RootNavigator from "./src/navigation/app_navigation.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from './src/i18n';
import {useAppTheme} from "./src/hooks";
import {RealmProvider} from "@realm/react";
import {
    ExampleGrammarSchema_Study,
    GrammarSchema_study, KanjiDetailSchema_Study,
    RelatedWordSchema_Study, StudySchema,
    VocabularySchema_Study
} from "./src/realm/schema";
import {VisitCounterProvider} from "./src/context/visit_context.tsx";


function App() {
    const systemScheme = useColorScheme();
    const { themeMode } = useAppTheme();

    const isDark = themeMode === 'dark' || (themeMode === 'system' && systemScheme === 'dark');
    const barStyle = isDark ? 'light-content' : 'dark-content';


    return (

            <GestureHandlerRootView style={styles.container}>
                <RealmProvider
                    schema={[
                        ExampleGrammarSchema_Study,
                        VocabularySchema_Study,
                        GrammarSchema_study,
                        RelatedWordSchema_Study,
                        KanjiDetailSchema_Study,
                        StudySchema
                    ]}
                    schemaVersion={1}
                >
                <ThemeProvider>
                    <I18nextProvider i18n={i18n}>
                        <VisitCounterProvider>
                            <StatusBar barStyle={barStyle} />
                            <RootNavigator />
                        </VisitCounterProvider>
                    </I18nextProvider>
                </ThemeProvider>
                </RealmProvider>

            </GestureHandlerRootView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
