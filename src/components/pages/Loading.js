import React from "react";
import { Grid, Box } from "@mui/material";
// import { makeStyles } from '@material-ui/styles'
import Layout from "../Layout/Layout";
import { MainHome } from "./Matches.styled";
import load from "../Images/loading.png";


const Loading = () => {

  return (
    <Layout>
      <MainHome>
        <div>
            <Box component="img" src={load}></Box>
        </div>
      </MainHome>
    </Layout>
  );
};

export default Loading;
