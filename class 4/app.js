// var cleanCities = ["makkah", "madina", "karachi", "lahore"];
// var userCity = "peshawar";
// var cityFound = false;

// for (var i = 0; i <= 4; i++) {
//   if (cleanCities[i] === userCity) {
//     cityFound = true;
//     break;
//   }
// }

// if (cityFound == false) {
//   console.log("City not found");
// } else {
//   console.log("Congrats");
// }

// var firstNames = ["abu bakar", "umer", "usman", "ali"];
// var lastNames = ["abdullah", "ahmed", "daniyal", "owais"];

// for (var i = 0; i < 4; i++) {

//   for (var j = 0; j < 4; j++) {
//     console.log(firstNames[i] + " " + lastNames[j]);
//   }

//   console.log("FIRST LOOP Iteration complete");

// }

// var userCity = prompt("enter your city", "karachi");

// if (userCity.toUpperCase() === "KARACHI") {
//   alert("yes its karachi");
// } else {
//   alert("no its not karachi");
// }

// var myName = "Muhammad Nameer"
// var selectedString = myName.slice(4)
// // console.log(myName[3])
// console.log(selectedString)

// var myName = "Muhammad Nameer";
// console.log("MY NAME LENGTH IS : ", myName.length);
// for (var i = 0; i < myName.length; i++) {
//   console.log(myName[i]);
// }

var text =
  "apple grapes oranges water melon World War II. green blue red white pink orange brown";

// i = 0

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// }
// console.log(text);
console.log(text.indexOf("melon"));
