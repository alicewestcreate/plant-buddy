import React, { useState } from "react";
import { Card, Grid, Typography, CardMedia, CardContent, Button } from "@mui/material";
import Matched from "./Matched";

export default function ResultsCard({ plant, unique}) {
  console.log("key",unique);

  const [isMatched, setMatched] = useState(false);
  // console.log(isMatched);

  // const handleClick = (e) => {
  //   console.log(e);
  // }

  const checkName = (plant) => {
    if (plant["Common name"] && plant["Common name"].length > 0) {
      return plant["Common name"][0];
    } else {
      return "Plant";
    }
  }


  return (
  
      <Card key={unique} sx={{ width: 270, m: 2}}>
        <CardMedia
          sx={{ height: 220 }}
          image={plant.Img}
          alt="picture"
          title="Kitchen Plant"
        />
        <CardContent>
          <Matched state={isMatched} />
          <Typography
            color="text.secondary"
            variant="body1"
            gutterBottom={true}
            component="div"
          >
            {"Hello, my name is"}
          </Typography>
          <Typography
            color="text.secondary"
            variant="h3"
            gutterBottom={true}
            component="div"
          >
            {checkName(plant)}
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

  );
}
