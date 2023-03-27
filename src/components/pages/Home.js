import React from "react";
import Typography from '@mui/material/Typography';
import Layout from "../Layout/Layout";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MainHome } from "./Home.styled";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Layout>
            <MainHome >
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    Find Your Perfect Plant Match
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate("/quiz")} sx={{
                    fontSize: 18,
                    marginTop: '2rem'
                }} >
                    Start Quiz
                </Button>
            </MainHome>
        </Layout>
    )

}

export default Home;