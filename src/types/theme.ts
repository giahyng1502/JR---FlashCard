
export type ThemeColors  = {
    background: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    activeColor : string;
    borderColor: string;
    searchPrimary: string;
    blockColorPrimary: string;
    blockColorSecondary: string;
}

export type ThemeType = {
    id: string;
    name: string;
    dark: ThemeColors ;
    light:ThemeColors
};


