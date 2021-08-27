//Looping through the array
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// a while loop:
console.log("The contents of ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// a for loop:
console.log("The contents of ingredients:");
for (let i = 0; i<ingredients.length; i++) {
  console.log(ingredients[i]);
}
// a for loop backwards:
console.log("The contents of ingredients:");
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}