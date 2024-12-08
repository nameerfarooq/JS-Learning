// Js learning class 2

// var userFruit = prompt("enter your favourite fruit", "grapes");

// if (userFruit === "apple") {
//   alert("RED");
// } else if (userFruit === "banana") {
//   alert("YELLOW");
// } else if (userFruit === "grapes") {
//   alert("GREEN");
// } else {
//   alert("Invalid fruit");
// }

// multilple conditions in if else

// AND OPERATOR &&
// false false = false
// false true = false
// true false = false
// true true = true

// OR OPERATOR  ||
// false false = false
// false true = true
// true false  = true
// true true  = true

// var cityName = "karachi";
// var provinceName = "sindh";
// var countryName = "dubai";
// if (cityName === "karachi" && provinceName === "sindh" && countryName === "pakistan" ) {
//   alert("Congratulations, you belong to karachi");
// } else {
//   alert("Not found");
// }

// var cityName = "karachi";
// var provinceName = "punjab";
// var countryName = "dubai";
// var age = 21;
//true                    //true                    //false                   //true
// if (cityName === "karachi" && provinceName === "sindh" && (countryName === "pakistan" || age > 20)) {
//   alert("Congratulations, you belong to karachi");
// } else {
//   alert("Not found");
// }
// if (cityName === "karachi") {
//   alert("Karachi found");
//   if (provinceName === "sindh") {
//     alert("sindh found");
//   } else {
//     if (age < 10) {
//       alert("age is less than 10");
//     } else {
//       alert("Invalid age");
//     }
//     alert("Sindh not found");
//   }
// } else {
//   alert("karachi not found");
// }

// var fruit0 = "apple"
// var fruit1 = "banana"
// var fruit2 = "grapes"
// var fruit3 = "oranges"
// var fruit4 = "grape fruit"
// var fruit5 = "mango"

// alert(fruit0)

// var generalItems = [];
// generalItems[0] = "apple"
// generalItems[1] = "banana"
// generalItems[2] = "grapes"
// generalItems[3] = "apple"
// alert(generalItems);

// var students = ["abdullah", "mudassir", "moaaz", "shafi"];

// alert(students)

// students.pop()

// alert(students) //abdullah , mudassir, moaaz

// students.push("amna","zain")

// alert(students) 


// coding problem


var list=[]
var x=prompt("fruits or colors")
if(x=="fruits"){
    list.push("apple","mango","orange")
    // alert(list)
}else if(x=="colors"){
    list.push("red","green","blue")
    // alert(list)
}
else{
    
    // alert("")
    list.push("invalid ans")
}

alert(list)