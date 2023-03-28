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
                    main: '#E7E8EA'
                },

                secondary: {
                    main: '#00352F'
                },
                background: {
                    default: '#E7E8EA',
                    paper: '#E7E8EA',
                },
                text: {
                    primary: grey[900],
                    secondary: '#E7E8EA'
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: '#00352F'
                },

                secondary: {
                    main: '#00352F'
                },
                background: {
                    default: '#00352F',
                    paper: '#00352F',
                },
                text: {
                    primary: grey[900],
                    secondary: '#E7E8EA'
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