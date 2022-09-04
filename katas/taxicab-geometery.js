const blocksAway = function(directions) {
  // break directions up into arrays of step pairs
  let stepsArr = [],
      counter = 0,
      x = 0,
      y = 0,
      currentDir = '',
      result = {};
  
  for (let x = 0; x < directions.length; x += 2) {
    let y = x + 1;
    stepsArr.push([directions[x], directions[y]]);
  }

  // Assign value to east (y) and north (x) per reach step
  for (step of stepsArr) {
    console.log(counter, step);
    const direction = step[0];
    switch (counter) {
      case  0:
        if (direction === 'right') {
          y = step[1];
          currentDir = 'east';
          result['east'] = y;
          result['north'] = 0;
        } else {
          x = step[1];
          currentDir = 'north';
          result['east'] = 0;
          result['north'] = x;
        }
        break;
      case 1:
        if (currentDir === 'east' && direction === 'right') {
          y = y += step[1];
          result['east'] = y;
        } else if (currentDir === 'east' && direction === 'left') {
          x = x += step[1];
          result['north'] = x;
          currentDir = 'north';
        } else if (currentDir === 'north' && direction === 'right') {
          y = y += step[1];
          result['east'] = y;
          currentDir = 'east';
        }
        break;
    }

    console.log(x, y, currentDir);
    counter++;
  }

  return result;



};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));