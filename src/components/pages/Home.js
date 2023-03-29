import React from "react";
import Typography from '@mui/material/Typography';
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
                    <button className="button-75" role={'button'} variant="contained" color="primary" onClick={() => navigate("/quiz")} sx={{
                        fontSize: 18,
                    }} >
                        Start Quiz
                    </button>
                </MainHome>
            </Layout>
            <Footer />

        </>
    )

}

export default Home;