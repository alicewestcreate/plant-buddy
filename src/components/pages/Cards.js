import React from "react";
import Card from '@mui/material/Card';
import Layout from "../Layout/Layout";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Import the image
import kitchenPlant from '../Images/kitchen-plant.jpg';

// Import styled components
import { CardContainer, StyledCard, StyledCardMedia, SunlightTypography, StyledButton } from './Card.styled';


export default function Cards() {
    return (
        <Layout>
            {/* Create a flex container to center the card */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                }}
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        // Assign the imported image to the image prop
                        image={kitchenPlant}
                        title="Kitchen Plant"
                    />
                    <CardContent>
                        <Typography sx={{ m: 2 }} color="primary" variant="contained" gutterBottom="h5" component="div">
                            SUNLIGHT
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            How much sunlight does your plant receive?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ m: 2 }} color="primary" variant="contained" size="small">
                            Low light
                        </Button>
                        <Button sx={{ m: 2 }} color="warning" variant="contained" size="small">
                            Direct sunlight
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Layout>
    );
}
