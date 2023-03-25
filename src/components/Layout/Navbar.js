import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomizedSwitches from './LightDarkSwitch';
import { palette } from '@mui/system';
import { purple } from '@mui/material/colors';

const Navbar = () => {
    // useNavigate built in hook from react
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(false);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
                        Plant Buddy
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/matches")}>Your Matches</Button>
                    <CustomizedSwitches check={darkMode} change={() => setDarkMode} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;