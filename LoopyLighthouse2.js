//Loop over number within the given range and print them with the exceptions
const loopyLighthouse = (range, multiples, words) => {
  
  for (let number = range[0]; number <= range[1]; number ++) {
    if (number % multiples[0] === 0 && number % multiples[1] === 0) { //if multiple both factors 
      console.log(words[0] + words[1]);
    }
  
    else if (number % multiples[0] === 0) { //if a miltiple of the first factor
      console.log(words[0]);
    }
  
    else if (number % multiples[1] === 0) { //if a multiple of the second factor
      console.log(words[1]);
    }
    else {
      console.log(number);
    } 
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);