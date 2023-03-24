
// import { Button } from "@mui/material";
// import { all } from "q";
// import React, { useState, useEffect } from "react";
// import { fetchData } from "../utils/fetchData";

// const Test2 = () => {
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


// let slicedData = data
// // console.log(slicedData);


// let minifyData = slicedData.map(condensedData)
// let property = ["Appeal", "Growth", "Categories" ] // Properties to select
// let value = ["Robustness", "Slow", "Palm" ]; // Values to filter against 

// function condensedData(item) {
//     const {id, Categories, Appeal, Growth } = item
//     const minifiedObject = {id, Categories, Appeal, Growth}
//     return minifiedObject
// }


// // console.log(minifyData);


// const question1 = "Appeal"
// const question2 = "Growth"
// const question3 = "Categories"

// const answer1 = "Robustness"
// const answer2 = "Slow"
// const answer3 = "Palm"


// const matches = []
// const matchesTop = []

// minifyData.forEach(entry => {
//     entry.priority = 0
//     entry.match = false

//     if (entry[question1] === answer1) {
//         entry.priority += 1   
//         entry.match = true
//     }
//     if (entry[question2] === answer2) {
//         entry.priority += 1   
//         entry.match = true
//     }
//     if (entry[question3] === answer3) {
//         entry.priority += 1   
//         entry.match = true
//     }
//     if (entry.match === true) {
//         matches.push(entry)
//     }
//     else {
//         return
//     }
// });

// console.log(matches);

// function sortByPriority(a, b) {
//     return b.priority - a.priority;
//   }
  

//   const sortedMatches = matches.sort(sortByPriority);
//   const slicedResults = sortedMatches.slice(0,10)
//   console.log(slicedResults);
  







// // console.log(matches);
// // console.log(matchesTop);







  


// return (
//   <Button variant="contained" color="primary" onClick={fetchData}>
//     Start Quiz
//   </Button>
// );
// };

// export default Test2;

