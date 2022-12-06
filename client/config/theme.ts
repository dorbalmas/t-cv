import { createTheme, ThemeOptions } from '@mui/material/styles';

export const rtlStyleChanges = {
  dir: 'rtl',
  textAlign: 'right',
  MuiInputLabel: {
    left: 'inherit',
    right: '1.75rem',
    transformOrigin: 'right',
  },
};
export const ltrStyleChanges = {
  dir: 'ltr',
  textAlign: 'left',
  MuiInputLabel: {
    transformOrigin: 'left',
  },
};

const theme: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '6px 20px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 30,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          zIndex: 40,
        },
        paper: {
          border: 'none',
        },
      },
    },
  },
};

export const lightTheme = (directions: any) =>
  createTheme({
    ...theme,
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
          },
          switchBase: {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#37BCF8',
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
          },
          track: {
            borderRadius: 26 / 2,
            backgroundColor: '#8796A5',

            opacity: 1,
            transitionDuration: '300ms',
          },
          thumb: {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            direction: directions.dir,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            textAlign: directions.textAlign,
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            direction: directions.dir,
          },
        },
      },
      MuiModal: {
        styleOverrides: {
          root: {
            direction: directions.dir,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: directions.MuiInputLabel.left,
            right: directions.MuiInputLabel.right,
            transformOrigin: directions.MuiInputLabel.transformOrigin,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            textAlign: directions.textAlign,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          variant: 'contained',
          disableElevation: true,
          fullWidth: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '6px 20px',
            color: '#37BCF8',
            backgroundColor: '#DCF2FE',
            '&:hover': {
              backgroundColor: '#37BCF8',
              color: '#fff',
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: '#F7FAFC',
          },
        },
      },
    },
    palette: {
      mode: 'light',
      primary: { main: '#404040' }, // neutral[700]
      secondary: { main: '#0d9488' }, // teal[600]
    },
  });

export const darkTheme = (directions: any) =>
  createTheme({
    ...theme,
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
          },
          switchBase: {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#37BCF8',
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
          },
          track: {
            borderRadius: 26 / 2,
            backgroundColor: '#8796A5',

            opacity: 1,
            transitionDuration: '300ms',
          },
          thumb: {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            direction: directions.dir,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: { textAlign: directions.textAlign },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            direction: directions.dir,
          },
        },
      },
      MuiModal: {
        styleOverrides: {
          root: {
            direction: directions.dir,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: directions.MuiInputLabel.left,
            right: directions.MuiInputLabel.right,
            transformOrigin: directions.MuiInputLabel.transformOrigin,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            textAlign: directions.textAlign,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          variant: 'contained',
          disableElevation: true,
          fullWidth: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '6px 20px',
            color: '#37BCF8',
            backgroundColor: '#1F3F59',
            '&:hover': {
              backgroundColor: '#37BCF8',
              color: '#fff',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#324053',
          },
        },
      },
    },
    palette: {
      mode: 'dark',
      primary: { main: '#f5f5f5' }, // neutral[100]
      secondary: { main: '#2dd4bf' }, // teal[400]
    },
  });
