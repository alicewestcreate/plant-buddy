import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';

// Styled Carousel component
const StyledCarousel = styled(Carousel)(({ theme }) => ({
    '& /carousel .slide': {
        backgroundColor: theme.palette.background.default,
    },
    '& .carousel .slide img': {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
    },
    '& .carousel .control-prev, & .carousel .control-next': {
        backgroundColor: 'rgba(0, 0, 0, 0.3',
        borderRadius: '50%',
    },
    '& .carousel .control-dots .dot': {
        background: theme.palette.primary.main,
    },
    '& .carousel .control-dots .dot': {
        background: theme-palette.primary.main,
    },
    '& .carousel .legend' : {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        textAlign: 'center',
    },
}));

export default StyledCarousel;

