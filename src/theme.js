import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

// overriding material ui's default themes 
const theme = createTheme({
    typography: {
        fontFamily: 'Delicious Handrawn',
        fontWeight: 400
    },
});


export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: '#E5D3B3',
                },
                text: {
                    primary: grey[100],
                    secondary: '#013220'
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: '#013220'
                },
                background: {
                    default: '#013220',
                    paper: '#013220',
                },
                text: {
                    primary: grey[100]
                },
            }),
    },
    //font design
    typography: {
        fontFamily: 'Delicious Handrawn',
        fontWeight: 400
    },
});





export default theme;