import { styled } from '@mui/material/styles';
import backgroundImage from '../Images/Monstera.jpg';

// can use props to change styles aka color - https://mui.com/system/styled/

export const Main = styled("main")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 10px rgba(255, 255, 255, 0.5)'
            : '0 0 10px rgba(0, 0, 0, 0.5)',
}));


export const MainContent = styled("div")({
    flexGrow: 1
})