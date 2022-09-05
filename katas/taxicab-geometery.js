const blocksAway = function(directions) {
  const right = 'right',
        left = 'left',
        east = 'east',
        west = 'west',
        north = 'north'
        south = 'south';
  let stepsArr = [],
      currentDir = '',
      result = {east: 0, north: 0};
  

  // break directions up into arrays of step pairs
  for (let x = 0; x < directions.length; x += 2) {
    let y = x + 1;
    stepsArr.push([directions[x], directions[y]]);
  }

  // Assign value to east (y) and north (x) per each step, adjust current direction
  for (step of stepsArr) {
    const direction = step[0];

    // Set direction and value of first step
    if (stepsArr.indexOf(step) === 0 && direction === right) {
      currentDir = east;
      result.east = step[1];
    } else if (stepsArr.indexOf(step) === 0 && direction === left) {
      currentDir = north;
      result.north = step[1];
    } else {

      if (currentDir === east && direction === right) {
        currentDir = south;
        result.north -= step[1];
      } else if (currentDir === east && direction === left) {
        currentDir = north;
        result.north += step[1];
      } else if (currentDir === north && direction === right) {
        currentDir = east;
        result.east += step[1];
      } else if (currentDir === north && direction === left) {
        currentDir = west;
        result.east -= step[1];
      } else if (currentDir === west && direction === left) {
        currentDir = south;
        result.north -= step[1];
      } else if (currentDir === west && direction === right) {
        currentDir = north;
        result.north += step[1];
      } else if (currentDir === south && direction === left) {
        currentDir = east;
        result.east += step[1];
      } else if (currentDir === south && direction === right) {
        currentDir = west;
        result.east -= step[1];
      } 
    }
  }

  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));