import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconSetting from '../../assets/svgs/ic_setting.tsx';
import VocabularyScreen from './vocabulary.tsx';
import KanjiScreen from './kanji.tsx';
import GrammarScreen from './grammar.tsx';
import StudyScreen from './study.tsx';
import SettingScreen from './setting.tsx';
import {FONTS, PADDING, RADIUS, width} from '../../styles';
import {useTranslation} from 'react-i18next';
import IconVocabulary from '../../assets/svgs/ic_vocabulary.tsx';
import IconGrammar from '../../assets/svgs/ic_grammar.tsx';
import IconStudy from '../../assets/svgs/icon_study.tsx';
import IconKanji from '../../assets/svgs/ic_kanji.tsx';
import {useAppTheme} from '../../hooks';
import {BottomStackParamList} from '../param_type';


const Tab = createBottomTabNavigator<BottomStackParamList>();

const BottomNavigation = () => {
    const bottomNavHeight = 80;
    const {theme} = useAppTheme();
    const {t} = useTranslation();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const color = focused ? theme.activeColor : theme.textSecondary;
                    let IconComponent;
                    switch (route.name) {
                        case 'vocabulary':
                            IconComponent = IconVocabulary;
                            break;
                        case 'kanji':
                            IconComponent = IconKanji;
                            break;
                        case 'grammar':
                            IconComponent = IconGrammar;
                            break;
                        case 'study':
                            IconComponent = IconStudy;
                            break;
                        case 'setting':
                            IconComponent = IconSetting;
                            break;
                        default:
                            return null;
                    }

                    return (
                        <View style={{
                            width : width / 5,
                            justifyContent : 'center',
                            alignItems : 'center',
                        }}>
                        <View
                            style={[
                                styles.iconWrapper,
                                focused && {
                                    backgroundColor: theme.primary,
                                },
                            ]}>
                            <IconComponent color={color} />
                        </View>

                            <Text
                                style={{
                                    fontSize: 11,
                                    color: color,
                                    marginTop: 4,
                                    fontFamily : FONTS.SEMIBOLD,
                                }}>
                                {t(`bottom_navigation.${route.name}`)}
                            </Text>
                        </View>
                    );
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: bottomNavHeight,
                    paddingTop: 20,
                    backgroundColor: theme.background,
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
        padding: PADDING.XS,
        borderRadius: RADIUS.ROUND,
        width : 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BottomNavigation;
