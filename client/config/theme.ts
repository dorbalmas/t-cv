import { createTheme, ThemeOptions } from '@mui/material/styles';

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
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       left: 'inherit',
    //       right: '1.75rem',
    //       transformOrigin: 'right',
    //     },
    //   },
    // },
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

export const lightTheme = createTheme({
  ...theme,
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
          color: '#0084c7',
          backgroundColor: '#DCF2FE',
          '&:hover': {
            backgroundColor: '#94A3B8',
            color: '#fff',
          },
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

export const darkTheme = createTheme({
  ...theme,
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
          color: '#37BCF8',
          backgroundColor: '#1F3F59',
          '&:hover': {
            backgroundColor: '#1E293B',
            color: '#fff',
          },
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
