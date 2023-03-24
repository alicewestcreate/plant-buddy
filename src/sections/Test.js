// import { Button } from "@mui/material";
// // import { all } from "q";
// import React, { useState, useEffect } from "react";
// // import { fetchData } from "../utils/API";

// const Test = () => {
//   const [data, getData] = useState([]);

//   const fetchData = async () => {
//     console.log("CALLING API");
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "ff52e6ea90msh98675f4426d6153p185e62jsn7e1ccd3fb3f6",
//         "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
//       },
//     };
//     fetch("https://house-plants2.p.rapidapi.com/all", options)
//       .then((response) => response.json())
//       .then((data) => getData(data));
//   };

//   //   console.log(data);



// let count = 0
//   //////////////////////////////////////////////////////////////////////
// // Filter results, pass through the data, the property that is being targeted and the value we're filtering against.
//     const filterResults = (data, property, value) => {
//         console.log(property);
//         count = count + 1
//         console.log(count);
    
//       function filterByProperty(plant) {
//         // If the plant property is equal to value in question, return ture.
//         if (plant[property] === value) {
//         //   console.log(plant);
//           return true;
//         } else {
//           return false;
//         }
//       }
//       // All true returns are stored into this variable.
//       let filteredResultsArray = data.filter(filterByProperty);

//       // For each true return, add a new properity called priority points, set the value to one.
//       filteredResultsArray.forEach((result) => {
//         result["Priority Points"] = 1;
//       });
//       console.log(property, filteredResultsArray);
//       return filteredResultsArray;
//     };


// //////////////////////////////////////////////////////////////////////
// // Call the function to get filtered results.

// const compareResults = (allFilteredResults, filteredResultsArray) => {
//     console.log("results to filter",filteredResultsArray);
//     console.log("compare against",allFilteredResults);

//       const matches = allFilteredResults.filter((item) => {
//         filteredResultsArray.includes(item)
//       });
//       console.log("matches",matches);
//       matches.forEach(match => {
//         console.log("MARCH", match);
        
//       });



//     };


// // Variables that simulate the questions.
//     let questions = ["Do you kill plants", "Do you water plants"]
//     let allFilteredResults = null;
  
// questions.forEach((question, index) => {
//     console.log(question);
//     let property = ["Appeal", "Avaibility"];
//     let value = ["Robustness", "Seasonal" ];
//     let filteredResultsReturned = filterResults(data, property[index], value[index]);

//     if (allFilteredResults === null) {
//         allFilteredResults = [];
//         allFilteredResults.push(filteredResultsReturned);
//         console.log("1",allFilteredResults);
//       } else {
//         compareResults(allFilteredResults, filteredResultsReturned);
//       }


//   });
  


  
  
 


//   return (
//     <Button variant="contained" color="primary" onClick={fetchData}>
//       Start Quiz
//     </Button>
//   );
// };

// export default Test;

// // Start Quiz

// // 1. Fetch API Data
// // Return a variable with all result inside.

// // 2. Ask a question about a property
// // Return the value of the property

// // 3.  Filter Function(data + property)
// // Pass through the data, and filter out plants that have that property.

// // 4. Add new key "priorityPoint" with value of 1
// // Return filteredResults

// // 5.  If (allFilteredRsults EQUAL Null)
// // Push results to allFilteredResults
// // 6/ Go to function >> Compare Results (results & allFilteredResults )
// // if a result === a filteredResult
// // Add 1 Priority Point to filteredResult.PriorityPoint
// // return (without adding it to the allFiltered Results)
// // else push result to allFiltedResults

// // Object:

// // Question: "Are you a plant whisper or plant killer"
// // Choices: [[true, Whisper], [false, Killer] ]
// // Image: ""
// // PropertyTrue: Appeal >> +1 priortyPoint
// // PropertyFalse: Prunity >> -1 priorityPoint

// // valuesWanted: [true, [val, val, val]]
// // valuesUnwanted: [false, [val, val, val]]
