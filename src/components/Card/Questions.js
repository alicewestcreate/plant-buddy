import { useState, useEffect } from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Q from "../Questions/questions.json";

export default function Questions({
  questionNumber,
  displayQuestionCard,
  storePreference,
}) {
  const handleClick = (e) => {
    displayQuestionCard();
    const thisButton = e.target;
    const property = thisButton.getAttribute("data-property");
    const value = thisButton.getAttribute("data-value");
    storePreference(property, value);
  };


  return (
    <Box sx={{ maxWidth: 800, p: '3rem', background: 'rgba(255, 255,255, 0.4)' }}>
      <Box mb={"1rem"}>
        <Typography
          sx={{ m: 2 }}
          color='primary'
          variant='contained'
          gutterBottom={true}
          component='div'>
          {/* SUNLIGHT */}
        </Typography>
      </Box>
      <Box m={"1rem"}>
        <Typography variant='body2' color='text.secondary'>
          {Q[questionNumber].question}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* // this will need to be adjusted for mobile view */}
        <Stack direction='row'>
          <Button
            sx={{ m: 2 }}
            color='primary'
            variant='contained'
            size='small'
            data-property={Q[questionNumber].filter.right.property}
            data-value={Q[questionNumber].filter.right.searchVal}
            onClick={handleClick}>
            {" "}
            {Q[questionNumber].filter.right.btnTxt}
          </Button>
          <Button
            sx={{ m: 2 }}
            color='warning'
            variant='contained'
            size='small'
            data-property={Q[questionNumber].filter.left.property}
            data-value={Q[questionNumber].filter.left.searchVal}
            onClick={handleClick}>
            {Q[questionNumber].filter.left.btnTxt}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}