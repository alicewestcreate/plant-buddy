import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Matched = ({state}) => {

    const matchAplant = () => {
        if (state === true) {
            return <FavoriteIcon/>
        }else {
            return <FavoriteBorderIcon/>
        }
    }

    return (
        <div>
            {matchAplant()}
        </div>
    );
}

export default Matched;
