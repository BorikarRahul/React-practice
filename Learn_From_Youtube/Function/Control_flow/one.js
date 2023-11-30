// if condition
// if (true) {}

//if else
// if (false) {
// } else {
//   // this will get printed
// }
//else if
// if (false) {
// } else if (false) {
// } else if (true) {
// } else {
// }

// Switch case condition

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

// const month = 3;

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("April");
//     break;

//   default:
//     console.log("Default Value");
//     break;
// }


// Thruthy and falsy

// const userEmail = [];

// if(userEmail){
//   console.log("Got User Email");
// } else{
//   console.log("Don't have user email");
// }


// Truthy and falsy value = 

// falsy values = false, 0, -0, BigInt 0n, "", null, undefined, NaN= Not a Number

// Truthy values = "0" Zero Under String, "false" under String, " ", [], {}, function(){}, 

// how ro check array 

// if(userEmail.length === 0){
//   console.log("Array is empty");
// }  

// const emptyObj = {};


// Calling the Object  check the keys in return it will return array and then we compare with  === 0;

// if(Object.keys(emptyObj).length === 0){
//   console.log("Object is empty");
// }



// false == 0;
// o/p True

// false == "";
// o/p True;

// 0 == "";
// o/p True;

// Logical Operator 

// && 
// ||

// Nullish Coalescing Operator (??):=> null / undefined

let vall;
// when we are working with Database and firebase, some problem are responding two value or null value on that you will find the diffeculty in it so this operator will help you on that situation;
//This is a call back which o/p  will get reply

// vall = 5 ?? 10    // 5

//vall = null ?? 10;    // 10

//vall = undefined ?? 15; // 15

vall = null ?? 10 ?? 20; 



// console.log(vall);

//----------------------------------------------------------------

// Terniary Operator

// condition ? true : false;

const iTe = 100;
iTe <= 80 ? console.log("less than 80") : console.log("greater than 80");




