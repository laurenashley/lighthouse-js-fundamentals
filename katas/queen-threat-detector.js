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
  let queens = [];

  // Get queens' coordinates
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 1) {
        queens.push(x, y);
      }
    }
  }

  // Extract each queen's coords
  const firstQueen = [queens[0], queens[1]];
  const secondQueen = [queens[2], queens[3]];

  // Check vertical or horizontal threat: if queens share either axis
  const isVerticalThreat = (firstQueen[0] === secondQueen[0]);
  const isHorizontalThreat = (firstQueen[1] === secondQueen[1]);  
  // Check diagonal threat: if sum of first coords equals sum of second coords
  const isDiagonalThreat = (firstQueen[0] + firstQueen[1]) === (secondQueen[0] + secondQueen[1]);
  let result;

  isVerticalThreat || isHorizontalThreat || isDiagonalThreat ? result = true : result = false;

  return result;
}

let whiteQueen = [1, 5];
let blackQueen = [5, 2];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
// Table is required to see the chess board output without unexplained line breaks in the array rows
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));