import React from "react";
import Typography from '@mui/material/Typography';
import Layout from "../Layout/Layout";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Layout>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                    

                }}
            >
            <Box
             sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column',
                margin: 'auto',
            }}
            >
            <Typography variant="h1" component="div" sx={{ flexGrow: 1, marginBottom: '2rem'}}>
                Find Your Perfect Plant Match
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/quiz")} >
                Start Quiz
            </Button>
            </Box>
            </Box>
        </Layout>
    )

}

export default Home;