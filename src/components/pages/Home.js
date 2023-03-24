import React from "react";
import Typography from '@mui/material/Typography';
import Layout from "../Layout/Layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Layout>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                Find Your Perfect Plant Match
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/cards")} >
                Start Quiz
            </Button>
        </Layout>
    )

}

export default Home;