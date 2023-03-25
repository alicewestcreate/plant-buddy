import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Cards from './components/pages/Cards';
import { Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import ColorModeContext from './contexts/ColorModeContext';
import SplashScreen from './components/SplashScreen/SplashScreen';

export function App() {
  // automatically adjusts to the users light or dark mode settings
  const [mode, setMode] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
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
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}
export default App;