import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePersistedState } from '../../hooks';

// takes n id of the item
const Matched = ({ id }) => {

    const [isMatched, setMatched] = usePersistedState(id, false);

    // toggles between outline and filled heart icon
    const Component = isMatched ? FavoriteIcon : FavoriteBorderIcon;

    return (
        <div>
            <Component sx={{ cursor: "pointer" }}
                // when clicked will toggle between isMatched being true or false
                onClick={() => setMatched(!isMatched)} />
        </div>
    );
}

export default Matched;
