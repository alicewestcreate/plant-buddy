import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

// Define an array of page names
const pages = ['About', 'Contact'];

function ResponsiveAppBar() {
    return (
        <>
            {/* Add padding to the bottom of the page */}
            <Box sx={{ paddingBottom: '64px' }}></Box>

            {/* AppBar component with fixed positioning at the bottom of the page */}
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                <Container maxWidth="xl">

                    {/* Toolbar component to organize AppBar content */}
                    <Toolbar disableGutters>

                        {/* Box component to center the page links */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center',
                            }}
                        >
                            {/* Iterate through the pages array to create a Button and Link for each page */}
                            {pages.map((page) => (
                                <Link
                                    key={page}
                                    to={`/${page}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default ResponsiveAppBar;
