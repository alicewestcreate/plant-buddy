import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import Cards from '../Card/Cards';
import { Paper, Box } from '@mui/material';



// function MyCarousel() {
//     return (
//         <StyledCarousel showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} swipeable={false}>
//             <div>
//                 <img src="../Images/kitchen-plant.jpg" alt="Kitchen Plant" />
//                 <p className="legend">Kitchen Plant</p>
//             </div>
//         </StyledCarousel>
//     )
// }

// export default MyCarousel;


function CardWrapper() {
    return (
        <Paper sx={{position: 'relative', minWidth: '50vh', minHeight: '100vh', mx: 'auto', background: 'url(./Images/kitchen-plant.jpg)'}}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <Cards />
            </Box>
        </Paper>
    )

}

export default CardWrapper;

