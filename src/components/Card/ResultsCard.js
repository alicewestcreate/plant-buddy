// Result card, recieves a prop call plant. This is an item from the API. 
// It the maps the properites from the plant item to the results card. 
import React, { useState } from "react";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import Matched from "./Matched";

export default function ResultsCard({ plant }) {
  const [isMatched] = useState(false);

  // For items that do not have a name, return plant. 
  const checkName = (plant) => {
    if (plant["Common name"] && plant["Common name"].length > 0) {
      return plant["Common name"][0];
    } else {
      return "Plant";
    }
  };

  return (
    <Card sx={{ width: 270, m: 2 }}>
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
