const camelCase = input => {
  let string = ''; //creating an empty string

  for (let i = 0; i < input.length; i++) { //iterating over the string
    if (input[i] === ' ') { //if found a whitespace
      string += input[i+1].toUpperCase(); //replace it with the next uppercased char 
      i++; //skip the lowercased char that was replaced
    }
    else {
      string += input[i];
    }
  }
  return string;
};