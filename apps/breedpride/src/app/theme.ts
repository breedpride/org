import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const BPreset = definePreset(Lara, {
  primitive: {
    chip: {
      paddingY: '0.375rem !important',
    },
  },
  semantic: {
    primary: {
      100: 'rgb(var(--primary-100))',
      200: 'rgb(var(--primary-200))',
      300: 'rgb(var(--primary-300))',
      400: 'rgb(var(--primary-400))',
      50: 'rgb(var(--primary-50))',
      500: 'rgb(var(--primary-500))',
      600: 'rgb(var(--primary-600))',
      700: 'rgb(var(--primary-700))',
      800: 'rgb(var(--primary-800))',
      900: 'rgb(var(--primary-900))',
      950: 'rgb(var(--primary-950))',
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
    },
    colorScheme: {
      light: {
        button: {
          secondary: {
            background: '{surface.600} !important',
            hoverBackground: '{surface.500} !important',
            activeBackground: '{surface.700} !important',
            borderColor: '{surface.600} !important',
            hoverBorderColor: '{surface.500} !important',
            activeBorderColor: '{surface.700} !important',
            color: '{surface.0} !important',
            hoverColor: '{surface.0} !important',
            activeColor: '{surface.0} !important',
          },
          info: {
            background: '{accent.700} !important',
            hoverBackground: '{accent.600} !important',
            activeBackground: '{accent.700} !important',
            borderColor: '{accent.700} !important',
            hoverBorderColor: '{accent.600} !important',
            activeBorderColor: '{accent.700} !important',
          },
          outlined: {
            secondary: {
              borderColor: '{surface.600} !important',
              hoverBorderColor: '{surface.500} !important',
              activeBorderColor: '{surface.700} !important',
              color: '{surface.600} !important',
              hoverColor: '{surface.500} !important',
              activeColor: '{surface.700} !important',
            },
          },
        },
        chip: {
          background: '{primary.500} !important',
          color: '{surface.0} !important',
        },
        formField: {
          background: '{surface.0}',
          color: '{surface.800}',
        },
        text: {
          color: '{surface.800}',
          hoverColor: '{surface.900}',
        },
        progressspinner: {
          color: {
            1: '{surface.400} !important',
            2: '{primary.500} !important',
            3: '{primary.500} !important',
            4: '{primary.500} !important',
          },
        },
        tabs: {
          tablist: {
            background: 'transparent !important',
          },
          tab: {
            background: 'transparent !important',
            border: {
              width: '0 0 1px 0 !important',
              color: '{surface.300} !important',
            },
            active: {
              background: 'transparent !important',
              border: {
                color: '{primary} !important',
              },
            },
            hover: {
              border: {
                color: '{surface.400} !important',
              },
            },
          },
          tabpanel: {
            padding: 'none !important',
          },
        },
      },

      dark: {
        button: {
          secondary: {
            background: '{surface.400} !important',
            hoverBackground: '{surface.300} !important',
            activeBackground: '{surface.500} !important',
            borderColor: '{surface.400} !important',
            hoverBorderColor: '{surface.300} !important',
            activeBorderColor: '{surface.500} !important',
            color: '{surface.0} !important',
            hoverColor: '{surface.0} !important',
            activeColor: '{surface.0} !important',
          },
          info: {
            background: '{accent.700} !important',
            hoverBackground: '{accent.600} !important',
            activeBackground: '{accent.700} !important',
            borderColor: '{accent.700} !important',
            hoverBorderColor: '{accent.600} !important',
            activeBorderColor: '{accent.700} !important',
            color: '{surface.0} !important',
            hoverColor: '{surface.0} !important',
            activeColor: '{surface.0} !important',
          },
          outlined: {
            secondary: {
              borderColor: '{surface.400} !important',
              hoverBorderColor: '{surface.300} !important',
              activeBorderColor: '{surface.500} !important',
              color: '{surface.400} !important',
              hoverColor: '{surface.300} !important',
              activeColor: '{surface.500} !important',
            },
          },
        },
        chip: {
          background: '{primary.400} !important',
          color: '{surface.0} !important',
        },
        formField: {
          background: '{surface.900}',
        },
        content: {
          background: '{surface.800}',
        },
        progressspinner: {
          color: {
            1: '{surface.400} !important',
            2: '{primary.400} !important',
            3: '{primary.400} !important',
            4: '{primary.400} !important',
          },
        },
        tabs: {
          tab: {
            border: {
              color: '{surface.500} !important',
            },
            hover: {
              border: {
                color: '{surface.400} !important',
              },
            },
          },
        },
      },
    },
  },
});
