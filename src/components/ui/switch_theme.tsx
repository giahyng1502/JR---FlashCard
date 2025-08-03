import React, { useEffect, useRef } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    LayoutChangeEvent,
} from 'react-native';
import { useAppTheme } from '../../hooks';
import { ThemeMode } from '../../context/theme_context.tsx';
import TextComponent from './text_component.tsx';
import tinycolor from 'tinycolor2';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnUI,
} from 'react-native-reanimated';
import {useTranslation} from "react-i18next";

const options = ['light', 'dark', 'system'] as const;

const SwitchThemeToggle = () => {
    const { themeMode, setThemeMode, theme } = useAppTheme();
    const activeIndex = options.findIndex((o) => o.toLowerCase() === themeMode);
    const backgroundColor = tinycolor(theme.background).darken(15).toString();
    const {t} = useTranslation();
    const optionWidth = useRef(0);
    const translateX = useSharedValue(0);

    useEffect(() => {
        if (optionWidth.current > 0) {
            translateX.value = withSpring(activeIndex * optionWidth.current, {
                damping: 15,
                stiffness: 120,
            });
        }
    }, [activeIndex]);

    const onLayout = (e: LayoutChangeEvent) => {
        const width = e.nativeEvent.layout.width / options.length;
        optionWidth.current = width;

        // Gán lại vị trí ban đầu
        runOnUI(() => {
            translateX.value = activeIndex * width;
        })();
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={[styles.wrapper, { backgroundColor }]} onLayout={onLayout}>
            <Animated.View
                style={[
                    styles.slider,
                    {
                        width: `${100 / options.length}%`,
                        backgroundColor: theme.primary,
                    },
                    animatedStyle,
                ]}
            />
            {options.map((opt, index) => {
                const isActive = activeIndex === index;
                return (
                    <TouchableOpacity
                        key={opt}
                        style={styles.option}
                        onPress={() => setThemeMode(opt.toLowerCase() as ThemeMode)}
                        activeOpacity={0.8}
                    >
                        <TextComponent
                            bold={isActive}
                            style={[
                                { color: theme.textPrimary },
                                isActive && { color: theme.activeColor },
                            ]}
                        >
                            {t(`setting.${opt}`)}
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
        margin: 3,
        zIndex: 0,
        elevation: 4,
    },
    option: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        zIndex: 1,
    },
});

export default SwitchThemeToggle;
