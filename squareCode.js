/*Given a string message, composes it to a square code with number of rows and columns,
* then codes it by reading the columns going up to down left to right */

const squareCode = message => {
  
  message = message.replaceAll(' ', ''); //removes whitespaces
  let c = Math.ceil(Math.sqrt(message.length)); //number of columns,the sq.rt of message length
  let newMessage = [];
  let result = '';

  //copy message string to newMessage array of strings with 'c' number of chars into each string
  for(ch = 0; ch < message.length; ch += c) {
    newMessage.push(message.substr(ch, c));
  } 

  //copy newMessage array to result string up to down left to right, dividing substrings by a space
  for (let j = 0; j < c; j++) {
    for (let i = 0; i < newMessage.length; i++) {
      if (newMessage[i][j] === undefined) { //num of chars in a substring may be less
        break;
      }
      else {
        result += newMessage[i][j];
      }
    }
    result += ' ';
  } 
  return result;
};

console.log(squareCode("chill out"));  
console.log(squareCode("feed the dog")); 
console.log(squareCode("have a nice day")); 
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"))

/*expected output
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau */