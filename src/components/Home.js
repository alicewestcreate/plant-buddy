import React, { Component } from "react";// to shw and hide componenets
import Typography from '@mui/material/Typography';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return (
            <>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    Find Your Perfect Plant Match
                </Typography>
            </>
        )

    }
}

export default Home;