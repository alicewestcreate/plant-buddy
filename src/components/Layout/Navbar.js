import React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    // useNavigate built in hook from react
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
                        Plant Buddy
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/matches")}>Your Matches</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;