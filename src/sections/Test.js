import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import {fetchData} from "../utils/API";

const Test = () => {
  const [data, getData] = useState([]);

  const fetchData = async () => {
    console.log("CALLING API");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ff52e6ea90msh98675f4426d6153p185e62jsn7e1ccd3fb3f6",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };
    fetch("https://house-plants2.p.rapidapi.com/all", options)
      .then((response) => response.json())
      .then((data) => getData(data));
  };

//   console.log(data);

  // Variables that simulate the questions. 
  let property = "Appeal"
  let value = "Robustness"


  // Filter results, pass through the data, the property that is being targeted and the value we're filtering against. 
  const filterResults = (data, property, value) => {
    function filterByProperty(plant) {

        // If the plant property is equal to value in question, return ture. 
        if (plant[property] === value) {
            console.log(plant);
            return true
        } else {
            return false
        }
    }

    // All true returns are stored into this variable. 
    let filteredResultsArray = data.filter(filterByProperty);

    // For each true return, add a new properity called priority points, set the value to one. 
    filteredResultsArray.forEach((result) => {
        result["Priority Points"] = 1 
    })
    return filteredResultsArray
  }


// Call the function to get filtered results. 
let filteredResultsArray = filterResults(data, property, value)



 console.log(filteredResultsArray);
  





//   let allFilteredItems = []
//   const getFilterItems = (data) => {

//             // function to check even numbers
//             function filterByProperty(property) {
//               // console.log("PROP",property.Appeal);
//                 if (property.Appeal === "Robustness" )
//                 return true;
//               // else
//               //   return false;
//             }
  
//
//       let filteredResults = data.filter(filterByProperty);
//       // console.log("filtered",filteredResults);

//       filteredResults.forEach(result => {
//         result["PriorityPoints"] = 1
//         // console.log(result);
//       });
//       setFilter(filteredResults)
//       // allFilteredItems.push(filter)
//       // console.log("ALL", allFilteredItems);
//       return filter

//   }



  return (
    <Button variant="contained" color="primary" onClick={fetchData}>
      Start Quiz
    </Button>
  );
};

export default Test;














// Start Quiz

// 1. Fetch API Data  
    // Return a variable with all result inside. 


// 2. Ask a question about a property 
    // Return the value of the property


// 3.  Filter Function(data + property)
  // Pass through the data, and filter out plants that have that property. 

// 4. Add new key "priorityPoint" with value of 1
    // Return filteredResults



// 5.  If (allFilteredRsults EQUAL Null)
    // Push results to allFilteredResults 
// 6/ Go to function >> Compare Results (results & allFilteredResults )
        // if a result === a filteredResult 
            // Add 1 Priority Point to filteredResult.PriorityPoint
            // return (without adding it to the allFiltered Results)
        // else push result to allFiltedResults 



// Object: 

// Question: "Are you a plant whisper or plant killer"
// Choices: [[true, Whisper], [false, Killer] ]
// Image: ""
// PropertyTrue: Appeal >> +1 priortyPoint
// PropertyFalse: Prunity >> -1 priorityPoint

// valuesWanted: [true, [val, val, val]]
// valuesUnwanted: [false, [val, val, val]]