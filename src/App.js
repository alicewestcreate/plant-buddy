import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Cards from './components/pages/Cards';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </ThemeProvider>
  )

}

export default App;