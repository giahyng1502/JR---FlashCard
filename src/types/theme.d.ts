export type ThemeType = {
    id: string;
    name: string;
    mode?: 'light' | 'dark'; // optional, để biết nên dùng icon màu trắng hay đen
    colors: {
        background: string;
        primary: string;
        secondary: string;
        textPrimary: string;
        textSecondary: string;
        borderColor: string;
        searchPrimary: string;
        blockColorPrimary: string;
        blockColorSecondary: string;
    };
};


