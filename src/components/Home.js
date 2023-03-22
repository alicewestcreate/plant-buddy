import React from "react";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                Find Your Perfect Plant Match
            </Typography>
            <Button variant="contained" color="primary">
                Click Me!
            </Button>
        </>
    )

}

export default Home;