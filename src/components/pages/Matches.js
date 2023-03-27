import React from 'react';
import { Typography } from '@mui/material';
import LayoutTwo from '../Layout/LayoutTwo';
import { MainHome } from './Matches.styled';

const Matches = () => {
    return (
        <LayoutTwo>
            <MainHome>

                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    Your Saved Matches
                </Typography>

            </MainHome>

        </LayoutTwo>

    )
}

export default Matches;