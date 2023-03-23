import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './scenes/Home';
import Navbar from './components/Layout/Navbar';
import Cards from './scenes/Cards';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";
import Test from "./sections/Test"
import TestPage from './components/TestPage';

import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
      </Routes>
    </ThemeProvider>
  )

}

export default App;