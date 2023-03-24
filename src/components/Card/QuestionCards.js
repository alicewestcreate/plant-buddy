import React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cactus from "../images/cactus.jpeg";
import questions from "../questions.json";

export default function QuestionCard() {
  const q = questions;

  const storePreference = (property, value) => {
    console.log(property, value);
  };

  const handleClick = (e) => {
    const thisButton = e.target;
    const property = thisButton.getAttribute("data-property");
    const value = thisButton.getAttribute("data-value");
    console.log(thisButton);
    console.log(property);
    console.log(value);
    storePreference(property, value);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={cactus} title="green iguana" />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {q[0].question}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ m: 2 }} color="primary" variant="contained" size="large">
          {q[0].Choices.ButtonLeft}
        </Button>
        <Button
          sx={{ m: 2 }}
          color="warning"
          variant="contained"
          size="large"
          data-property={q[0].Properties.PropRight}
          data-value={q[0].Values.ValRight}
          onClick={handleClick}
        >
          {q[0].Choices.ButtonRight}
        </Button>
      </CardActions>
    </Card>
  );
}
