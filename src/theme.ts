export const theme: Theme = {
    breakpoints: {
        xs: 600,
        sm: 800,
        md: 1000,
        lg: 1200,
        xl: 1600,
    },
    colors: {
        dark: {
            primary: {
                default: '#394053',
                dark: '#212531',
                light: '#9DA5BE',
            },
            secondary: {
                default: '#5F985D',
                dark: '#3F653E',
                light: '#A8C9A6',
            },
            third: {
                default: '#6E6362',
                dark: '#363030',
                light: '#BCB3B3',
            },
            white: '#F4F4F4',
            black: '#101218',
        },
        light: {
            primary: {
                default: '#394053',
                dark: '#212531',
                light: '#9DA5BE',
            },
            secondary: {
                default: '#4E4A59',
                dark: '#312E38',
                light: '#A09AAC',
            },
            third: {
                default: '#6E6362',
                dark: '#363030',
                light: '#D9D4D4',
            },
            white: '#F4F4F4',
            black: '#101218',
        },
    },
};

interface Theme {
    breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    colors: {
        dark: ColorCollection;
        light: ColorCollection;
    };
}

type ColorCollection = {
    primary: ColorShades;
    secondary: ColorShades;
    third: ColorShades;
    white: string;
    black: string;
};

type ColorShades = {
    default: string;
    dark: string;
    light: string;
};
