import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeType } from '../types';
import { themes } from '../theme/themes';

type ThemeContextType = {
    theme: ThemeType['light'];
    setThemeId: (id: string) => void;
    themeId: string;
};

export const Theme_context = createContext<ThemeContextType>({
    theme: themes.default.light,
    setThemeId: () => {},
    themeId: 'default',
});

const THEME_STORAGE_KEY = 'app_theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme(); // 'light' | 'dark'
    const [themeId, setThemeIdState] = useState<string>('default');

    useEffect(() => {
        const fetchTheme = async () => {
            try {
                const savedId = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (savedId) setThemeIdState(savedId);
            } catch (err) {
                console.warn('Lỗi đọc AsyncStorage:', err);
            }
        };
        fetchTheme();
    }, []);

    const setThemeId = async (id: string) => {
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, id);
            setThemeIdState(id);
        } catch (err) {
            console.warn('Lỗi lưu AsyncStorage:', err);
        }
    };

    const selectedTheme = themes[themeId] ?? themes.default;
    const theme = systemScheme === 'dark' ? selectedTheme.dark : selectedTheme.light;

    return (
        <Theme_context.Provider value={{ theme, setThemeId, themeId }}>
            {children}
        </Theme_context.Provider>
    );
};
