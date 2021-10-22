/* Given an array of directions, that tell whether to turn left or right, and how many blocks to drive for,
*returns an object that calculates how far north and east those directions will take a driver from the starter point.
*Turn left means to make a 90° turn anticlockwise, and turn right means to make a 90° turn clockwise.*/

const blocksAway = directions => {
  //determining the starting coordinates
  let result = {
    east : 0,
    north : 0,
  };
  let n = 0;

  //looping over directions array
  for (let i = 0; i < directions.length; i+=2) {
    n = directions[i+1];
    if (result.east === 0 && result.north === 0 && directions[i] === 'left') { //starts from the left 
      result.north += n;
      n = directions[i+3];
      result.east += n;
      i += 2; // jump to the 4th element
    }
    else if (result.east === 0 && result.north === 0 && directions[i] === 'right') { //starts from the right 
      result.east += n;
      n = directions[i+3];
      result.north += n;
      i += 2; // jump to the 4th element
    }
    else if (result.east !== 0 && result.north !== 0 && directions[0] === 'left') { //if the 4th element is 'left'
      if (directions[i] === 'left') {
        result.north += n;
        if (directions[i+3]) { //if the next element exists
          n = directions[i+3]; //jump to the 7 th element
          i += 2; //jump to the 6th element
          if (directions[i] === 'left') {
            result.east -= n;
          }
          else  {
            result.east += n;
          }
        }  
      }
      else {
        result.north -= n;
        if (directions[i+3]) {
          n = directions[i+3]; //n is now the 7th element
          i += 2; //i is now the 6th element
          if (directions[i] === 'left') {
            result.east += n;
          }
          else  {
            result.east -= n;
          }
        }  
      } 
    }
    else if (result.east !== 0 && result.north !== 0 && directions[0] === 'right') { //alternatively, if the 4th element is 'right'
      if (directions[i] === 'left') {
        result.east -= n;
        if (directions[i+3]) {
          n = directions[i+3]; //n is now the 7th element
          i += 2; //i is now the 6th element
          if (directions[i] === 'left') {
            result.north -= n;
          }
          else  {
            result.north += n;
          }
        } 
      }
      else {
        result.east += n;
        if (directions[i] === 'left') {
          result.north += n;
        }
        else  {
          result.north -= n;
        }
      } 
    }  
  }
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1])); //{east: 1, north: 3}
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])); //{east: 3, north: 3}
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); //{east: 0, north: 0}