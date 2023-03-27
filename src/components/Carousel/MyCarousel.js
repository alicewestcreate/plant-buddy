import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import Cards from '../Card/Cards';
import { Paper, Box } from '@mui/material';



function CardWrapper() {
    return (
        // The Paper component serves as a container for the card
        // with a background image and some basic styling
        <Paper sx={{position: 'relative', minWidth: '50vh', minHeight: '100vh', mx: 'auto', background: 'url(./Images/kitchen-plant.jpg)'}}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <Cards />
            </Box>
        </Paper>
    )

}

export default CardWrapper;

