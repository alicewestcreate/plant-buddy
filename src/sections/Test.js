// import { Button } from "@mui/material";
// import { all } from "q";
// import React, { useState, useEffect } from "react";
// import { fetchData } from "../utils/API";

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



// let slicedData = data.slice(0,50)

// let condensedData = slicedData.map(minifyData)
// let property = ["Appeal", "Growth", "Categories" ] // Properties to select
// let value = ["Robustness", "Slow", "Palm" ]; // Values to filter against 


// function minifyData(item) {
//     const {Categories, Appeal, Growth } = item
//     const minifiedObject = {Categories, Appeal, Growth  }
//     return minifiedObject
// }
// // console.log(condensedData);



// // data = slicedData

// let count = 0
//   //////////////////////////////////////////////////////////////////////
// // Filter results, pass through the data, the property that is being targeted and the value we're filtering against.
//     const filterResults = (condensedData, property, value) => {
//         count = count + 1
//         // console.log(count);

    
//       function filterByProperty(plant) {
//         // If the plant property value is equal to property value in question, return ture.
//         if (plant[property] === value) {
//           return true;
//         } else {
//         // else discard the plant
//           return false;
//         }
//       }
//       // All true returns are stored into this variable.
//       let filteredResultsArray = condensedData.filter(filterByProperty);
//     //   console.log("New set of data from source \n", property, filteredResultsArray);

//       // For each true return, add a new properity called priority points, set the value to one.
//       filteredResultsArray.forEach((result) => {
//         result["Priority"] = 1;
//       });

//       return filteredResultsArray;
//     };


// //////////////////////////////////////////////////////////////////////
// // Call the function to get filtered results.

// const compareResults = (allFilteredResults, filteredResultsReturned) => {
//     // console.log("Main Pool So Far:",allFilteredResults);
//     // console.log("New Ones To Check",filteredResultsReturned);
    
//     const combindResults = allFilteredResults.concat(filteredResultsReturned)
//     console.log(" combine results? ",combindResults);
//     return combindResults

//     // function isEqual(obj1, obj2) {
//     //     if (obj1.Id === obj2.Id) {
//     //         return true

//     //     }
//     // }
        
//     // function hasDuplicates(arr) {
//     //     for (let i = 0; i < arr.length - 1; i++) {
//     //         for (let j = i + 1; j < arr.length; j++) {
//     //             if (isEqual(arr[i], arr[j])) {
//     //                 // console.log();
//     //                 // arr[i].Priority += 1 ;
//     //                 return arr[i]
//     //             }
//     //         }     
//     //     }
//     // return ;
//     // }

//     // let theDups = hasDuplicates(combindResults)

//     // console.log(theDups);
















//     // const resultsArray = allFilteredResults.concat(filteredResultsReturned).filter((item, index, array) => {
//     //     console.log("eachitem", item, index);
//     //     return  index === array.findIndex((obj) => obj.id === item.id)

//     // })

//     return 

//     };


// // Variables that simulate the questions.
//     let questions = ["Question One", "Question Two", "Question Three"]
//     let allFilteredResults = null;
  
// questions.forEach((question, index) => {
    
//     let filteredResultsReturned = [] // Reset the filterResultsReturned
//     // let property = ["Pruning", "Appeal", "Growth" ] // Properties to select
//     // let value = ["Never", "Robustness", "Slow" ]; // Values to filter against 
//     console.log(question, property[index], value[index]); // Quick log on the question, prorery and value in the loop.

//     // Take all the data, and filter it, using the property and value supplied. 
//     filteredResultsReturned = filterResults(condensedData, property[index], value[index]);
//     console.log("INDEX", index, filteredResultsReturned);
//     // When you return, / if the mainPool is null, push the latest set to the mainpool 
//     if (allFilteredResults === null) {
//         console.log("In if statement", index);
//         allFilteredResults = []
//         allFilteredResults = allFilteredResults.concat(filteredResultsReturned);
//         console.log("BBB", allFilteredResults);
   
//      // Else run a comparison, to check if there are any duplicates. 
//       } else {
//         console.log("In else statement", index);
//         console.log("Recent",filteredResultsReturned);
//         console.log("the pool",allFilteredResults);
//         allFilteredResults = allFilteredResults.concat(filteredResultsReturned);
//         console.log("ALL",allFilteredResults);

//         // const comparedFiltered = compareResults(allFilteredResults, filteredResultsReturned);
//         // console.log("Post Compare Result",comparedFiltered);
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
