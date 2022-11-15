import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AssessmentPage, HomePage } from "./components";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";

//TODO: Router wrapped in div?
export const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};
