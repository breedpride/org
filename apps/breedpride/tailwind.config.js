import { resolve } from 'path';
import { join } from 'path';
// import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import {
  // red,
  slate
} from 'tailwindcss/colors';

const screens = {
  lg: '1280px',
  md: '960px',
  sm: '600px',
  xl: '1440px',
  xxl: '1536px',
  xxxl: '1960px',
};

import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
// const generatePalette = require(
//   path.resolve(__dirname, "./src/bp/tailwind/utils/generate-palette"),
// );

/**
 * Custom palettes
 *
 * Uses the generatePalette helper method to generate
 * Tailwind-like color palettes automatically
 */
// const customPalettes = {
//   brand: generatePalette("#2196F3"),
// };

/**
 * Themes
 */
// const themes = {
//   // Default theme is required for theming system to work correctly
//   default: {
//     accent: {
//       // 100: 'rgb(var(--accent-100))',
//       // 200: 'rgb(var(--accent-200))',
//       // 300: 'rgb(var(--accent-300))',
//       // 400: 'rgb(var(--accent-400))',
//       // 50: 'rgb(var(--accent-50))',
//       // 500: 'rgb(var(--accent-500))',
//       // 600: 'rgb(var(--accent-600))',
//       // 700: 'rgb(var(--accent-700))',
//       // 800: 'rgb(var(--accent-800))',
//       // 900: 'rgb(var(--accent-900))',
//       // 950: 'rgb(var(--accent-950))',
//       // DEFAULT: 'rgb(var(--accent))',
//     },
//     'on-warn': {
//       500: red['50'],
//     },
//     primary: {
//       100: 'rgb(var(--primary-100))',
//       200: 'rgb(var(--primary-200))',
//       300: 'rgb(var(--primary-300))',
//       400: 'rgb(var(--primary-400))',
//       50: 'rgb(var(--primary-50))',
//       500: 'rgb(var(--primary-500))',
//       600: 'rgb(var(--primary-600))',
//       700: 'rgb(var(--primary-700))',
//       800: 'rgb(var(--primary-800))',
//       900: 'rgb(var(--primary-900))',
//       950: 'rgb(var(--primary-950))',
//       DEFAULT: 'rgb(var(--primary-500))',
//       // 100: "#d1c4e9",
//       // 200: "#b39ddb",
//       // 300: "#9575cd",
//       // 400: "#7e57c2",
//       // 50: "#ede7f6",
//       // 500: "#673ab7",
//       // 600: "#5e35b1",
//       // 700: "#512da8",
//       // 800: "#4527a0",
//       // 900: "#311b92",
//       // 950: "#271273",
//       // DEFAULT: "#673ab7",
//     },
//     warn: {
//       ...red,
//       DEFAULT: red[600],
//     },
//   },
// };

/**
 *
 * Tailwind configuration
 */

export const content = [
  join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
  join(__dirname, '../../features/**/!(*.stories|*.spec).{ts,html}'),
  join(__dirname, '../../domain/**/!(*.stories|*.spec).{ts,html}'),
  join(__dirname, '../../libs/**/**/!(*.stories|*.spec).{ts,html}'),
];
export const corePlugins = {
  appearance: false,
  clear: false,
  container: false,
  float: false,
  placeholderColor: false,
  placeholderOpacity: false,
  verticalAlign: false,
};
export const darkMode = 'class';
export const important = true;
export const plugins = [
  // BreedPride - Tailwind plugins
  require('tailwindcss-primeui'),
  require(resolve(__dirname, 'src/bp/tailwind/plugins/utilities')),
  require(resolve(__dirname, 'src/bp/tailwind/plugins/icon-size')),
  // require(path.resolve(__dirname, "src/bp/tailwind/plugins/theming"))({
  //   themes,
  // }),
  // Other third party and/or custom plugins
  require('@tailwindcss/typography')({ modifiers: ['sm', 'lg'] }),
  require('@tailwindcss/aspect-ratio'),
];
export const theme = {
  extend: {
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
    colors: {
      gray: slate,
      pink: {
        10: '#fcfafb',
      },
      purple: {
        10: '#fbfafc',
      },
      accent: {
        100: 'rgb(var(--accent-100))',
        200: 'rgb(var(--accent-200))',
        300: 'rgb(var(--accent-300))',
        400: 'rgb(var(--accent-400))',
        50: 'rgb(var(--accent-50))',
        500: 'rgb(var(--accent-500))',
        600: 'rgb(var(--accent-600))',
        700: 'rgb(var(--accent-700))',
        800: 'rgb(var(--accent-800))',
        900: 'rgb(var(--accent-900))',
        950: 'rgb(var(--accent-950))',
        DEFAULT: 'rgb(var(--accent))',
      },
      secondary: {
        50: 'rgb(var(--secondary-50))',
        100: 'rgb(var(--secondary-100))',
        200: 'rgb(var(--secondary-200))',
        300: 'rgb(var(--secondary-300))',
        400: 'rgb(var(--secondary-400))',
        500: 'rgb(var(--secondary-500))',
        600: 'rgb(var(--secondary-600))',
        700: 'rgb(var(--secondary-700))',
        800: 'rgb(var(--secondary-800))',
        900: 'rgb(var(--secondary-900))',
        950: 'rgb(var(--secondary-950))',
        DEFAULT: 'rgb(var(--secondary))',
      },
      'surface-ground': 'rgb(var(--surface-ground))',
      'card-ground': 'rgb(var(--card-ground))',
      'footer-ground': 'rgb(var(--footer-ground))',
      'header-ground': 'rgb(var(--header-ground))',
      'hover-header-ground': 'rgb(var(--hover-header-ground))',
      'surface-border': 'rgb(var(--surface-border))',
      'modal-card-ground': 'rgb(var(--modal-card-ground))',
      'sub-header-color': 'rgb(var(--sub-header-color))',
      'even-card-ground': 'rgb(var(--even-card-ground))',
      'sub-header-active': 'rgb(var(--sub-header-active))',
      'primary-hover': 'rgb(var(--primary-hover))',
      'focus-card-ground': 'rgb(var(--focus-card-ground))',
    },
    flex: {
      0: '0 0 auto',
    },
    fontFamily: {
      mono: `"Roboto", ${_fontFamily.mono.join(',')}`,
      sans: `"Nunito", ${_fontFamily.sans.join(',')}`,
    },
    maxHeight: {
      none: 'none',
    },
    maxWidth: ({ theme }) => ({
      ...theme('spacing'),
      '10xl': '104rem',
      '11xl': '112rem',
      '7xl': '80rem',
      '8xl': '88rem',
      '9xl': '96rem',
      screen: '100vw',
    }),
    minHeight: ({ theme }) => ({
      ...theme('spacing'),
    }),
    minWidth: ({ theme }) => ({
      ...theme('spacing'),
      screen: '100vw',
    }),

    opacity: {
      12: '0.12',
      38: '0.38',
      87: '0.87',
    },
    rotate: {
      '-270': '270deg',
      15: '15deg',
      270: '270deg',
      30: '30deg',
      60: '60deg',
    },
    scale: {
      '-1': '-1',
    },
    spacing: {
      0.75: '0.1875rem',
      // Fractional values
      '1/2': '50%',
      '1/3': '33.333333%',
      '1/4': '25%',
      // Bigger values
      100: '25rem',
      105: '26rem',
      110: '27rem',
      113: '27.5rem',
      115: '28rem',
      120: '30rem',
      128: '32rem',
      13: '3.25rem',
      140: '35rem',
      15: '3.75rem',
      160: '40rem',
      165: '41.5rem',
      18: '4.5rem',
      180: '45rem',
      185: '46.5rem',
      192: '48rem',
      '2/3': '66.666667%',
      '2/4': '50%',
      200: '50rem',

      21: '5.25rem',
      22: '5.5rem',
      240: '60rem',
      256: '64rem',
      26: '6.5rem',
      27: '6.75rem',
      280: '70rem',
      '3/4': '75%',
      30: '7.5rem',
      320: '80rem',
      34: '8.4rem',
      360: '90rem',
      39: '9.8rem',
      400: '100rem',
      45: '11.2rem',
      480: '120rem',
      50: '12.5rem',
      57: '14.25rem',
      58: '14.5rem',
      59: '14.65rem',
      62: '15.5rem',

      66: '16.5rem',
      67: '16.79rem',
      68: '17rem',
      70: '17.5rem',
      74: '19.438rem',
      90: '22.5rem',
    },

    transitionDuration: {
      400: '400ms',
    },

    transitionTimingFunction: {
      drawer: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
    zIndex: {
      '-1': -1,
      49: 49,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      99: 99,
      999: 999,
      9999: 9999,
      99999: 99999,
    },

    // @tailwindcss/typography
    // typography: ({ theme }) => ({}),
  },
  // maxWidth: {
  //   xs: "20rem",
  //   s: "24rem",
  //   md: "28rem",
  //   lg: "32rem",
  //   xl: "36rem",
  //   "2xl": "42rem",
  //   "3xl": "48rem",
  //   "4xl": "56rem",
  //   "5xl": "64rem",
  //   "6xl": "72rem",
  //   "7xl": "80rem",
  //   "8xl": "88rem",
  //   "9xl": "96rem",
  //   "10xl": "104rem",
  //   "11xl": "112rem",
  // },
  fontSize: {
    '10xl': '8rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    '4xl': '2rem',
    '5xl': '2.25rem',
    '6xl': '2.5rem',
    '7.5xl': '3.5rem',
    '7xl': '3rem',
    '8xl': '4rem',
    '9xl': '6rem',
    base: '0.875rem',
    lg: '1rem',
    md: '0.8125rem',
    sm: '0.75rem',
    xl: '1.125rem',
    xs: '0.625rem',
  },
  screens: screens,
};
