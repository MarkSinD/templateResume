import {PaletteMode, ThemeOptions} from '@mui/material'
import {grey, purple} from "./colors";

export const isDarkMode = (mode: PaletteMode, darkColor: string, lightColor: string) => mode === 'dark' ? darkColor : lightColor

export const defaultTheme = (mode: PaletteMode) => {
  const theme: ThemeOptions = {
    palette: {
      mode: mode,
      primary: {
        // light: will be calculated from palette.primary.main,
        main: grey[50],
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: grey[100],
        main: grey[600],
        // dark: will be calculated from palette.secondary.main,
        contrastText: purple[500],
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Microsoft Sans Serif',
        fontWeight: 400,
        color: isDarkMode(mode, '#F5F5F5', '#000000'),
      },
      h1: {
        fontSize: "28px",
      },
      h2: {
        fontSize: "1.2rem",
        fontWeight: "400",
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
        },
      },
      MuiSlider: {
        defaultProps: {
          disabled: true
        },
        styleOverrides: {
          thumb :{
            display: "none"
          }
        }
      }
    },
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  }
  return theme
}