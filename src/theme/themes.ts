import {ThemeType} from "../types";


export const defaultTheme: ThemeType = {
    id: "default",
    name: "Default Theme",
    light: {
        background: "#ffffff",
        primary: "#DAEFFF",                   // xanh dương nhạt
        secondary: "#bfdff7",                 // xanh pha xám nhạt
        textPrimary: "#13456c",               // xanh đậm hơn primary
        textSecondary: "#5a7c99",             // xanh xám nhẹ
        activeColor: "#103c64",               // trung gian giữa primary & textPrimary
        borderColor: "#b2d8f7",
        searchPrimary: "rgba(218, 239, 255, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#eaf5fc",
    },
    dark: {
        background: "#121212",
        primary: "#1E2A38",                   // xanh navy đậm
        secondary: "#263544",                 // hơi sáng hơn primary
        textPrimary: "#c5d9ea",               // sáng, dễ đọc nhưng vẫn xanh
        textSecondary: "#90a4ae",             // xanh xám dịu
        activeColor: "#88c9ff",
        borderColor: "#2c3e50",
        searchPrimary: "rgba(30, 42, 56, 0.24)",
        blockColorPrimary: "#1a2633",
        blockColorSecondary: "#22303d",
    }
};

// 1. Blue Ocean
export const blueOceanTheme: ThemeType = {
    id: "blue_ocean",
    name: "Blue Ocean",
    light: {
        background: "#ffffff",
        primary: "#2196f3",
        secondary: "#bbdefb",
        textPrimary: "#021430", // Giữ cho văn bản chính
        textSecondary: "#0a3059", // Sáng và rõ hơn cho phụ
        activeColor: "#07365f",
        borderColor: "#90caf9",
        searchPrimary: "rgba(33, 150, 243, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e3f2fd",
    },
    dark: {
        background: "#121212",
        primary: "#092f50",
        secondary: "#c6daff",
        textPrimary: "#f4f4ff", // Trắng rõ ràng trên nền xanh đậm
        textSecondary: "#cfe8ff", // Xanh nhạt dễ đọc
        activeColor: "#c6e4fd",
        borderColor: "#2a5dab",
        searchPrimary: "rgba(30, 136, 229, 0.24)",
        blockColorPrimary: "#1b3c61",
        blockColorSecondary: "#224c7a",
    }
};

// 2. Sunset Orange
export const sunsetOrangeTheme: ThemeType = {
    id: "sunset_orange",
    name: "Sunset Orange",
    light: {
        background: "#ffffff",
        primary: "#ffefda",
        secondary: "#ffcc80",
        textPrimary: "#722800",
        textSecondary: "#fb8c00",
        activeColor: "#ffa726",
        borderColor: "#ffcc80",
        searchPrimary: "rgba(255, 152, 0, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#fff3e0",
    },
    dark: {
        background: "#121212",
        primary: "#6f460b",
        secondary: "#5d3b00",
        textPrimary: "#ffe0b2",
        textSecondary: "#ffb74d",
        activeColor: "#ffca7f",
        borderColor: "#ffcc80",
        searchPrimary: "rgba(255, 152, 0, 0.24)",
        blockColorPrimary: "#3a2300",
        blockColorSecondary: "#4e2d00",
    }
};

// 3. Forest Green
export const forestGreenTheme: ThemeType = {
    id: "forest_green",
    name: "Forest Green",
    light: {
        background: "#ffffff",
        primary: "#81cd83",
        secondary: "#a5d6a7",
        textPrimary: "#062d08",
        textSecondary: "#2e7d32",
        activeColor: "#1b5b1f",
        borderColor: "#81c784",
        searchPrimary: "rgba(76, 175, 80, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e8f5e9",
    },
    dark: {
        background: "#121212",
        primary: "#0b590f",
        secondary: "#1b5e20",
        textPrimary: "#d0f8ce",
        textSecondary: "#a5d6a7",
        activeColor: "#81c784",
        borderColor: "#2e7d32",
        searchPrimary: "rgba(102, 187, 106, 0.24)",
        blockColorPrimary: "#1e3d2f",
        blockColorSecondary: "#2c503f",
    }
};

// 4. Purple Dream
export const purpleDreamTheme: ThemeType = {
    id: "purple_dream",
    name: "Purple Dream",
    light: {
        background: "#ffffff",
        primary: "#f3a6ff",
        secondary: "#ce93d8",
        textPrimary: "#6a1b9a",
        textSecondary: "#8e24aa",
        activeColor: "#ab47bc",
        borderColor: "#e1bee7",
        searchPrimary: "rgba(156, 39, 176, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f8eafa",
    },
    dark: {
        background: "#121212",
        primary: "#782088",
        secondary: "#512da8",
        textPrimary: "#f3e5f5",
        textSecondary: "#d1a5e6",
        activeColor: "#ce93d8",
        borderColor: "#7e57c2",
        searchPrimary: "rgba(186, 104, 200, 0.24)",
        blockColorPrimary: "#3e1f59",
        blockColorSecondary: "#4a2a6b",
    }
};

// 5. Mono Gray
export const monoGrayTheme: ThemeType = {
    id: "mono_gray",
    name: "Mono Gray",
    light: {
        background: "#ffffff",
        primary: "#cfcfcf",
        secondary: "#cfcfcf",
        textPrimary: "#303030",
        textSecondary: "#616161",
        activeColor: "#101010",
        borderColor: "#e0e0e0",
        searchPrimary: "rgba(158, 158, 158, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#eeeeee",
    },
    dark: {
        background: "#121212",
        primary: "#292929",
        secondary: "#3a3a3a",
        textPrimary: "#e0e0e0",
        textSecondary: "#a0a0a0",
        activeColor: "#bdbdbd",
        borderColor: "#4a4a4a",
        searchPrimary: "rgba(93,93,93,0.16)",
        blockColorPrimary: "#1c1c1c",
        blockColorSecondary: "#2c2c2c",
    }
};
export const pinkOceanTheme: ThemeType = {
    id: "pink_ocean",
    name: "Pink Ocean",
    light: {
        background: "#ffffff",
        primary: "#ffa7c7",
        secondary: "#f8bbd0",
        textPrimary: "#3b0a24",
        textSecondary: "#880e4f",
        activeColor: "#c2185b",
        borderColor: "#f48fb1",
        searchPrimary: "rgba(233, 30, 99, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#fde7ef",
    },
    dark: {
        background: "#121212",
        primary: "#790e3e",
        secondary: "#f48fb1",
        textPrimary: "#fff0f5",
        textSecondary: "#ffc1e3",
        activeColor: "#f06292",
        borderColor: "#880e4f",
        searchPrimary: "rgba(173, 20, 87, 0.24)",
        blockColorPrimary: "#451528",
        blockColorSecondary: "#5b1d37",
    }
};

export const tealBreezeTheme: ThemeType = {
    id: "teal_breeze",
    name: "Teal Breeze",
    light: {
        background: "#ffffff",
        primary: "#a2f3e9",
        secondary: "#b2dfdb",
        textPrimary: "#004d40",
        textSecondary: "#00796b",
        activeColor: "#26a69a",
        borderColor: "#80cbc4",
        searchPrimary: "rgba(0, 150, 136, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e0f2f1",
    },
    dark: {
        background: "#121212",
        primary: "#004d40",
        secondary: "#80cbc4",
        textPrimary: "#e0f2f1",
        textSecondary: "#a7ffeb",
        activeColor: "#26a69a",
        borderColor: "#4db6ac",
        searchPrimary: "rgba(0, 150, 136, 0.24)",
        blockColorPrimary: "#1a2f2c",
        blockColorSecondary: "#20403b",
    }
};
export const coralBlushTheme: ThemeType = {
    id: "coral_blush",
    name: "Coral Blush",
    light: {
        background: "#ffffff",
        primary: "#ffb8ae",
        secondary: "#ffcdd2",
        textPrimary: "#b71c1c",
        textSecondary: "#e53935",
        activeColor: "#ef5350",
        borderColor: "#ef9a9a",
        searchPrimary: "rgba(255, 111, 97, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#ffebee",
    },
    dark: {
        background: "#121212",
        primary: "#8e2424",
        secondary: "#ff8a80",
        textPrimary: "#ffcdd2",
        textSecondary: "#ef9a9a",
        activeColor: "#ef5350",
        borderColor: "#e57373",
        searchPrimary: "rgba(239, 83, 80, 0.24)",
        blockColorPrimary: "#4a1a1a",
        blockColorSecondary: "#5b2222",
    }
};
export const lavenderFogTheme: ThemeType = {
    id: "lavender_fog",
    name: "Lavender Fog",
    light: {
        background: "#ffffff",
        primary: "#b39ddb",
        secondary: "#d1c4e9",
        textPrimary: "#4527a0",
        textSecondary: "#7e57c2",
        activeColor: "#9575cd",
        borderColor: "#d1c4e9",
        searchPrimary: "rgba(179, 157, 219, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f3e5f5",
    },
    dark: {
        background: "#121212",
        primary: "#5e35b1",
        secondary: "#b39ddb",
        textPrimary: "#ede7f6",
        textSecondary: "#d1c4e9",
        activeColor: "#9575cd",
        borderColor: "#7e57c2",
        searchPrimary: "rgba(142, 36, 170, 0.24)",
        blockColorPrimary: "#311b92",
        blockColorSecondary: "#4527a0",
    }
};
export const mintIceTheme: ThemeType = {
    id: "mint_ice",
    name: "Mint Ice",
    light: {
        background: "#ffffff",
        primary: "#a7ffeb",
        secondary: "#b2fef7",
        textPrimary: "#00695c",
        textSecondary: "#009688",
        activeColor: "#26a69a",
        borderColor: "#b2dfdb",
        searchPrimary: "rgba(167, 255, 235, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e0f2f1",
    },
    dark: {
        background: "#121212",
        primary: "#024e46",
        secondary: "#4db6ac",
        textPrimary: "#b2fef7",
        textSecondary: "#80cbc4",
        activeColor: "#26a69a",
        borderColor: "#26a69a",
        searchPrimary: "rgba(38, 166, 154, 0.24)",
        blockColorPrimary: "#004d40",
        blockColorSecondary: "#00695c",
    }
};
export const citrusPopTheme: ThemeType = {
    id: "citrus_pop",
    name: "Citrus Pop",
    light: {
        background: "#ffffff",
        primary: "#cddc39",
        secondary: "#f0f4c3",
        textPrimary: "#827717",
        textSecondary: "#afb42b",
        activeColor: "#d4e157",
        borderColor: "#dce775",
        searchPrimary: "rgba(205, 220, 57, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#f9fbe7",
    },
    dark: {
        background: "#121212",
        primary: "#9e9d24",
        secondary: "#cddc39",
        textPrimary: "#f0f4c3",
        textSecondary: "#dce775",
        activeColor: "#d4e157",
        borderColor: "#cddc39",
        searchPrimary: "rgba(205, 220, 57, 0.24)",
        blockColorPrimary: "#505000",
        blockColorSecondary: "#6b6b00",
    }
};
export const deepIndigoTheme: ThemeType = {
    id: "deep_indigo",
    name: "Deep Indigo",
    light: {
        background: "#ffffff",
        primary: "#3f51b5",
        secondary: "#c5cae9",
        textPrimary: "#1a237e",
        textSecondary: "#5c6bc0",
        activeColor: "#7986cb",
        borderColor: "#9fa8da",
        searchPrimary: "rgba(63, 81, 181, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e8eaf6",
    },
    dark: {
        background: "#121212",
        primary: "#283593",
        secondary: "#9fa8da",
        textPrimary: "#e8eaf6",
        textSecondary: "#c5cae9",
        activeColor: "#7986cb",
        borderColor: "#5c6bc0",
        searchPrimary: "rgba(63, 81, 181, 0.24)",
        blockColorPrimary: "#1a237e",
        blockColorSecondary: "#2c387e",
    }
};
export const earthClayTheme: ThemeType = {
    id: "earth_clay",
    name: "Earth Clay",
    light: {
        background: "#ffffff",
        primary: "#a1887f",
        secondary: "#d7ccc8",
        textPrimary: "#4e342e",
        textSecondary: "#6d4c41",
        activeColor: "#8d6e63",
        borderColor: "#bcaaa4",
        searchPrimary: "rgba(161, 136, 127, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#efebe9",
    },
    dark: {
        background: "#121212",
        primary: "#5d4037",
        secondary: "#bcaaa4",
        textPrimary: "#efebe9",
        textSecondary: "#d7ccc8",
        activeColor: "#8d6e63",
        borderColor: "#a1887f",
        searchPrimary: "rgba(141, 110, 99, 0.24)",
        blockColorPrimary: "#3e2723",
        blockColorSecondary: "#4e342e",
    }
};
export const icebergBlueTheme: ThemeType = {
    id: "iceberg_blue",
    name: "Iceberg Blue",
    light: {
        background: "#ffffff",
        primary: "#b2ebf2",
        secondary: "#e0f7fa",
        textPrimary: "#006064",
        textSecondary: "#0097a7",
        activeColor: "#4dd0e1",
        borderColor: "#b2ebf2",
        searchPrimary: "rgba(178, 235, 242, 0.1)",
        blockColorPrimary: "#ffffff",
        blockColorSecondary: "#e0f7fa",
    },
    dark: {
        background: "#121212",
        primary: "#006064",
        secondary: "#4dd0e1",
        textPrimary: "#e0f7fa",
        textSecondary: "#b2ebf2",
        activeColor: "#00bcd4",
        borderColor: "#00acc1",
        searchPrimary: "rgba(0, 188, 212, 0.24)",
        blockColorPrimary: "#00363a",
        blockColorSecondary: "#004d52",
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
    pink_ocean : pinkOceanTheme,
    teal_breeze : tealBreezeTheme,
    iceberg_blue : icebergBlueTheme,
    earth_clay : earthClayTheme,
    deep_indigo : deepIndigoTheme,
    citrus_pop : citrusPopTheme,
    lavenderFogTheme : lavenderFogTheme,
    coral_blush : coralBlushTheme,
    mintIceTheme : mintIceTheme,
};
