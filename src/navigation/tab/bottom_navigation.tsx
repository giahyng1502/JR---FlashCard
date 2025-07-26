import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTranslation} from "react-i18next";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { BottomStackParamList} from "../types.ts";
import IconSetting from "../../assets/svgs/ic_setting.tsx";
import VocabularyScreen from "./vocabulary.tsx";
import KanjiScreen from "./kanji.tsx";
import GrammarScreen from "./grammar.tsx";
import StudyScreen from "./study.tsx";
import SettingScreen from "./setting.tsx";
import {useAppTheme} from "../../hooks/useTheme.ts";
import {FONTS} from "../../styles";


const Tab = createBottomTabNavigator<BottomStackParamList>();

const BottomNavigation = () => {
    const {t} = useTranslation();
    const bottomNavHeight = 80;
    const {theme} = useAppTheme()
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let IconComponent;
                    switch (route.name) {
                        case 'vocabulary':
                            IconComponent = IconSetting;
                            break;
                        case 'kanji':
                            IconComponent = IconSetting;
                            break;
                        case 'grammar':
                            IconComponent = IconSetting;
                            break;
                        case 'study':
                            IconComponent = IconSetting;
                            break;
                        case 'setting':
                            IconComponent = IconSetting;
                            break;
                        default:
                            return null;
                    }

                    return (
                        <View
                            style={[
                                styles.iconWrapper,
                                focused && {
                                    backgroundColor: theme.colors.background,
                                    elevation: 8,
                                },
                            ]}>
                            <IconComponent color={theme.colors.blockColorSecondary} />
                            <Text
                                style={{
                                    fontSize: 10,
                                    color: focused ? theme.colors.textPrimary : theme.colors.textSecondary,
                                    marginTop: 8,
                                    fontFamily : FONTS.REGULAR
                                }}>
                                {t(`bottomNavigation.${route.name}`)}
                            </Text>
                        </View>
                    );
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: bottomNavHeight,
                    paddingTop: 20,
                    backgroundColor: theme.colors.background,
                },
            })}>
            <Tab.Screen name="vocabulary" children={() => <VocabularyScreen />} />
            <Tab.Screen name="kanji" children={() => <KanjiScreen />} />
            <Tab.Screen name="grammar" children={() => <GrammarScreen />} />
            <Tab.Screen name="study" children={() => <StudyScreen />} />
            <Tab.Screen name="setting" children={() => <SettingScreen />} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        padding: 6,
        width: 50,
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BottomNavigation;
