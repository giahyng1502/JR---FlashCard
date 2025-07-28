import {ThemeType} from "../types";


export const defaultTheme: ThemeType = {
    id: "default",
    name: "Default Theme",
    light: {
        background: "#ffffff",
        primary: "#DAEFFF",
        secondary: "#f5f5f5",
        textPrimary: "#000000",
        textSecondary: "#555555",
        activeColor : "#0c3d56",
        borderColor: "#ddd",
        searchPrimary: "rgba(120,120,128,0.16)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f0f0f0",
    },
    dark: {
        background: "#121212",
        primary: "#bb86fc",
        secondary: "#1e1e1e",
        activeColor : "#121c2d",
        textPrimary: "#ffffff",
        textSecondary: "#cccccc",
        borderColor: "#333333",
        searchPrimary: "#1a1a1a",
        blockColorPrimary: "#1f1f1f",
        blockColorSecondary: "#292929",
    },
};

export const blueTheme: ThemeType = {
    id: "blue",
    name: "Blue Theme",
    light: {
        background: "#e3f2fd",
        primary: "#2196f3",
        secondary: "#bbdefb",
        textPrimary: "#0d47a1",
        activeColor : "#0c3d56",
        textSecondary: "#1976d2",
        borderColor: "#90caf9",
        searchPrimary: "#e1f5fe",
        blockColorPrimary: "#bbdefb",
        blockColorSecondary: "#90caf9",
    },
    dark: {
        background: "#0d47a1",
        primary: "#2196f3",
        secondary: "#1a237e",
        activeColor : "#0c3d56",
        textPrimary: "#ffffff",
        textSecondary: "#90caf9",
        borderColor: "#1976d2",
        searchPrimary: "#1565c0",
        blockColorPrimary: "#1e88e5",
        blockColorSecondary: "#42a5f5",
    },
};


// Danh sách tất cả theme
export const themes: Record<string, ThemeType> = {
    default: defaultTheme,
    blue: blueTheme,
};
