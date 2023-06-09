import { styled } from '@mui/material/styles';
import backgroundImage from '../Images/plantsWhiteScreen.jpg';

// can use props to change styles aka color - https://mui.com/system/styled/

export const Main = styled("main")({
    display: "flex",
    flexDirection: "column",
    height: "120vh",
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
});


export const MainContent = styled("div")({
    flexGrow: 1
})