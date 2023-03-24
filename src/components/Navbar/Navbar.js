import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }
    render() {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    Plant Buddy
                  </Typography>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
        );
      }
    }

export default Navbar;