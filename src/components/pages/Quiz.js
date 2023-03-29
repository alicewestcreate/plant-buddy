
// Quiz page, imports a json file containing questions.
// It then renders a question at a time, where the use makes a selection.
// That selection is then tracked and passed through the results page.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material";
import Layout from "../Layout/Layout";
import Questions from "../Card/Questions";
import Q from "../Questions/questions.json";
// import image1 from "../Images/cactus-1.jpg";
// import image2 from "../Images/cactus-main.jpg";


const Quiz = () => {
  let [questionIndex, setQuestion] = useState(0); // Tracks which index to render from the questions.json file.
  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.
  const [showResultsButton, setShowResults] = useState(false); // Show results when true.

  const [allProperties, setProperties] = useState([]); // Store all properties selected during the quiz.
  const [allValues, setValues] = useState([]); // Store all values selected during the quiz

  const navigate = useNavigate(); // Imported from react dom.

  // Decide which question to display.
  // Get the length of question inside the question.json file.
  // If the questionIndex is not greater than the numOfQuest
  // Then add one to the questionIndex, and render that question.
  const displayQuestionCard = () => {
    // const NumOfQuest = Q.length - 1;
    if (questionIndex >= 4) {
      setShowQuestions(false);
      setShowResults(true);
    }
    let addOne = questionIndex + 1;
    setQuestion(addOne);
  };

  // Function that is passed down into the quiz card component.
  // For each question, store the selected property and value assoicated to that question.
  const storePreference = (property, value) => {
    let combindProperties = allProperties.concat(property);
    let combindValue = allValues.concat(value);

    // Update useState with the new values each time.
    setProperties(combindProperties);
    setValues(combindValue);
  };

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
          {/* Background image Left */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                minHeight: "100vh",
                backgroundImage: `url("../Images/${Q[questionIndex].img.left}")`,
                // backgroundImage: `url("${image2}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          {/* Background image Right */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                minHeight: "100vh",
                backgroundImage: `url("../Images/${Q[questionIndex].img.right}")`,
                // backgroundImage: `url("${image1}")`,

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
            {/* Whilse showQuestion is true, render Questions */}
            {showQuestion && (
              <Questions
                questionNumber={questionIndex}
                displayQuestionCard={displayQuestionCard}
                storePreference={storePreference}
              />
            )}
            {/* While showResultsButton is true, render button. */}
            {/* - Navigate to next page, passing the states from this page to the next. */}
            {showResultsButton && (
              <Button className="button-75"
                variant="contained"
                onClick={() => {
                  navigate("/results", { state: { allProperties, allValues } });
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
