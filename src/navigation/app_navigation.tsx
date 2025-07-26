import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {AppStackParamList} from "./types.ts";
import BottomNavigation from "./tab/bottom_navigation.tsx";

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: ({current, layouts}) => {
                const progress = current.progress;

                return {
                    cardStyle: {
                        transform: [
                            {
                                translateX: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [layouts.screen.width, 0], // trượt từ phải sang
                                }),
                            },
                        ],
                    },
                };
            },
        }}>
        <AppStack.Screen name="main" component={BottomNavigation} />
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
