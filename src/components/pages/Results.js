// Result page, recieves the preferences from the quiz
// Calls the API and then filters each item from API against
// the properties collected from the quiz.
// And returns matching result as a card.

import React, { useState, useEffect } from "react";

import { Typography, Box } from "@mui/material";

import Layout from "../Layout/Layout";
import { MainHome } from "./Matches.styled";
import { useLocation } from "react-router-dom";

import fetchData from "../../utils/API";

import ResultsCard from "../Card/ResultsCard";
import fetchData from "../../utils/API";
import Loading from "./Loading";

const Results = () => {
  // Pass through state varibables from previous page.
  // These are the users preferences
  const location = useLocation();
  const properties = location.state?.allProperties;
  const values = location.state?.allValues;
  const unique = location.state?.unique;

  // Call API and store reponse in data useState
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const responseData = await fetchData();
      setData(responseData);
    };
    fetchDataAsync();
  }, []);
  if (!data) {
    return <Loading />;
  }

  // FILTER EACH ITEM RETURNED IN DATA//
  // For each item matches, return true.
  // For each property matched, plus one to prioity points

  const matches = [];

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
    // if the item is matched, push to matches array.
    if (entry.match === true) {
      matches.push(entry);
    } else {
      return;
    }
  });

  // This compares the value of two prioity points/
  // If one is higher than the other, it changes order.
  // Else it stay in place.
  function sortByPriority(a, b) {
    return b.priority - a.priority;
  }

  // Sort results by Priority and give the top 12.
  const sortedMatches = matches.sort(sortByPriority);
  const slicedResults = sortedMatches.slice(0, 12);

  // Map each result to the result card. Give each card a unique key. (NOTE, a unique key is to be assgined at this level.
  // If it passed through props it will not be unquie to this element and will still give an error.)
  const resultsArray = slicedResults.map((perResult) => {
    return <ResultsCard plant={perResult} key={perResult.id} />;
  });

  return (
    <>
      <div key={unique}></div>
      <Layout>
        <MainHome>
          <Typography
            variant="h1"
            component="div"
            color="text.primary"
            sx={{ flexGrow: 1 }}
          >
            RESULTS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "stretch",
            }}
          >
            {resultsArray}
          </Box>
        </MainHome>
      </Layout>
    </>
  );
};

export default Results;
