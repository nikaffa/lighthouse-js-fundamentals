const range = (start, end, step) => {
//creating a new empty array
  let array = [];  
  //first checking parameters
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)) {
    return []; 
  }

  //iterating over the numbers and adding to the array
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }

  return array;
};
//checking the output
console.log(range(0, 8, 2));