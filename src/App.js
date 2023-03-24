import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/Sections/About';
import MyCards from './components/Card/Cards';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import Test from "./sections/Test"

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
      name: 'React',
      showHideHome: false,
      showHideAbout: false,
  
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case 'showHideHome':
        this.setState({ showHideHome: !this.state.showHideHome });
        break;
      case 'showHideAbout':
        this.setState({ showHideAbout: !this.state.showHideAbout });
        break;
      // ... (other cases)
      default:
        break;
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Home /><MyCards /></>} />
            <Route path="/about" element={<About />} />
            {/* Add other routes as needed */}
          </Routes>
          <Test />
          <Footer />
        </Router>
      </ThemeProvider>
    );
  }
  
}    

export default App;
