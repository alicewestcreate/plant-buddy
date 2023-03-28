import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomizedSwitches from './LightDarkSwitch';
import ColorModeContext from '../../contexts/ColorModeContext';

const Navbar = () => {
    // useNavigate built in hook from react
    const navigate = useNavigate();
    // toggles between colors depending on dark or light mode
    const { toggleColorMode, mode } = useContext(ColorModeContext)

    // navbar color when scroll down 
    const [color, setColor] = useState(false);
    const [textColor, setTextColor] = useState(false);
    const changeColor = () => {
        // if window is less than of equal to 100 pixels then set navbar background color
        if (window.scrollY >= 100) {
            setColor(true);
            setTextColor(true)
        } else {
            setColor(false);
            setTextColor(false)
        }
    }
    window.addEventListener("scroll", changeColor);

    return (
        <Box>
            <AppBar position="fixed"
                elevation={0} sx={{
                    // if user scrolls give navbar a background color and boxshadow 
                    backgroundColor: color ? 'primary.main' : 'transparent',
                    boxShadow: color ? '0 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
                }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate("/")}>
                        Plant Buddy
                    </Typography>
                    <Button color="inherit" sx={{ boxShadow: '0 0 0 1px #F34079', marginRight: '2rem', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} onClick={() => navigate("/matches")}>Your Matches</Button>
                    {/* when toggle switched will chnage mode */}
                    <CustomizedSwitches checked={mode === "dark"} onChange={toggleColorMode} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;