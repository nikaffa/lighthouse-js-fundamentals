const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  //declaring x and y
  let x = 0;
  let y = 0;
  //looping over the moves array and changing the values
  for(let i in moves) {
    if(moves[i] === "north") {
      y += 1;
    }
    else if(moves[i] === "south") {
      y -= 1;
    }
    else if(moves[i] === "east") {
      x += 1;
    }
    else if(moves[i] === "west") {
      x -= 1;
    }
  }
  //returning array with values
  return [x, y];
};

const result = finalPosition(moves);
console.log(result);