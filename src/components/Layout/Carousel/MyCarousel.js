import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import StyledCarousel from './Carousel.styled';

function MyCarousel() {
    return (
        <StyledCarousel showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} swipeable={false}>
            <div>
                <img src="../components/Images/kitchen-plant" alt="Kitchen Plant" />
                <p className="legend">Kitchen Plant</p>
            </div>
        </StyledCarousel>
    )
}

export default MyCarousel;



