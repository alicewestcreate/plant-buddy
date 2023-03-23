import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Cards() {
    return (
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
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
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
    );
}
