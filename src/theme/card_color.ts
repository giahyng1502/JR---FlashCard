import {CardColor} from '../models';
export type CardColorName =
    | 'blue_ocean'
    | 'sunset_orange'
    | 'forest_green'
    | 'purple_dream'
    | 'mono_gray'
    | 'pink_ocean'
    | 'charcoal_blue'
    | 'night_violet'
    | 'olive_forest'
    | 'golden_sand'
    | 'sky_gray'
    | 'teal_peace'
    | 'ruby_red'
    | 'lemon_fresh'
    | 'sky_mint'
    | 'midnight_black'
    | 'sandstorm'
    | 'lava_dark'
    | 'denim_night'
    | 'twilight';

export const cardColors: Record<CardColorName, CardColor> = {
    blue_ocean: {
        dark: {
            backgroundColor: '#1E2A38',
            textColor: '#FFFFFF',
        },
        light: {
            backgroundColor: '#E3F2FD',
            textColor: '#0D47A1',
        },
    },
    sunset_orange: {
        dark: {
            backgroundColor: '#4E342E',
            textColor: '#FFE0B2',
        },
        light: {
            backgroundColor: '#FFCCBC',
            textColor: '#BF360C',
        },
    },
    forest_green: {
        dark: {
            backgroundColor: '#1B5E20',
            textColor: '#C8E6C9',
        },
        light: {
            backgroundColor: '#E8F5E9',
            textColor: '#2E7D32',
        },
    },
    purple_dream: {
        dark: {
            backgroundColor: '#4527A0',
            textColor: '#EDE7F6',
        },
        light: {
            backgroundColor: '#EDE7F6',
            textColor: '#512DA8',
        },
    },
    mono_gray: {
        dark: {
            backgroundColor: '#2C2C2C',
            textColor: '#FFFFFF',
        },
        light: {
            backgroundColor: '#F5F5F5',
            textColor: '#333333',
        },
    },
    pink_ocean: {
        dark: {
            backgroundColor: '#880E4F',
            textColor: '#F8BBD0',
        },
        light: {
            backgroundColor: '#FCE4EC',
            textColor: '#AD1457',
        },
    },
    charcoal_blue: {
        dark: {
            backgroundColor: '#1C2B36',
            textColor: '#CDEFFF',
        },
        light: {
            backgroundColor: '#D1EBF7',
            textColor: '#102A43',
        },
    },
    night_violet: {
        dark: {
            backgroundColor: '#311B92',
            textColor: '#E1BEE7',
        },
        light: {
            backgroundColor: '#EDE7F6',
            textColor: '#6A1B9A',
        },
    },
    olive_forest: {
        dark: {
            backgroundColor: '#3E4E2C',
            textColor: '#DCE775',
        },
        light: {
            backgroundColor: '#F0F4C3',
            textColor: '#558B2F',
        },
    },
    golden_sand: {
        dark: {
            backgroundColor: '#8D6E63',
            textColor: '#FFF8E1',
        },
        light: {
            backgroundColor: '#FFF3E0',
            textColor: '#BF360C',
        },
    },
    sky_gray: {
        dark: {
            backgroundColor: '#37474F',
            textColor: '#ECEFF1',
        },
        light: {
            backgroundColor: '#CFD8DC',
            textColor: '#263238',
        },
    },
    teal_peace: {
        dark: {
            backgroundColor: '#004D40',
            textColor: '#B2DFDB',
        },
        light: {
            backgroundColor: '#E0F2F1',
            textColor: '#00796B',
        },
    },
    ruby_red: {
        dark: {
            backgroundColor: '#B71C1C',
            textColor: '#FFCDD2',
        },
        light: {
            backgroundColor: '#FFEBEE',
            textColor: '#D32F2F',
        },
    },
    lemon_fresh: {
        dark: {
            backgroundColor: '#827717',
            textColor: '#F0F4C3',
        },
        light: {
            backgroundColor: '#F9FBE7',
            textColor: '#AFB42B',
        },
    },
    sky_mint: {
        dark: {
            backgroundColor: '#00695C',
            textColor: '#B2DFDB',
        },
        light: {
            backgroundColor: '#E0F2F1',
            textColor: '#004D40',
        },
    },
    midnight_black: {
        dark: {
            backgroundColor: '#121212',
            textColor: '#FFFFFF',
        },
        light: {
            backgroundColor: '#E0E0E0',
            textColor: '#212121',
        },
    },
    sandstorm: {
        dark: {
            backgroundColor: '#5D4037',
            textColor: '#FFF8E1',
        },
        light: {
            backgroundColor: '#EFEBE9',
            textColor: '#4E342E',
        },
    },
    lava_dark: {
        dark: {
            backgroundColor: '#BF360C',
            textColor: '#FFE0B2',
        },
        light: {
            backgroundColor: '#FFCCBC',
            textColor: '#BF360C',
        },
    },
    denim_night: {
        dark: {
            backgroundColor: '#283593',
            textColor: '#E8EAF6',
        },
        light: {
            backgroundColor: '#E3F2FD',
            textColor: '#1E88E5',
        },
    },
    twilight: {
        dark: {
            backgroundColor: '#2A2E35',
            textColor: '#E0E0E0',
        },
        light: {
            backgroundColor: '#FAFAFA',
            textColor: '#424242',
        },
    },
};
