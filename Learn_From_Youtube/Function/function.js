const { add } = require("lodash");

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();

function addTwoNumbers(numb1, numb2) {
  console.log(numb1 + numb2);
}

// addTwoNumbers(3, null);

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(2, 4, 6, 7));

const newObject = {
  userName: "John",
  age: "16",
};

function userDetails(userObject) {
  console.log(
    `UserName: = ${userObject.userName} &&&&&&& his age: = ${userObject.age}`
  );
}

// userDetails({
//   userName: "Rahul",
//   age: 28,
// });

const newArrayDetail = [200, 180, 500, 300];
function userSelectedValue(secondValue) {
  console.log(secondValue[1]);
}

// userSelectedValue(newArrayDetail);
