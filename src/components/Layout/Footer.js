import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box } from './Footer.styled';
import { Typography } from '@mui/material';


function Footer() {

    const navigate = useNavigate();

    return (
        <>
            {/* Add padding to the bottom of the page
            <Box sx={{ paddingBottom: '64px' }}></Box> */}

            {/* AppBar component with fixed positioning at the bottom of the page */}
            <AppBar position="fixed" color='secondary' sx={{ top: 'auto', bottom: 0 }}>
                <Container maxWidth="xl">
                    {/* Toolbar component to organize AppBar content */}
                    <Toolbar disableGutters>

                        {/* Box component to center the page links */}
                        <Box>
                            <Typography variant="h6" component="div" sx={{ padding: '0 2rem', cursor: 'pointer' }} onClick={() => navigate("/about")}>
                                About
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ padding: '0 2rem', cursor: 'pointer' }} onClick={() => navigate("/contact")}>
                                contact
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Footer;
