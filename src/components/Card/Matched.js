import React, {useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Matched = ({state}) => {
    // console.log("plant is",plant);

    // const [isMatched, setMatched] = useState(false);

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
