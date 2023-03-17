import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    contrastThreshold: 3,
    mode: 'light' as PaletteMode,
    error: {
      main: '#cc0033',
    },
    info: {
      main: '#1f3c68',
    },
    primary: {
      main: '#007f96',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#FFF',
      contrastText: '#007f96',
    },
    success: {
      main: '#99CC66',
    },
    warning: {
      main: '#F3BA1A',
    },
    text: {
      primary: '#47586C',
      secondary: '#64768B',
      disabled: '#90A4AE',
    },
    divider: '#D4D5D8',
    background: {
      paper: '#FFF',
      default: '#FFF',
    },
    action: {
      selectedOpacity: 0,
      selected: '#fafbfb',
    },
  },
  typography: {
    fontFamily: 'Titillium Web, Source Sans Pro, sans-serif',
    fontWeightMedium: 700,
    fontWeightBold: 800,
    h1: {
      fontSize: '2rem',
      letterSpacing: 0,
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.375rem',
      letterSpacing: 0,
    },
    h4: {
      fontSize: '1.25rem',
      letterSpacing: 0,
    },
    h5: {
      fontSize: '1.125rem',
      letterSpacing: 0,
    },
    h6: {
      fontSize: '1rem',
      letterSpacing: 0,
    },
    subtitle1: {
      letterSpacing: 0,
    },
    subtitle2: {
      letterSpacing: 0,
    },
    body1: {
      letterSpacing: 0,
    },
    body2: {
      letterSpacing: 0,
    },
    button: {
      letterSpacing: 0,
    },
    caption: {
      letterSpacing: 0,
    },
    overline: {
      letterSpacing: 0,
    },
  },
});
