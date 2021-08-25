//calculate the age based on current age
const ageCalculator = function (name, yearOfBirth, currentYear) {
  let number = currentYear - yearOfBirth;
  return (name + " is " + number + " years old.");
};

console.log(ageCalculator("Suzie", 1983, 2015));