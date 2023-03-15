import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AssessmentPage, Footer, HomePage, NavBar } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

export const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};
