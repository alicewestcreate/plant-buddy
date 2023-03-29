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
    // uses colorModeContext to toggle between dark or light and set a mode
    const { toggleColorMode, mode } = useContext(ColorModeContext)
    // navbar background color when user scrolls down 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        // if window is less than or equal to 100 pixels then set navbar background color
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);


    const buttonStyle = {
        boxShadow: '0 0 0 1px #f34079',
        marginRight: '2rem',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
    }

    const logoStyle = {
        flexGrow: 1,
        cursor: 'pointer'
    }


    return (
        <Box>
            <AppBar position="fixed"
                elevation={0} sx={{
                    // if user scrolls give navbar a background color and boxshadow 
                    backgroundColor: color ? '#E7E8EA' : 'transparent',
                    boxShadow: color ? '0 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
                }}>
                <Toolbar>
                    <Typography variant="h5" component="div" style={logoStyle} onClick={() => navigate("/")}>
                        Plant Buddy
                    </Typography>
                    <Button color="inherit" style={buttonStyle} onClick={() => navigate("/matches")}>Saved Matches</Button>
                    {/* when toggle switched will change webpage color mode */}
                    <CustomizedSwitches checked={mode === "dark"} onChange={toggleColorMode} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;