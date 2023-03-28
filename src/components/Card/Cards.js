import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Stack} from '@mui/material';

// Import styled components
import { CardContainer, StyledCard, StyledCardMedia, SunlightTypography, StyledButton } from './Cards.styled';

export default function Cards(props) {
    // console.log(props.content);
    return (
        <Stack>
           <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                    maxWidth: '70vw',
                    flexDirection: 'column',
                }}
            >
                <CardContainer>
                    <StyledCard>
                        <StyledCardMedia
                            // Reference the image in the public folder
                            image="/kitchen-plant.jpg"
                            // title="Kitchen Plant"
                        />
                        <CardContent>
                            <SunlightTypography>
                                SUNLIGHT
                            </SunlightTypography>
                            <Typography variant="body2" color="text.secondary">
                                How much sunlight does your plant receive?
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </StyledCard>
                </CardContainer>
            </Box>
            </Stack>
    );
}
