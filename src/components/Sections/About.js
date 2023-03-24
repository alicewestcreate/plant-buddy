import React from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';



function About() {
    // Style object for the container div
    const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem',
    };

    // Style object for the text content
    const textStyle = {
        lineHeight: '1.5',
        fontSize: '1.1rem',
        maxWidth: '800px',
    };


    return (
        <div style={containerStyle}>
        <div style={textStyle}>
            <Fade in={true} timeout={1000}>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                About Us
            </Typography>
            </Fade>
            <Slide direction="up" in={true} timeout={1000}>
        <p>Welcome to Plant Buddy, the dating app for plant lovers!</p>
        </Slide>
        <Slide direction="up" in={true} timeout={1200}>
        <p>Our mission is to help you find the perfect plant companion to add some greenery to your life.</p>
        </Slide>
        <Slide direction="up" in={true} timeout={1400}>
        <p>
            At Plant Buddy, we believe that plants are more than just decorations – they're living beings that can bring joy, calm, and a sense of connection to nature into your home. And just like people, plants have unique personalities and needs. That's why we've created an app that takes the guesswork out of finding your perfect plant match.
        </p>
        </Slide>
        <Slide direction="up" in={true} timeout={1600}>
        <p>
            We know that finding the right plant can be a daunting task. But with Plant Buddy, you don't have to go it alone. That's why we've created a quiz that asks you a series of questions about your lifestyle and preferences to help you find your plant match.
        </p>
        </Slide>
        <Slide direction="up" in={true} timeout={1800}>
        <p>
            By answering these questions, our app will generate a list of plant recommendations that match your unique preferences.
        </p>
        </Slide>
        <Slide direction="up" in={true} timeout={2000}>
        <p>
            We believe that everyone can find joy and companionship in a plant. Let Plant Buddy help you find your perfect match today!
        </p>
        </Slide>
    </div>
    </div>
);
}

export default About;