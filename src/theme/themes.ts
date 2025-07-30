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
        activeColor: "#0c3d56",
        borderColor: "#ddd",
        searchPrimary: "rgba(120,120,128,0.16)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f0f0f0",
    },
    dark: {
        background: "#121212",
        primary: "#1E2A38",
        secondary: "#1C1C1E",
        textPrimary: "#ffffff",
        textSecondary: "#cccccc",
        activeColor: "#88c9ff",
        borderColor: "#333333",
        searchPrimary: "rgba(255,255,255,0.1)",
        blockColorPrimary: "#1E1E1E",
        blockColorSecondary: "#2C2C2E",
    },
};

// 1. Blue Ocean
export const blueOceanTheme: ThemeType = {
    id: "blue_ocean",
    name: "Blue Ocean",
    light: {
        background: "#e3f2fd",
        primary: "#2196f3",
        secondary: "#bbdefb",
        textPrimary: "#0d47a1",
        textSecondary: "#546e7a",
        activeColor: "#1976d2",
        borderColor: "#90caf9",
        searchPrimary: "rgba(33, 150, 243, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e3f2fd",
    },
    dark: {
        background: "#0d1117",
        primary: "#1e88e5",
        secondary: "#263238",
        textPrimary: "#e3f2fd",
        textSecondary: "#90caf9",
        activeColor: "#42a5f5",
        borderColor: "#1c1c1c",
        searchPrimary: "rgba(255,255,255,0.07)",
        blockColorPrimary: "#1a1a1a",
        blockColorSecondary: "#2a2a2a",
    }
};

// 2. Sunset Orange
export const sunsetOrangeTheme: ThemeType = {
    id: "sunset_orange",
    name: "Sunset Orange",
    light: {
        background: "#fff3e0",
        primary: "#ff9800",
        secondary: "#ffe0b2",
        textPrimary: "#e65100",
        textSecondary: "#8d6e63",
        activeColor: "#fb8c00",
        borderColor: "#ffcc80",
        searchPrimary: "rgba(255, 152, 0, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#fff8e1",
    },
    dark: {
        background: "#2c1b10",
        primary: "#ff9800",
        secondary: "#3e2723",
        textPrimary: "#fff3e0",
        textSecondary: "#ffccbc",
        activeColor: "#ffb74d",
        borderColor: "#4e342e",
        searchPrimary: "rgba(255,255,255,0.06)",
        blockColorPrimary: "#2c1b10",
        blockColorSecondary: "#3e2723",
    }
};

// 3. Forest Green
export const forestGreenTheme: ThemeType = {
    id: "forest_green",
    name: "Forest Green",
    light: {
        background: "#e8f5e9",
        primary: "#4caf50",
        secondary: "#c8e6c9",
        textPrimary: "#1b5e20",
        textSecondary: "#689f38",
        activeColor: "#388e3c",
        borderColor: "#a5d6a7",
        searchPrimary: "rgba(76, 175, 80, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f1f8e9",
    },
    dark: {
        background: "#102418",
        primary: "#66bb6a",
        secondary: "#1b5e20",
        textPrimary: "#e8f5e9",
        textSecondary: "#81c784",
        activeColor: "#43a047",
        borderColor: "#2e7d32",
        searchPrimary: "rgba(255,255,255,0.05)",
        blockColorPrimary: "#1b5e20",
        blockColorSecondary: "#2e7d32",
    }
};

// 4. Purple Dream
export const purpleDreamTheme: ThemeType = {
    id: "purple_dream",
    name: "Purple Dream",
    light: {
        background: "#f3e5f5",
        primary: "#9c27b0",
        secondary: "#ce93d8",
        textPrimary: "#4a148c",
        textSecondary: "#7b1fa2",
        activeColor: "#ab47bc",
        borderColor: "#e1bee7",
        searchPrimary: "rgba(156, 39, 176, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f8eafa",
    },
    dark: {
        background: "#1b1123",
        primary: "#ba68c8",
        secondary: "#311b92",
        textPrimary: "#f3e5f5",
        textSecondary: "#e1bee7",
        activeColor: "#ce93d8",
        borderColor: "#4a148c",
        searchPrimary: "rgba(255,255,255,0.06)",
        blockColorPrimary: "#311b92",
        blockColorSecondary: "#512da8",
    }
};

// 5. Mono Gray
export const monoGrayTheme: ThemeType = {
    id: "mono_gray",
    name: "Mono Gray",
    light: {
        background: "#f5f5f5",
        primary: "#9e9e9e",
        secondary: "#cfcfcf",
        textPrimary: "#212121",
        textSecondary: "#616161",
        activeColor: "#757575",
        borderColor: "#e0e0e0",
        searchPrimary: "rgba(0,0,0,0.08)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#eeeeee",
    },
    dark: {
        background: "#121212",
        primary: "#9e9e9e",
        secondary: "#2e2e2e",
        textPrimary: "#e0e0e0",
        textSecondary: "#9e9e9e",
        activeColor: "#bdbdbd",
        borderColor: "#424242",
        searchPrimary: "rgba(255,255,255,0.08)",
        blockColorPrimary: "#1c1c1c",
        blockColorSecondary: "#2c2c2c",
    }
};

// Danh sách tất cả theme
export const themes: Record<string, ThemeType> = {
    default: defaultTheme,
    blue_ocean: blueOceanTheme,
    mono_gray : monoGrayTheme,
    purple_dream : purpleDreamTheme,
    forest_green : forestGreenTheme,
    sunset_orange : sunsetOrangeTheme,
};
