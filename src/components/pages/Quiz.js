import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material";
import Layout from "../Layout/Layout";
import Questions from "../Card/Questions";
import Q from "../Questions/questions.json";
import image1 from "../Images/cactus-1.jpg";
import image2 from "../Images/cactus-main.jpg";


const Quiz = () => {
  let [questionIndex, setQuestion] = useState(0);
  const [showQuestion, setShowQuestions] = useState(true);
  const [showResultsButton, setShowResults] = useState(false);

  const [allProperties, setProperties] = useState([]);
  const [allValues, setValues] = useState([]);
  const navigate = useNavigate();

  const displayQuestionCard = () => {
    const NumOfQuest = Q.length - 1;
    if (questionIndex >= NumOfQuest) {
      setShowQuestions(false);
      setShowResults(true);
    }
    let addOne = questionIndex + 1;
    setQuestion(addOne);
  };

  const storePreference = (property, value) => {
    let combindProperties = allProperties.concat(property);
    let combindValue = allValues.concat(value);
    
    setProperties(combindProperties);
    setValues(combindValue);
    console.log(combindProperties);
    console.log(combindValue);
  };


    // console.log(Q[0].images.left);

  const sendPreferences = () => {};

  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <Grid
          container
          spacing={0}
          sx={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            zIndex: 0,
          }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                minHeight: "100vh",
                // backgroundImage: `url("../Images/${Q[questionIndex].images.left}")`,
                backgroundImage: `url("${image2}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                minHeight: "100vh",
                  // backgroundImage: `url("../Images/${Q[questionIndex].images.right}")`,
                backgroundImage: `url("${image1}")`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
              maxWidth: "600px",
              m: "auto",
              zIndex: 1,
            }}
          >
            {showQuestion && (
              <Questions
                questionNumber={questionIndex}
                displayQuestionCard={displayQuestionCard}
                storePreference={storePreference}
              />
            )}
        {showResultsButton && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/results", { state: { allProperties, allValues}});
              sendPreferences();
            }}
          >
            Reveal Your Matches
          </Button>
            )}
          </Box>
        </Stack>
      </div>
    </Layout>
  );
};

export default Quiz;
