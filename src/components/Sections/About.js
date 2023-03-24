import React from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';



function About() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      padding: '0 1rem',
    };




    return (
        <div style={containerStyle}>
          <div style={textStyle}>
            <Fade in={true} timeout={1000}>
              <Typography variant="h1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                About Us
              </Typography>
              </Fade>