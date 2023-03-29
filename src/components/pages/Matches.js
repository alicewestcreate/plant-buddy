import React, { useEffect, useState } from 'react';
import LayoutTwo from '../Layout/LayoutTwo';
import { MainHome } from './Matches.styled';
import fetchData from "../../utils/API";
import { Grid, Typography } from "@mui/material";
import ResultsCard from '../Card/ResultsCard';

const Matches = () => {

    const [data, setData] = useState(null);
    // same api call as used to render results 
    useEffect(() => {
        const fetchDataAsync = async () => {
            const responseData = await fetchData();
            setData(responseData);
        };
        fetchDataAsync();
    }, []);
    if (!data) {
        return <div>Loading...</div>;
    }
    // when clicked look for items id in local storage and change its value to true. if unclicked it will be changed to false
    const matches = data.filter(p => {
        // returns all items in local storage wich have the value of true
        return localStorage.getItem(p.id) === 'true'
    })

    // using same logic as in resultsCards.js for quiz results rendering 
    const savedArray = matches.map((perResult) =>
        <ResultsCard plant={perResult} />
    )
    return (
        <LayoutTwo>
            <MainHome>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    Your Saved Matches
                </Typography>
                <Grid container={true} spacing={4}>
                    {savedArray}
                </Grid>
            </MainHome >
        </LayoutTwo >
    )
}

export default Matches;