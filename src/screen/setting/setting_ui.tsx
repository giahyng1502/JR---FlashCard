import React from 'react';
import {
    Linking,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import HeaderComponent from '../../components/ui/header_component.tsx';
import { useAppTheme } from '../../hooks';
import { FONT_SIZE, MARGIN, PADDING } from '../../styles';
import NotificationComponent from '../../components/ui/notification_component.tsx';
import CheckBoxComponent from '../../components/ui/checkbox_component.tsx';
import useSetting from './setting_hook.ts';
import ThemeSelector from './theme_selected.tsx';
import TextComponent from '../../components/ui/text_component.tsx';
import SwitchThemeToggle from '../../components/ui/switch_theme.tsx';
import Container from '../../components/ui/container.tsx';
import SwitchLanguage from '../../components/ui/switch_language.tsx';
import BannerAdComponent from '../../components/ads/banner_ads.tsx';
import { BannerAdSize } from 'react-native-google-mobile-ads';

const CHECKBOX_OPTIONS = [
    { key: 'isVI', labelKey: 'setting.vi' },
    { key: 'isEnglish', labelKey: 'setting.en' },
    { key: 'isRomaji', labelKey: 'setting.romaji' },
] as const;

const SettingUi = () => {
    const { t } = useTranslation();
    const { theme, setThemeId } = useAppTheme();
    const { checkbox, setCheckbox } = useSetting();

    const termsOfService = 'https://devpull.top/nihongo_mate/terms_of_service';
    const privacyPolicy = 'https://devpull.top/nihongo_mate/privacy-policy';

    const handleOpenWeb = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) await Linking.openURL(url);
        else console.warn(`Can't open URL: ${url}`);
    };

    return (
        <Container>
            <HeaderComponent title={"Settings"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextComponent size={FONT_SIZE.LG} bold>
                    {t('setting.notification')}
                </TextComponent>

                <View style={{ height: PADDING.SM }} />
                <NotificationComponent
                    isVI={checkbox.isVI}
                    isEnglish={checkbox.isEnglish}
                    isRomaji={checkbox.isRomaji}
                />

                {CHECKBOX_OPTIONS.map((option) => (
                    <CheckBoxComponent
                        key={option.key}
                        label={t(option.labelKey)}
                        checked={checkbox[option.key]}
                        onChange={(val) =>
                            setCheckbox((prev) => ({ ...prev, [option.key]: val }))
                        }
                    />
                ))}

                <BannerAdComponent size={BannerAdSize.MEDIUM_RECTANGLE} />

                <TextComponent
                    size={FONT_SIZE.LG}
                    style={{ marginVertical: MARGIN.SM }}
                    bold
                >
                    {t('setting.color')}
                </TextComponent>
                <ThemeSelector onSelectTheme={setThemeId} />

                <TextComponent
                    size={FONT_SIZE.LG}
                    style={{ marginVertical: MARGIN.SM }}
                    bold
                >
                    {t('setting.theme')}
                </TextComponent>
                <SwitchThemeToggle />

                <TextComponent
                    size={FONT_SIZE.LG}
                    style={{ marginVertical: MARGIN.SM }}
                    bold
                >
                    {t('setting.language')}
                </TextComponent>
                <SwitchLanguage />

                <View style={{ height: PADDING.SM }} />

                <TouchableOpacity style={styles.textBtn}>
                    <TextComponent bold onPress={() => handleOpenWeb(termsOfService)}>
                        {t('setting.terms')}
                    </TextComponent>
                </TouchableOpacity>
                <View style={{ backgroundColor: theme.borderColor, height: 2 }} />

                <TouchableOpacity
                    style={styles.textBtn}
                    onPress={() => handleOpenWeb(privacyPolicy)}
                >
                    <TextComponent bold>{t('setting.privacy')}</TextComponent>
                </TouchableOpacity>
                <View style={{ backgroundColor: theme.borderColor, height: 2 }} />

                <TouchableOpacity style={styles.textBtn}>
                    <TextComponent bold>{t('setting.contact')}</TextComponent>
                </TouchableOpacity>

                <View style={{ height: PADDING.SM }} />
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    textBtn: {
        marginVertical: MARGIN.MD,
    },
});

export default SettingUi;
