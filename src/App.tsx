import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import { AppRoutes } from './AppRoutes';
import { Footer, NavBar } from './components';
import { theme } from './theme';

export const App: FC = () => (
  <Box
    data-testid='app-wrapper'
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <ThemeProvider theme={theme}>
      <NavBar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  </Box>
);
