import React from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import AboutLayout from '../Layout/AboutLayout';
import creators from '../../utils/creators';
import { ContainerStyle, ContentStyle, IconContainer, ImageContainer, NameContainer } from './Contact.styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    return (
        <AboutLayout>
            <Fade in={true} timeout={1000}>
                <Typography variant="h1" component="div" sx={{
                    flexGrow: 1, textAlign: 'center',
                    marginBottom: '2rem', marginTop: '5rem'
                }}> Contact Us
                </Typography>
            </Fade>
            <Typography variant='h3' component={'div'} sx={{ margin: '0 5rem', backdropFilter: 'blur(10px)', }}>
                We hope you like our app and find a new plant brings you joy! If you'd like to say hi to the makers contact us below:
            </Typography>
            <ContainerStyle>
                <ContentStyle>
                    {/* map through data object and create section for each person */}
                    {creators.map((creator) => (
                        <div key={creator.name} sx={{ margin: '0 20px', backdropFilter: 'blur(10px)', }}>
                            <ImageContainer>
                                <img src={creator.Image} alt={creator.name} />
                            </ImageContainer>
                            <NameContainer>
                                <Typography variant='h3'>{creator.name}</Typography>
                            </NameContainer>
                            <IconContainer>
                                {/* will open link in new tab */}
                                <a href={creator.github} target="_blank" rel="noopener noreferrer" sx={{ color: 'text.primary', textDecoration: 'none' }}>
                                    <Typography sx={{ textAlign: 'center' }} >
                                        <GitHubIcon sx={{
                                            fontSize: '30px',
                                            color: 'text.primary',
                                            cursor: 'pointer',
                                            transition: 'color 0.3s ease-in-out',
                                            '&:hover': {
                                                color: '#f34079',
                                            },
                                        }}
                                        />
                                    </Typography>
                                </a>
                                <a href={creator.linkedIn} target="_blank" rel="noopener noreferrer" sx={{ color: 'text.primary', textDecoration: 'none' }}>
                                    <Typography sx={{ textAlign: 'center' }} >
                                        <LinkedInIcon sx={{
                                            fontSize: '30px',
                                            color: 'text.primary',
                                            cursor: 'pointer',
                                            transition: 'color 0.3s ease-in-out',
                                            '&:hover': {
                                                color: '#f34079',
                                            },
                                        }} />
                                    </Typography>
                                </a>
                            </IconContainer>
                        </div>

                    ))}
                </ContentStyle>
            </ContainerStyle>
        </AboutLayout >

    )
}

export default Contact