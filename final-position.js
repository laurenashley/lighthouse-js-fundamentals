// Store directions in an array
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

// Find position of
function finalPosition(directions){
  let positionX = 0;
  let positionY = 0;
  let finalPosition = [];

  // Assign coordinates per direction
  for (let direction of directions) {
    switch (direction){
      case 'north':
        positionY++;
        break;
      case 'east':
        positionX++;
        break;
      case 'south':
        positionY--;
        break;
      case 'west':
        positionX--;
        break;
    }
  }
  finalPosition.push(positionX, positionY);
  return finalPosition;
}

console.log(finalPosition(moves));