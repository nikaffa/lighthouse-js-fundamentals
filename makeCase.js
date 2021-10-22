/* Given a string, convert it into different kinds of case styles, in order of priority:
* (1)camel, pascal, snake, kebab, title,
* (2)vowel, consonant,
* (3)upper, lower,
* or a combination of them*/

//main function
const makeCase = (input, casing) => { 
  let arr = [];
  let string = '';
  if (typeof casing === 'string') {
    arr.push(casing) //convert string casing to array
  }
  else {
    arr = casing;
  }
  //outer loop: loop through casing array
  for (let el = 0; el < arr.length; el++) { 
    if(string.length > 0) {
      input = string;
      string = '';
    }
    //loop through priority (1) case functions and assign to a string the cased input
    for (let i = 0; i < input.length; i++) { 
      switch(arr[el]) {
        case 'camel':
          string = camel(input);
          break;
        case 'pascal':
          string = pascal(input);
          break;
        case 'snake':
          string = snake(input);
          break;
        case 'kebab':
          string = kebab(input);
          break;
        case 'title':
          string = title(input);
          break;
      }
    };
    //take result string and assign it to priority (2) case
    for (let i = 0; i < input.length; i++) {
      switch(arr[el]) {
        case 'vowel':
          string = vowel(input);
          break;
        case 'consonant':
          string = consonant(input);
          break;
      }
    };  
    //take result string and assign it to priority (3) case
    for (let i = 0; i < input.length; i++) {
      switch(arr[el]) {
        case 'upper':
          string = upper(input);
          break; 
        case 'lower':
          string = lower(input);
          break;
      }
    }
  }
  return string; //return result string
};


//helper functions
const camel = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') { 
      string += input[i+1].toUpperCase(); //replace whitespace with the next uppercased char 
      i++; //skip the lowercased char that was replaced
    }
    else {
      string += input[i];
    }
  }
  return string;
};
const pascal = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      string += input[i].toUpperCase(); //uppercase the first letter
      i++;
    }
    if (input[i] === ' ') { 
      string += input[i+1].toUpperCase(); 
      i++; 
    }
    else {
      string += input[i];
    }
  }
  return string;
};
const snake = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') { 
      string += '_'; 
    }
    else {
      string += input[i];
    }
  }
  return string;
};
const kebab = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') { 
      string += '-'; 
    }
    else {
      string += input[i];
    }
  }
  return string;
};
const title = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      string += input[i].toUpperCase(); 
      i++;
    }
    if (input[i] === ' ') { 
      string += ' ';
      string += input[i+1].toUpperCase(); 
      i++; 
    }
    else {
      string += input[i];
    }
  }
  return string;
};
const vowel = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    let v = input.charCodeAt(i); //converting a char to ASCII Chart
    if (v == 97 || v == 101 || v == 105 || v ==111|| v == 117 || v == 121) { //if found a vowel
      string += input[i].toUpperCase(); 
    }
    else {
      string += input[i];
    }
  }
  return string;
};
const consonant = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    let c = input.charCodeAt(i); //converting a char to ASCII Chart
    if (c == 97 || c == 101 || c == 105 || c == 111|| c == 117 || c == 121) { //if found a consonant
      string += input[i]; 
    }
    else {
      string += input[i].toUpperCase();
    }
  }
  return string;
};
const upper = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    string += input[i].toUpperCase();
  }
  return string; 
};
const lower = input => {
  let string = '';
  for (let i = 0; i < input.length; i++) {
    string += input[i].toLowerCase();
  }
  return string; 
};


//input
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));