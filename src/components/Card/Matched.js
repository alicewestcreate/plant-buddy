import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



const Matched = ({ }) => {
    // console.log("plant is",plant);
    const [isMatched, setMatched] = useState(false);

    function saveMatched(boolean) {
        if (boolean === true) {
            console.log('clicked');

            localStorage.setItem('favouritePlaces', JSON.stringify('this would be the card data'));

        } else {
            console.log('unclicked');



        }
    }

    // button.on('click', function () {
    //     console.log('It worked')


    const matchAplant = () => {
        if (isMatched === true) {
            return (
                <FavoriteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        setMatched(false);
                        saveMatched(false)
                    }}
                />
            );
        } else {
            return (
                <FavoriteBorderIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        setMatched(true);
                        saveMatched(true)
                    }}
                />
            );
        }
    };


    return (
        <div>
            {matchAplant()}
        </div>
    );
}

export default Matched;
