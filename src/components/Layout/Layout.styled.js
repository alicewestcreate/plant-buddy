import { styled } from '@mui/material/styles';

// can use props to change styles aka color - https://mui.com/system/styled/

export const Main = styled("main")({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
})

export const MainContent = styled("div")({
    flexGrow: 1
})