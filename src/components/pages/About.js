import React from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import AboutLayout from '../Layout/AboutLayout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ContainerStyle, TextStyle } from './About.styled';

function About() {
    return (
        <AboutLayout>

            <ContainerStyle>
                <TextStyle>
                    <Fade in={true} timeout={1000}>
                        <Typography variant="h1" component="div" sx={{
                            flexGrow: 1, textAlign: 'center',
                            marginBottom: '2rem'
                        }}>
                            About Us
                        </Typography>
                    </Fade>
                    <Slide direction="up" in={true} timeout={1000}>
                        <Typography variant='body1' sx={{ marginBottom: '1.2rem' }}>Welcome to Plant Buddy, the dating app for plant lovers!</Typography>
                    </Slide>
                    <Slide direction="up" in={true} timeout={1200}>
                        <Typography variant='body1' sx={{ marginBottom: '1.2rem' }}>Our mission is to help you find the perfect plant companion to add some greenery to your life.</Typography>
                    </Slide>
                    <Slide direction="up" in={true} timeout={1400}>
                        <Typography variant='body1' sx={{ marginBottom: '1.2rem' }}>
                            At Plant Buddy, we believe that plants are more than just decorations – they're living beings that can bring joy, calm, and a sense of connection to nature into your home. And just like people, plants have unique personalities and needs. That's why we've created an app that takes the guesswork out of finding your perfect plant match.
                        </Typography>
                    </Slide>
                    <Slide direction="up" in={true} timeout={1600}>
                        <Typography variant='body1' sx={{ marginBottom: '1.2rem' }}>
                            We know that finding the right plant can be a daunting task. But with Plant Buddy, you don't have to go it alone. That's why we've created a quiz that asks you a series of questions about your lifestyle and preferences to help you find your plant match.
                        </Typography>
                    </Slide>
                    <Slide direction="up" in={true} timeout={1800}>
                        <Typography variant='body1' sx={{ marginBottom: '1.2rem' }}>
                            By answering these questions, our app will generate a list of plant recommendations that match your unique preferences.
                        </Typography>
                    </Slide>
                    <Slide direction="up" in={true} timeout={2000}>
                        <Typography variant='body1' sx={{ marginBottom: '1.2rem' }}>
                            We believe that everyone can find joy and companionship in a plant. Let Plant Buddy help you find your perfect match today!
                        </Typography>
                    </Slide>
                    <Slide direction="up" in={true} timeout={2000}>
                        <Typography sx={{ fontSize: 'large', textAlign: 'center' }} >
                            <FavoriteBorderIcon />
                        </Typography>
                    </Slide>
                </TextStyle>
            </ContainerStyle>
        </AboutLayout>
    );
}

export default About;