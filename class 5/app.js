// write a javascript loop that iterates  from 0 to 15. for each iteration it checks if the current number is odd or event, and displays a message on the screen
// Sample output:
// O is even
// 1 is odd
// 2 is even
// 3 is odd

// for (var i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i, " is even");
//   } else {
//     console.log(i, " is odd");
//   }
// }

// write a program to calculate average of marks for a class of 5 students, marks are given in an Array

// var studentMarks = [40, 98, 55, 90, 75];

// // output should be 71.6
// var sumOfMarks = 0; // 40
// for (var i = 0; i < studentMarks.length; i++) {
//   sumOfMarks = sumOfMarks + studentMarks[i];
// }

// var averageOfMarks = sumOfMarks / studentMarks.length;
// console.log(averageOfMarks);

// FizzBuzz

// write a Javascript program that iterates from 1 to 100, for multiples of 3 it prints "Fizz" and for multiple of 5 it prints "Buzz", for multiple of both 3 and 5 it prints "FizzBuzz"

// if multiple of 3 then print "Fizz"
// if multiple of 5 then print "Buzz"
// if multiple of 3 and 5 both then print "FizzBuzz"

// for (var i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, " FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i, " Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i, " Buzz");
//   }
// }

// var text =
//   "apple grapes oranges water melon World War II. green blue red white pink orange brown";

// console.log(text);

// var updatedText = text.replace("World War II", "the Second World War");

// console.log(updatedText);

// var myNum = 10.5
// console.log(Math.round(myNum))

// console.log(Math.random());

// var myString = "500.100";
// myString = parseInt(myString);
// console.log(myString);
// console.log(typeof myString);

// var myString = "500";
// var myString = Number(myString);
// console.log(myString);

// var myNumber = 100
// console.log(myNumber)
// console.log(typeof(myNumber))
// myNumber = myNumber.toString()
// console.log(myNumber)
// console.log(typeof(myNumber))

// var myNumber = 10.59675;
// console.log(myNumber.toFixed(3));

// var rightNow = new Date();
// var theDay = rightNow.getDay();
// console.log(theDay)

console.log("THIS IS LINE 1");
function greetUser() {
  var userName = prompt("Enter your name");
  alert("Welcome, " + userName);
}
console.log("THIS IS LINE 2");
console.log("THIS IS LINE 3");
console.log("THIS IS LINE 4");
console.log("THIS IS LINE 5");
greetUser();
console.log("THIS IS LINE 6");
console.log("THIS IS LINE 7");
console.log("THIS IS LINE 8");
greetUser();
console.log("THIS IS LINE 9");
console.log("THIS IS LINE 10");
greetUser();
console.log("THIS IS LINE 11");
