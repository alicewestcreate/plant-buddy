import React, { Component } from 'react'

import Typography from '@mui/material/Typography';

class TestPage extends Component {
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
                    Test Page
                </Typography>
            </>
        )

    }
}

export default TestPage;