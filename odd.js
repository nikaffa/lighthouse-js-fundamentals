//checks whether the number is even or odd
const isOdd = function (number) {
  if(number % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}
console.log(`3 is odd: ` + isOdd(3));