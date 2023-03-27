import { Typography } from "@mui/material";
import React from "react";
import Layout from "../Layout/Layout";
import { MainHome } from './Matches.styled';

const Results = () => {
  return (
    <Layout>
         <MainHome>
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
        RESULTS
      </Typography>
      </MainHome>
    </Layout>
  );
};

export default Results;
