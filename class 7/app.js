// function sayHello() {
//   alert("Hi User");
// }

// function mouseLeft() {
//   alert("Mouse removed");
// }

// function readInput() {
//   //   var userText = document.getElementById("myInput").value;
//   var userText = document.getElementById("myInput").value = "hello world";
// //   console.log(userText);
//     alert(userText);
// }

// function readParagraph(){
//     var para = document.getElementById("myPara").innerHTML = "abcdef"
//     alert(para)
// }

// var flagVariable = false;
// function main() {
//   if (flagVariable === false) {
//     showMore();
//     document.getElementById("myBTN").innerHTML = "show less";
//     flagVariable = true;
//   } else {
//     showLess();
//     document.getElementById("myBTN").innerHTML = "show more";
//     flagVariable = false;
//   }
// }
// function showMore() {
//   document.getElementById("myPara").innerHTML =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et delectus praesentium, minus fuga, veniam aspernatur est aliquam delenitiporro esse repudiandae, officia modi pariatur consequuntur nihil ipsam remnulla!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et delectus praesentium, minus fuga, veniam aspernatur est aliquam deleniti porro esse repudiandae, officia modi pariatur consequuntur nihil ipsam rem nulla!";
// }
// function showLess() {
//   document.getElementById("myPara").innerHTML =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et delectus praesentium, minus fuga, veniam aspernatur est aliquam deleniti porro esse repudiandae, officia modi pariatur consequuntur nihil ipsam remnulla!...";
// }

var plan1 = {
  name: "Basic",
  monthly: 3.99,
  disk: 100,
  data: 1000,
  pages: [10,20,30,40,50],
  autosubscriptionrenewal: function(){
    alert("HELLO WORLD")
  },
};

for(myitem in plan1){
    console.log(myitem + " " +plan1[myitem])
}

// plan1.autosubscriptionrenewal();
// console.log(plan1.data);
// console.log(plan1.pages);
// console.log(plan1);

// plan1["monthly"] = 100;
// console.log(plan1);
// plan1.monthly = 150;
// console.log(plan1);
