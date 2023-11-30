// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// you will got the output without it is out and it is global

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// var is display out of the scope and because of it we can fase problem while coding with so many people

// let a = 100;
// if (true) {
//   let a = 10;
//   let b = 20;
//   console.log("block scope value of a ", a);
// }
// console.log("global scope value of a ", a);

// Nested Scope

function one() {
  const username = "rahul";

  function two() {
    const website = "youtube";

    console.log(username);
  }

  //   console.log(website);

  //   two();
}

// one();

if (true) {
  const username = "Rahul";

  if (username === "Rahul") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

addone(5);

function addone(value) {
  return value + 1;
}

const addTwo = function (value) {
  return value + 2;
};

addTwo(5);
