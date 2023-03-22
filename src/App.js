import React, { Component } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Button } from "@mui/material";
import TestPage from './components/TestPage';

// overriding material ui's default themes 
const theme = createTheme({
  palette: {
    primary: {
      main: '#454B1B',
    },
    secondary: purple // purple is built in. All secondary colors (main, light and dark) will be this color
  },
  typography: {
    fontFamily: 'Delicious Handrawn',
    fontWeight: 400
  },
});

// show and hide componenets
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideHome: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideHome":
        this.setState({ showHideHome: !this.state.showHideHome })
        break;
      case "showHideTestPage":
        this.setState({ showHideTestPage: !this.state.showHideTestPage });
        break;
      case "showHideButton":
        this.setState({ showHideButton: !this.state.showHideButton })
        break;
      default:
        break;
    }
  }

  render() {
    const { showHideHome, showHideTestPage, showHideButton } = this.state;
    return (
      // wrap everything in theme provider 
      <ThemeProvider theme={theme}>
        {/* navbar, home and button all show */}
        {!showHideHome && <Navbar />}
        {!showHideHome && <Home />}
        {!showHideButton && (
          // navbar, home page and button are hidden when button is clicked
          <Button variant="contained" color="primary" onClick={() => this.hideComponent("showHideHome") & this.hideComponent("showHideTestPage") & this.hideComponent("showHideButton")} >
            Click Me!
          </Button>)}
        {showHideTestPage && <TestPage />}
      </ThemeProvider >
    )
  }
}

export default App;
