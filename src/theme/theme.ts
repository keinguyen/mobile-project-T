import { createTheme } from '@shopify/restyle';
import { palette } from './theme-palette';

export const theme = createTheme({
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
    xxxl: 100,
  },
  spacing: {
    none: 0,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 64,
    '10%': '10%',
    '20%': '20%',
    '30%': '30%',
    '40%': '40%',
    '50%': '50%',
  },
  colors: {
    primary: palette.orange,
    secondary: palette.gray[500],
    background: palette.gray[100],
    card: palette.white,
    text: palette.gray[900],
    border: palette.gray[300],
    danger: palette.red,
    warning: palette.yellow,
    success: palette.green,
    info: palette.blue,
    black: palette.black,
    white: palette.white,
    transparent: 'transparent',
    facebook: palette.facebook,
    google: palette.google,

    brandPrimary: palette.brandPrimary,
    accent: palette.accent,

    infoBase: palette.infoBase,
    infoLight: palette.infoLight,
    successBase: palette.successBase,
    successLight: palette.successLight,
    warmingBase: palette.warmingBase,
    warmingLight: palette.warmingLight,
    errorBase: palette.errorBase,
    errorLight: palette.errorLight,

    darkNeutralBlack: palette.darkNeutralBlack,
    darkNeutralNaval: palette.darkNeutralNaval,
    darkNeutralSilver: palette.darkNeutralSilver,
    darkNeutralOverlay: palette.darkNeutralOverlay,
    darkNeutralBlack02: palette.darkNeutralBlack02,

    overlay: palette.overlay,

    lightNeutralDim: palette.lightNeutralDim,
    lightNeutralShine: palette.lightNeutralShine,
    lightNeutralHover: palette.lightNeutralHover,
    lightNeutralZebra: palette.lightNeutralZebra,

    // Color palettes

    // Blue
    blue100: palette.blue100,
    blue200: palette.blue200,
    blue400: palette.blue400,
    blue500: palette.blue500,
    blue600: palette.blue600,
    blue700: palette.blue700,
    blue800: palette.blue800,
    blue900: palette.blue900,

    // Gray
    grey30: palette.grey30,
    grey50: palette.grey50,
    grey50Zebra: palette.grey50Zebra,
    grey60: palette.grey60,
    grey70: palette.grey70,
    grey100: palette.grey100,
    grey150: palette.grey150,
    grey200: palette.grey200,
    grey300: palette.grey300,
    grey400: palette.grey400,
    grey500: palette.grey500,

    // White
    white30: palette.white30,
    white80: palette.white80,

    // Green
    green200: palette.green200,
    green500: palette.green500,

    // Yellow
    yellow200: palette.yellow200,
    yellow500: palette.yellow500,

    // Red
    red100: palette.red100,
    red200: palette.red200,
    red500: palette.red500,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      color: 'text',
      fontSize: 16,
    },
    primary: {
      color: 'primary',
      fontSize: 16,
    },
    secondary: {
      color: 'secondary',
      fontSize: 14,
    },
    largeHeader: {
      fontWeight: 'bold',
      fontSize: 28,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    subHeader: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: 'primary',
    },
    primary: {
      backgroundColor: 'primary',
    },
    danger: {
      backgroundColor: 'danger',
    },
    warning: {
      backgroundColor: 'warning',
    },
    success: {
      backgroundColor: 'success',
    },
    info: {
      backgroundColor: 'info',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'primary',
    },
    transparent: {
      backgroundColor: 'transparent',
    },
    facebook: {
      backgroundColor: 'facebook',
    },
    google: {
      backgroundColor: 'google',
    },
  },
  buttonSizeVariants: {
    defaults: {
      paddingVertical: 'm',
      paddingHorizontal: 'm',
    },
    xs: {
      paddingVertical: 'xs',
      paddingHorizontal: 'xs',
    },
    s: {
      paddingVertical: 's',
      paddingHorizontal: 's',
    },
    m: {
      paddingVertical: 'm',
      paddingHorizontal: 'm',
    },
    l: {
      paddingVertical: 'l',
      paddingHorizontal: 'l',
    },
  },
  cardVariants: {
    defaults: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    flat: {
      borderWidth: 1,
      borderColor: 'border',
    },
  },
  cardCoverImageSizeVariants: {
    defaults: {
      height: 125,
    },
    s: {
      height: 100,
    },
    m: {
      height: 125,
    },
    l: {
      height: 150,
    },
  },
});

export type Theme = typeof theme;

export type TColorName = keyof typeof theme.colors;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: palette.gray[100],
    secondary: palette.gray[400],
    background: palette.gray[950],
    card: palette.gray[800],
    border: palette.gray[600],
  },
};
