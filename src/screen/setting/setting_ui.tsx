import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import HeaderComponent from '../../components/ui/header_component.tsx';
import {useAppTheme} from '../../hooks';
import {FONT_SIZE, MARGIN, PADDING} from '../../styles';
import NotificationComponent from '../../components/ui/notification_component.tsx';
import CheckBoxComponent from '../../components/ui/checkbox_component.tsx';
import useSetting from './setting_hook.ts';
import ThemeSelector from './theme_selected.tsx';
import TextComponent from '../../components/ui/text_component.tsx';
import SwitchThemeToggle from '../../components/ui/switch_theme.tsx';
import Container from "../../components/ui/container.tsx";
import SwitchLanguage from "../../components/ui/switch_language.tsx";
import BannerAdComponent from "../../components/ads/banner_ads.tsx";
import {BannerAdSize} from "react-native-google-mobile-ads";
import InterstitialAdComponent from "../../components/ads/Interstitia_ads.tsx";

const CHECKBOX_OPTIONS = [
    { key: 'isVI', label: 'Việt Nam' },
    { key: 'isEnglish', label: 'English' },
    { key: 'isRomaji', label: 'Romaji' },
] as const;


const SettingUi = () => {
    const { theme,setThemeId } = useAppTheme();
    const { checkbox, setCheckbox } = useSetting();
    return (
        <Container>
            <HeaderComponent title={'Setting'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextComponent size={FONT_SIZE.LG} bold>Notification</TextComponent>
                <View style={{height : PADDING.SM}}/>
                <NotificationComponent
                    isVI={checkbox.isVI}
                    isEnglish={checkbox.isEnglish}
                    isRomaji={checkbox.isRomaji}
                />
                {CHECKBOX_OPTIONS.map((option) => (
                    <CheckBoxComponent
                        key={option.key}
                        label={option.label}
                        checked={checkbox[option.key]}
                        onChange={(val) =>
                            setCheckbox((prev) => ({ ...prev, [option.key]: val }))
                        }
                    />
                ))}
                <BannerAdComponent size={BannerAdSize.MEDIUM_RECTANGLE}/>
                <TextComponent size={FONT_SIZE.LG} style={{marginVertical : MARGIN.SM}} bold>Colors</TextComponent>
                <ThemeSelector onSelectTheme={setThemeId}/>
                <TextComponent size={FONT_SIZE.LG} style={{marginVertical : MARGIN.SM}} bold>Theme</TextComponent>


                <SwitchThemeToggle/>

                <TextComponent size={FONT_SIZE.LG} style={{marginVertical : MARGIN.SM}} bold>Language</TextComponent>
                <SwitchLanguage/>

                <View style={{height : PADDING.SM}}/>

                <TouchableOpacity style={styles.textBtn}>
                    <TextComponent bold>Terms of use</TextComponent>
                </TouchableOpacity>
                <View style={{
                    backgroundColor : theme.borderColor,
                    height : 2,
                }}/>
                <TouchableOpacity style={styles.textBtn}>
                    <TextComponent bold>Privacy Policy</TextComponent>
                </TouchableOpacity>
                <View style={{
                    backgroundColor : theme.borderColor,
                    height : 2,
                }}/>
                <TouchableOpacity style={styles.textBtn}>
                    <TextComponent bold>Contact us</TextComponent>
                </TouchableOpacity>
                <View style={{height : PADDING.SM}}/>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.SM,
    },
    textBtn : {
        marginVertical : MARGIN.MD,
    },
});

export default SettingUi;

