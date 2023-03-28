import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Matched = ({ state }) => {
    // console.log("plant is",plant);

    const [isMatched, setMatched] = useState(false);

    const matchAplant = () => {
        if (isMatched === true) {
            return (
                <FavoriteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        setMatched(false);
                    }}
                />
            );
        } else {
            return (
                <FavoriteBorderIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        setMatched(true);

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
