import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Cards from './components/pages/Cards';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, green, grey, lightGreen } from '@mui/material/colors';
import { getDesignTokens } from './theme';

function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
}

const modeTheme = createTheme(getDesignTokens('dark'));

export function App() {
  return (
    <ThemeProvider theme={modeTheme}>
      <Paper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}
export default App;