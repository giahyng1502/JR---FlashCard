import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeType } from '../types';
import {
    lightTheme,
    purpleDarkTheme,
    purpleLightTheme,
    themes,
} from '../theme/themes';
import { getRealm } from '../realm';
import { ThemeSetting } from '../realm/schema/theme_schema.ts';
import {changeTheme} from "../realm/service/theme_service.ts";

type ThemeContextType = {
    theme: ThemeType;
    setThemeId: (id: string) => void;
    themeId: string;
};

const THEME_ID_KEY = 'app_theme';

export const Theme_context = createContext<ThemeContextType>({
    theme: lightTheme,
    setThemeId: () => {},
    themeId: 'light',
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme();
    const [themeId, setThemeIdState] = useState<string>('light');

    useEffect(() => {
        const openAndLoadTheme = async () => {
            try {
                const realm = getRealm();
                const stored = realm.objectForPrimaryKey<ThemeSetting>('ThemeSetting', THEME_ID_KEY);
                if (stored) {
                    setThemeIdState(stored.value);
                }
            } catch (e) {
                console.warn('Failed to open Realm or load theme:', e);
            }
        };

        openAndLoadTheme();

    }, []);

    const setThemeId = (id: string) => {
        setThemeIdState(id);
        changeTheme(id)
    };

    const theme = (() => {
        if (themeId === 'purple') {
            return systemScheme === 'dark' ? purpleDarkTheme : purpleLightTheme;
        }
        return themes.find((t) => t.id === themeId) || lightTheme;
    })();

    return (
        <Theme_context.Provider value={{ theme, setThemeId, themeId }}>
            {children}
        </Theme_context.Provider>
    );
};

