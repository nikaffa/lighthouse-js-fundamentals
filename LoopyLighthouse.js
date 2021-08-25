//Loop over number from 100 to 200 and print them with the exceptions
for (let number = 100; number <= 200; number ++) {
  //if both multiple of 3 and  4
  if (number % 3 === 0 && number % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  //if a miltiple of 3
  else if (number % 3 === 0) {
    console.log("Loopy");
  }
  //if a multiple of 4
  else if (number % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(number);
  } 
}