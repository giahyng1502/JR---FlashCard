import React, { useEffect, useRef } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Animated,
    LayoutChangeEvent,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '../../hooks';
import TextComponent from './text_component';
import tinycolor from 'tinycolor2';

const options = ['vi', 'en'] as const;

const SwitchLanguage = () => {
    const { theme } = useAppTheme();
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;
    const activeIndex = options.findIndex(lang => lang === currentLanguage);
    const backgroundColor = tinycolor(theme.background).darken(15).toString();

    const translateX = useRef(new Animated.Value(0)).current;
    const optionWidth = useRef(0);

    useEffect(() => {
        if (optionWidth.current > 0) {
            Animated.spring(translateX, {
                toValue: activeIndex * optionWidth.current,
                useNativeDriver: true,
            }).start();
        }
    }, [activeIndex]);

    const onLayout = (e: LayoutChangeEvent) => {
        const width = e.nativeEvent.layout.width / options.length;
        optionWidth.current = width;
        translateX.setValue(activeIndex * width);
    };

    const getLabel = (lang: string) => {
        switch (lang) {
            case 'vi': return 'Tiếng Việt';
            case 'en': return 'English';
            default: return lang;
        }
    };

    return (
        <View style={[styles.wrapper, { backgroundColor }]} onLayout={onLayout}>
            <Animated.View
                style={[
                    styles.slider,
                    {
                        width: `${100 / options.length}%`,
                        transform: [{ translateX }],
                        backgroundColor: theme.primary,
                    },
                ]}
            />
            {options.map((lang, index) => {
                const isActive = activeIndex === index;
                return (
                    <TouchableOpacity
                        key={lang}
                        style={styles.option}
                        onPress={() => i18n.changeLanguage(lang)}
                        activeOpacity={0.8}
                    >
                        <TextComponent
                            bold={isActive}
                            style={[
                                { color: theme.textPrimary },
                                isActive && { color: theme.activeColor },
                            ]}
                        >
                            {getLabel(lang)}
                        </TextComponent>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    slider: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderRadius: 8,
        zIndex: 0,
        margin: 3,
        elevation: 4,
    },
    option: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        zIndex: 1,
    },
});

export default SwitchLanguage;
