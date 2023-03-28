import React, {useState} from "react";
import { Card, Grid, Typography, CardMedia, CardContent, Button} from "@mui/material";
import Matched from "./Matched";



export default function ResultsCard({ plant }) {
  console.log(plant);
  const [isMatched, setMatched] = useState(false);
  console.log(isMatched);

  const handleClick = (e)=> {
    console.log(e);
  }



  return (
    <Grid item={true}>
      <Card sx={{ width: 270 }}>
        <CardMedia
          sx={{ height: 220 }}
          // Assign the imported image to the image prop
          image={plant.Img}
          alt="picture"
          title="Kitchen Plant"
        />
        <CardContent>
            <Matched state={isMatched}/>
          <Typography
            color="text.secondary"
            variant="body1"
            gutterBottom={true}
            component="div"
          >
            {"Hello, my name is"}
          </Typography>
          <Typography
            color="primary"
            variant="h3"
            gutterBottom={true}
            component="div"
          >
            {plant["Common name"][0]}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {"You'll find me in the "}
            {plant.Family}
            {" family"}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {"Reason's why you will love me:\n"}
            {"\nmy"}
            {plant.Appeal} {"\nI need watering"} {plant.watering}
            {" family"}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}