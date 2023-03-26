import React from 'react';
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import About from './components/pages/About'
import { ThemeProvider } from '@mui/material';
import theme from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  )

}

export default App;