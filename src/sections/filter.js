

const array1 = [{ id: 1, name: "John", Priorty: 1  }, { id: 2, name: "Jane", Priorty: 1   }, { id: 3, name: "Bob", Priorty: 1   }, { id: 3, name: "Bob", Priorty: 1}];
const array2 = [{ id: 3, name: "Bob", Priorty: 1 }, { id: 4, name: "Alice", Priorty: 1 }];
// Add array 2 to array 1. But first, fitler out items, where 
const resultArray = array1.concat(array2).filter((item, index, array) => {
  // item["Priorty"] = 1
  // item.Priorty += 1
  // console.log("array",array)
   console.log(">>",index, item)
  let result = index === array.findIndex(obj => obj.id === item.id);
  console.log("array",array);
  
  return result
});

console.log(resultArray);


// The results array is equal to two concatented arrays.
// which is then filered using an indexof method. 
// The indexof method, returns true, if the condition inside is met. 
// the condition inside this indexof method, is checking 
// if the obj.id is equal to item.id.
// the item.id relates the filtered method 
// (which is looping through the first instance of the concated array)
// the obj.id relates to the indexof method. 
// (which is looping through the second instance of the concatend array)
// if there is match between the two loops, it returns true 
// the indexof will return the index of that item.
// it then checks the index of the item against the index returned from indexof.
// then it returns just the index of the first instance of that item. 
// and discards the index with matching condition. 

