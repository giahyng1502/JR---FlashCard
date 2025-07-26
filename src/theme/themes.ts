import {ThemeType} from "../types";

export const darkTheme: ThemeType = {
    id: 'dark',
    name: 'Dark',
    mode: 'dark',
    colors: {
        background: '#121212',
        primary: '#bb86fc',
        secondary: '#1e1e1e',
        textPrimary: '#ffffff',
        textSecondary: '#cccccc',
        borderColor: '#333333',
        searchPrimary: '#1a1a1a',
        blockColorPrimary: '#1f1f1f',
        blockColorSecondary: '#292929',
    },
};

export const purpleLightTheme: ThemeType = {
    id: 'purpleLight',
    name: 'Purple Light',
    mode: 'light',
    colors: {
        background: '#f8f0fc',
        primary: '#9c27b0',
        secondary: '#f3e5f5',
        textPrimary: '#2d0d39',
        textSecondary: '#6a1b9a',
        borderColor: '#d1c4e9',
        searchPrimary: '#ede7f6',
        blockColorPrimary: '#f3e5f5',
        blockColorSecondary: '#e1bee7',
    },
};
export const lightTheme: ThemeType = {
    id: 'light',
    name: 'Light',
    mode: 'light',
    colors: {
        background: '#ffffff',
        primary: '#6200ee',
        secondary: '#f5f5f5',
        textPrimary: '#000000',
        textSecondary: '#555555',
        borderColor: '#ddd',
        searchPrimary: '#eeeeee',
        blockColorPrimary: '#ffffff',
        blockColorSecondary: '#f0f0f0',
    },
};

export const purpleDarkTheme: ThemeType = {
    id: 'purpleDark',
    name: 'Purple Dark',
    mode: 'dark',
    colors: {
        background: '#121212',
        primary: '#9c27b0',
        secondary: '#1f1f1f',
        textPrimary: '#ffffff',
        textSecondary: '#cccccc',
        borderColor: '#333',
        searchPrimary: '#1d1d1d',
        blockColorPrimary: '#4a148c',
        blockColorSecondary: '#7b1fa2',
    },
};

// Danh sách tất cả theme
export const themes: ThemeType[] = [
    lightTheme,
    darkTheme,
    purpleLightTheme,
    purpleDarkTheme,
];
