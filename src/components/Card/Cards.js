import {Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Stack} from '@mui/material';

// Import the image
import kitchenPlant from '../../Images/kitchen-plant.jpg';

// Import styled components
import { CardContainer, StyledCard, StyledCardMedia, SunlightTypography, StyledButton } from './Cards.styled';


export default function Cards() {
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
                        {/* <StyledCardMedia
                            // Assign the imported image to the image prop
                            image={kitchenPlant}
                            title="Kitchen Plant"
                        /> */}
                        <CardContent>
                            <SunlightTypography>
                                SUNLIGHT
                            </SunlightTypography>
                            <Typography variant="body2" color="text.secondary">
                                How much sunlight does your plant receive?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <StyledButton color="primary" variant="contained" size="small">
                                Low light
                            </StyledButton>
                            <StyledButton color="warning" variant="contained" size="small">
                                Direct sunlight
                            </StyledButton>
                        </CardActions>
                    </StyledCard>
                </CardContainer>
            </Box>
            </Stack>
    
    );
}