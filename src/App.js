import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Matches from './components/pages/Matches';
import { Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import ColorModeContext from './contexts/ColorModeContext';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Quiz from './components/pages/Quiz';
import Results from "./components/pages/Results"
import About from './components/pages/About'
import Contact from './components/pages/Contact';


export function App() {
  // automatically adjusts to the users light or dark mode settings
  const [mode, setMode] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  // useMemo Hook which returns memorized value so that colorMode does not need to rerun everytime it is called. 
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        // if light then be light mode if not be dark mode
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  // only return different object if mode changes 
  const modeTheme = React.useMemo(() =>
    createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={modeTheme}>
        <SplashScreen />
        <Paper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path='/matches' element={<Matches />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;