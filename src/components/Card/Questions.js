import React, {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Q from "../Questions/questions.json"



export default function Questions({questionNumber, displayQuestionCard, storePreference}) {

    const [questionImage, setImage] = useState(null);

    useEffect(() => {
      async function loadImage() {
        const newimage = await import(`../Images/${Q[questionNumber].imageURL}`);
        setImage(newimage.default);
      }
      loadImage();
    }, [questionNumber]);




    const handleClick = (e) => {
    
        displayQuestionCard()
        const thisButton = e.target;
        const property = thisButton.getAttribute("data-property");
        const value = thisButton.getAttribute("data-value");
        storePreference(property, value);
      };
    

  return (

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            // Assign the imported image to the image prop
            image={questionImage} alt="picture"
            title="Kitchen Plant" 
          />
          <CardContent>
            <Typography
              sx={{ m: 2 }}
              color="primary"
              variant="contained"
              gutterBottom={true}
              component="div"
            >
              SUNLIGHT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Q[questionNumber].question}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ m: 2 }}
              color="primary"
              variant="contained"
              size="small"
              data-property={Q[questionNumber].filter.right.property}
              data-value={Q[questionNumber].filter.right.searchVal}
              onClick={handleClick}
            >
              {" "}
              {Q[questionNumber].filter.right.btnTxt}
            </Button>
            <Button
              sx={{ m: 2 }}
              color="warning"
              variant="contained"
              size="small"
              data-property={Q[questionNumber].filter.left.property}
              data-value={Q[questionNumber].filter.left.searchVal}
              onClick={handleClick}
            >
              {Q[questionNumber].filter.left.btnTxt}
            </Button>
          </CardActions>
        </Card>
  );
}
