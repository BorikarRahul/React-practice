// loop is also called Iteration
// Creat Variable with value = 0;
// Condition
// Increment
for (let i = 0; i <= 10; i++) {
  const element = i;
  if(element === 5){
    // console.log("5 is best number");
  }
  // console.log(element);
}

// console.log(element);


for(let i = 1; i <= 10; i++){
  // console.log(`Outer  Loop Value: ${i}`);
  for(let j = 1; j <= 10; j++){
    // console.log(`Inner Loop Value: ${j} and inner Loop ${i}`);
    // console.log(i + "*" + j + "=" + (i*j));
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}


// Keywords   Break and continue    === for a condition where we want to stop the loop iteration

for(let i = 1; i < 20; i++){

  if(i === 5){
    console.log(` Detected 5`);
    break;
  }
  
  console.log(` value of i is ${i}`);
  
}

for(let i = 1; i < 20; i++){

  if(i === 5){
    console.log(` Detected 5`);
    continue;
  }
  
  console.log(` value of i is ${i}`);
  
}





