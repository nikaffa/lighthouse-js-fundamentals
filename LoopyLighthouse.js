//Loop over number from 100 to 200 and print them with the exceptions
for (let number = 100; number <= 200; number ++) {
  let output = "";
  //if a miltiple of 3
  if (number % 3 === 0) {
    output += "Loopy";
  }
  //if a multiple of 4
  if (number % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? number : output);
}