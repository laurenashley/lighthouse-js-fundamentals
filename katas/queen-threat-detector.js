const generateBoard = function(white, black) {
  let board = [];

  // Create 8 x 8 board of 0's
  for (let x = 0; x < 8; x++) {
    let row = [];
    for (let y = 0; y < 8; y++) {
      row.push(0);
    }
    board.push(row);
  }

  // Place 1's on queens' positions
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;

  return board;
}

const queenThreat = function(board) {
  
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
// Table is required to see the board output without unexplained line breaks in the array rows
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));