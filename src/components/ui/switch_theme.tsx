import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    LayoutChangeEvent,
} from 'react-native';
import {useAppTheme} from "../../hooks";
import {ThemeMode} from "../../context/theme_context.tsx";
import TextComponent from "./text_component.tsx";
import tinycolor from "tinycolor2";

const options = ['Light', 'Dark', 'System'] as const;

const SwitchThemeToggle = () => {
    const { themeMode, setThemeMode,theme } = useAppTheme();
    const activeIndex = options.findIndex(
        (o) => o.toLowerCase() === themeMode
    );
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

    return (
        <View style={[styles.wrapper,{backgroundColor}]} onLayout={onLayout}>
            <Animated.View
                style={[
                    styles.slider,
                    {
                        width: `${100 / options.length}%`,
                        transform: [{ translateX }],
                        backgroundColor : theme.primary
                    },
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
                        <TextComponent bold={isActive} style={[{color: theme.textPrimary}, isActive && {color: theme.activeColor}]}>
                            {opt}
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
        margin : 3,
        elevation : 4,
    },
    option: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        zIndex: 1,
    },
});

export default SwitchThemeToggle;
