import { createTheme } from '@mui/material';
import { amber, grey, deepOrange, lightGreen } from '@mui/material/colors';

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
                    main: deepOrange[50],
                },
                text: {
                    primary: grey[900],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: grey[900]
                },
                background: {
                    default: grey[900],
                    paper: grey[900],
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