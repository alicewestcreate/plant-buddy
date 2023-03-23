import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

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

export default theme;