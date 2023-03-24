import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const pages = ['About', 'Contact'];

function ResponsiveAppBar() {
return (
    <>
    <Box sx={{ paddingBottom: '64px' }}></Box>
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
            }}
            >
            {pages.map((page) => (
                <Link
                key={page}
                to={`/${page.toLowerCase()}`}
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
