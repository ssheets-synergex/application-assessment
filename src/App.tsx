import { Footer, NavBar } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Box } from "@mui/material";
import { AppRoutes } from "./AppRoutes";

export const App = () => (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <ThemeProvider theme={theme}>
      <NavBar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  </Box>
);
