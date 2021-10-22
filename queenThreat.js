/*Generates a chess board using an 8 by 8 array (8 arrays within an array)
  with two randomly positioned queens,
  then detects wether or not the queens can attack each other
  (queen can attack pieces which are on the same row, column, or diagonal).*/

/*Firstly, create a board.
*Given the location of two queens, returns a nested 8 by 8 array representing the board*/
const generateBoard = (whiteQueen, blackQueen) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let arr = [] 
    for (let j = 0; j < 8; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        arr.push(1);
      }
      else if (i === blackQueen[0] && j === blackQueen[1]) {
        arr.push(1);
      }
      else {
        arr.push(0);
      }
    }
    board.push(arr)
  }
  return board;
}

//Indicates whether or not the two queens can attack each other
const queenThreat = generatedBoard => {
  //get coordinates of the queens on the board
  let queenOne = [], queenTwo = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (generatedBoard[i][j] === 1 && queenOne.length === 0) {
        queenOne.push(i, j);
        j++;
      }
      if (generatedBoard[i][j] === 1 && queenOne !== [i, j]) {
        queenTwo.push(i, j);
      }
    }
  }
  //checks if the queens located on the same row or on the same column
  if (queenOne[0] === queenTwo[0] || queenOne[1] === queenTwo[1]) {
    return true;
  }
  /*checks if located on the same diagonal (in separate 'if' just for visibility reason)
  *the pattern for the diagonal is that |absolute values| of two queens coordinates' differences must be equal*/
  if (Math.abs(queenOne[0] - queenTwo[0]) === Math.abs(queenOne[1] - queenTwo[1])) {
    return true; //
  }

  return false;
};


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));