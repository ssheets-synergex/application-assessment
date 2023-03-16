import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AssessmentPage, Footer, HomePage, NavBar } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Box } from "@mui/material";

export const App = () => (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  </Box>
);
