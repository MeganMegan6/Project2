const myArray = ["alligator", "monkey", "hippo", "lion"];

//challenge#1
//loop over the array and console.log each animal
myArray.forEach((animal) => console.log(animal));

//challenge#2
//loop over the array using the .find() method and return the "hippo" element
//Then capture the result in a variable named waterMammal;
myArray.find((animal) => animal === "hippo");
const waterMammal = myArray.find((animal) => animal === "hippo");
console.log("water mammal --> ", waterMammal);




console.log('Hi');

//comment