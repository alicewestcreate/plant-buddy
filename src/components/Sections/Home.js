import React, { Component } from "react";// to shw and hide componenets
import Typography from '@mui/material/Typography';
import Layout from "../Layout/Layout";
import Test from "../../sections/Test";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonStyled from "../Button";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Layout>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                Find Your Perfect Plant Match
            </Typography>
            <ButtonStyled onClick={() => navigate("/cards")} >
                Start Quiz
            </ButtonStyled>
            <Test />
        </Layout>
    )

}


export default Home;