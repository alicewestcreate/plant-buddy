import React from "react";
import { Typography, Button } from '@mui/material';
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { MainHome } from "./Home.styled";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import './Button.css';

const Home = () => {

    const navigate = useNavigate()


    return (
        <>
            <Navbar />
            <Layout>
                <MainHome >
                    <Typography variant="h1" component="div">
                        Find Your Perfect Plant Match
                    </Typography>
<<<<<<< Updated upstream

                    <Button className="button-75" variant="contained" color="primary" onClick={() => navigate("/quiz")} sx={{

=======
                    <Button className="button-75" variant="contained" color="primary" onClick={() => navigate("/quiz")} sx={{
>>>>>>> Stashed changes
                        fontSize: 18,
                    }} >
                        Start Quiz
                    </Button>
                </MainHome>
            </Layout>
            <Footer />

        </>
    )

}

export default Home;