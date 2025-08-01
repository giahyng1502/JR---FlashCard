import React from 'react';
import {StyleSheet, Appearance, TouchableOpacity} from 'react-native';
import { MARGIN, PADDING } from '../../styles';
import { useAppTheme } from '../../hooks';
import { ThemeMode } from '../../context/theme_context.tsx';
import {CardColorName, cardColors} from "../../theme";
import { ScrollView } from 'react-native-gesture-handler';

export const getEffectiveThemeMode = (mode: ThemeMode): 'light' | 'dark' => {
    if (mode === 'system') {
        const colorScheme = Appearance.getColorScheme();
        return colorScheme === 'dark' ? 'dark' : 'light';
    }
    return mode;
};

const ThemeSelectorStudy = ({ onSelectTheme }: { onSelectTheme: (themeId: CardColorName) => void }) => {
    const { themeMode } = useAppTheme();
    const effectiveMode = getEffectiveThemeMode(themeMode);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
        >
            {Object.entries(cardColors).map(([key, theme]) => (
                <TouchableOpacity
                    key={key}
                    style={[
                        styles.themeBox,
                        { backgroundColor: theme[effectiveMode].backgroundColor },
                    ]}
                    onPress={() => onSelectTheme(key as CardColorName)}
                />
            ))}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: PADDING.SM,
    },
    themeBox: {
        width: 50,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        marginHorizontal: MARGIN.SM / 2,
    },
    edgeThemeBox: {
        width: 70,
        height: 40,
        borderRadius: 10,
        elevation: 6,
    },
});

export default ThemeSelectorStudy;
