import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import BottomNavigation from "./tab/bottom_navigation.tsx";
import {AppStackParamList} from "./param_type";
import KanjiDetail from "../screen/kanji_detail/kanji_detail.tsx";
import GrammarDetail from "../screen/grammar_detail/grammar_detail.tsx";
import VocabularyDetail from "../screen/vocabulary_detail/vocabulary_detail.tsx";
import AddDataScreen from "../screen/add_data/add_data_screen.tsx";

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}>
        <AppStack.Screen name="main" component={BottomNavigation} />
        <AppStack.Screen name="kanji_detail" component={KanjiDetail} />
        <AppStack.Screen name="grammar_detail" component={GrammarDetail} />
        <AppStack.Screen name="vocabulary_detail" component={VocabularyDetail} />
        <AppStack.Screen name="add_data" component={AddDataScreen} />
    </AppStack.Navigator>
);



const RootNavigator: React.FC = () => {

    return (
        <NavigationContainer>
            <AppStackScreen />
        </NavigationContainer>
    );
};

export default RootNavigator;
