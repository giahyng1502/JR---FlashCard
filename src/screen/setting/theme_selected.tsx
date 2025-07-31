import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, Appearance } from 'react-native';
import { themes } from '../../theme/themes.ts';
import { MARGIN, PADDING } from '../../styles';
import { useAppTheme } from '../../hooks';
import { ThemeMode } from '../../context/theme_context.tsx';

const getEffectiveThemeMode = (mode: ThemeMode): 'light' | 'dark' => {
    if (mode === 'system') {
        const colorScheme = Appearance.getColorScheme();
        return colorScheme === 'dark' ? 'dark' : 'light';
    }
    return mode;
};

const ThemeSelector = ({ onSelectTheme }: { onSelectTheme: (themeId: string) => void }) => {
    const { themeMode } = useAppTheme();
    const effectiveMode = getEffectiveThemeMode(themeMode);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={{ paddingHorizontal: 12 }}
        >
            {Object.entries(themes).map(([key, theme]) => (
                <TouchableOpacity
                    key={key}
                    style={[
                        styles.themeBox,
                        { backgroundColor: theme[effectiveMode].primary },
                    ]}
                    onPress={() => onSelectTheme(key)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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

export default ThemeSelector;
