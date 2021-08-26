//how many hundreds fit it number
const howManyHundreds = number => {
  let modulo = number % 100;
  return (number - modulo) / 100;
};

//checking the result
console.log(howManyHundreds(520));