import React, { useState, useEffect } from "react";
import { Card, Typography, Box } from "@mui/material";
import Layout from "../Layout/Layout";
import { MainHome } from './Matches.styled';
import { useLocation } from "react-router-dom";
import ResultsCard from "../Card/ResultsCard";
import fetchData from "../../utils/API";
import Loading from "./Loading"


const Results = () => {

  // When Results page is rendered 
  // Pass through state varibables from previous page. 
  const location = useLocation();
  const properties = location.state?.allProperties;
  const values = location.state?.allValues;
  const unique = location.state?.unique


  //
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const responseData = await fetchData();
      setData(responseData);
    };
    fetchDataAsync();
  }, []);
  if (!data) {
    return <Loading/>;
  }


  // ======================//
  // FILTER EACH ITEM RETURNED IN DATA//
  // For each item matches, return true.
  // For each property matched, plus one to prioity points 

  const matches = [];
  console.log("Prop",properties);
  console.log("Valu",values);

  data.forEach((entry) => {
    entry.priority = 0;
    entry.match = false;

    if (entry[properties[0]] === values[0]) {
      entry.priority += 1;
      entry.match = true;
    }
    if (entry[properties[1]] === values[1]) {
      entry.priority += 1;
      entry.match = true;
    }
    if (entry[properties[2]] === values[2]) {
      entry.priority += 1;
      entry.match = true;
    }
    if (entry[properties[3]] === values[3]) {
      entry.priority += 1;
      entry.match = true;
    }
    if (entry[properties[4]] === values[4]) {
      entry.priority += 1;
      entry.match = true;
    }
    if (entry.match === true) {
      matches.push(entry);
    } else {
      return;
    }
  });

  function sortByPriority(a, b) {
    return b.priority - a.priority;
  }

  const sortedMatches = matches.sort(sortByPriority);
  const slicedResults = sortedMatches.slice(0, 12);

  // const resultsArray = slicedResults.map((perResult, index) => {
  //   console.log(`Index of item ${perResult} is ${index}`);
  //   return <ResultsCard plant={perResult} unique={perResult.id} test="test" />;
  // });
  const resultsArray = slicedResults.map((perResult) => {
    console.log(`Index of item ${perResult} is ${perResult.id}`);
    return <ResultsCard plant={perResult} unique={perResult.id} />;
  });

  return (
    <>
    <div key={unique}></div>
    <Layout>
      <MainHome>
        <Typography variant="h1" component="div" color='text.primary' sx={{ flexGrow: 1 }}>
          RESULTS
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'stretch'}} >
          {resultsArray}
        </Box>
      </MainHome>
    </Layout>
    </>
  );
};

export default Results;
