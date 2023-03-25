import { Toolbar } from '@mui/material';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import backgroundImage from '../Images/heroImage2.jpg';

// can use props to change styles aka color - https://mui.com/system/styled/

export const Main = styled("main")({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
});


export const MainContent = styled("div")({
    flexGrow: 1
})
