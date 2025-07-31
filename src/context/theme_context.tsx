import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeType } from '../types';
import { themes } from '../theme/themes';

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextType = {
    theme: ThemeType['light'];
    themeId: string;
    themeMode: ThemeMode;
    setThemeId: (id: string) => void;
    setThemeMode: (mode: ThemeMode) => void;
};

export const Theme_context = createContext<ThemeContextType>({
    theme: themes.default.light,
    themeId: 'default',
    themeMode: 'system',
    setThemeId: () => {},
    setThemeMode: () => {}
});

const THEME_ID_KEY = 'theme_id';
const THEME_MODE_KEY = 'theme_mode';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemColorScheme = useColorScheme(); // 'light' | 'dark'
    const [themeId, setThemeIdState] = useState<string>('default');
    const [themeMode, setThemeModeState] = useState<ThemeMode>('system');

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const savedId = await AsyncStorage.getItem(THEME_ID_KEY);
                const savedMode = await AsyncStorage.getItem(THEME_MODE_KEY);
                if (savedId) setThemeIdState(savedId);
                if (savedMode === 'light' || savedMode === 'dark' || savedMode === 'system') {
                    setThemeModeState(savedMode);
                }
            } catch (err) {
                console.warn('Lỗi khi load theme:', err);
            }
        };
        loadSettings();
    }, []);

    const setThemeId = async (id: string) => {
        try {
            setThemeIdState(id);
            await AsyncStorage.setItem(THEME_ID_KEY, id);
        } catch (err) {
            console.warn('Lỗi lưu themeId:', err);
        }
    };

    const setThemeMode = async (mode: ThemeMode) => {
        try {
            setThemeModeState(mode);
            await AsyncStorage.setItem(THEME_MODE_KEY, mode);
        } catch (err) {
            console.warn('Lỗi lưu themeMode:', err);
        }
    };

    const selectedTheme = themes[themeId] ?? themes.default;

    const theme =
        themeMode === 'system'
            ? systemColorScheme === 'dark'
                ? selectedTheme.dark
                : selectedTheme.light
            : themeMode === 'dark'
                ? selectedTheme.dark
                : selectedTheme.light;

    return (
        <Theme_context.Provider
            value={{
                theme,
                themeId,
                themeMode,
                setThemeId,
                setThemeMode,
            }}
        >
            {children}
        </Theme_context.Provider>
    );
};
