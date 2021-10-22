/* A guessing game where the user has to guess a secret number.
* After every guess the program tells the user whether their number was too large or too small.
* At the end, the number of tries needed should be printed.
* Inputting the same number multiple times should only count as one try.
* If the user provides an answer which isn't a number, print an error message and do not count this as a try.*/

let prompt = require("prompt-sync")();

const numberGuesser = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(number)
  let count = 0;
  let curAnswer = '';

  for (i = 0; i >=0; i++) {
    let answer = prompt("Guess a number: ");

    if (answer != number) {  
      if (isNaN(answer)) {
        if (answer === curAnswer) {
          console.log('Already Guessed!');
        }
        else {
          curAnswer = answer;
          console.log('Not a number! Try again!');
        }
      }
      else if (answer < number) {
        if (answer === curAnswer) {
          console.log('Already Guessed!');
        }
        else {
          curAnswer = answer;
          console.log('Too Low!');
          count ++;
        }
      }
      else if (answer > number) {
        if (answer === curAnswer) {
          console.log('Already Guessed!');
        }
        else {
          curAnswer = answer;
          console.log('Too High!');
          count ++;
        }
      }
    }
    else {
      count ++;
      console.log(`You got it! You took ${count} attempts!`);
      break;
    }
  }    
}
numberGuesser();