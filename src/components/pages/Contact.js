import React from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import AboutLayout from '../Layout/AboutLayout';
import creators from '../../utils/creators';
import { ContainerStyle, ContentStyle, IconContainer } from './Contact.styled';
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
                            <img src={creator.Image} alt={creator.name} sx={{ width: '200px', height: '200px' }} />
                            <Typography variant='h3'>{creator.name}</Typography>
                            <IconContainer>
                                {/* will open link in new tab */}
                                <a href={creator.github} target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: 'large', textAlign: 'center' }} >
                                        <GitHubIcon />
                                    </Typography>
                                </a>
                                <a href={creator.linkedIn} target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: 'large', textAlign: 'center' }} >
                                        <LinkedInIcon />
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