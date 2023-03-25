import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../Layout/Layout';

const Matches = () => {
    return (
        <Layout>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                Your Saved Matches
            </Typography>
        </Layout>

    )
}

export default Matches;