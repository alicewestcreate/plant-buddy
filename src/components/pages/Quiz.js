import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigation } from 

import Box from "@mui/material/Box";
import { Button } from "@mui/material";


import Layout from '../Layout/Layout';
import Questions from "../Card/Questions";
import Q from "../Questions/questions.json"




const Quiz = () => {
    let [questionIndex, setQuestion] = useState(0);
  const [showQuestion, setShowQuestions] = useState(true);
  const [showResultsButton, setShowResults] = useState(false);

  const [allProperties, setProperties] = useState([])
  const [allValues, setValues] = useState([])

  const navigate = useNavigate()
//   const navigation = useNavigation();



  const displayQuestionCard = () => {
    const NumOfQuest = Q.length - 1;
    if (questionIndex >= NumOfQuest) {
      setShowQuestions(false);
      setShowResults(true)
    }
    let addOne = questionIndex + 1;
    setQuestion(addOne);
  };


  const storePreference = (property, value) => {
    let combindProperties = allProperties.concat(property)
    let combindValue = allValues.concat(value)

    setProperties(combindProperties)
    setValues(combindValue)
    console.log(combindProperties);
    console.log(combindValue);

  }
 
  const sendPreferences = () => {
    // navigation.navigate('Matches', { allProperties })

  }

    return (
        <Layout>
      {/* Create a flex container to center the card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        {showQuestion && (
          <Questions
            questionNumber={questionIndex}
            displayQuestionCard={displayQuestionCard}
            storePreference={storePreference}
          />
        )}
        {showResultsButton && <Button variant="contained" color="primary" onClick={() => {navigate("/results"); sendPreferences()} } >
                Reveal Your Matches
            </Button>}
      </Box>
    </Layout>
    )

}

export default Quiz;