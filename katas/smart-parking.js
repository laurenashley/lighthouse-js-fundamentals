const whereCanIPark = function (spots, vehicle) {
  let result;
  for (let row in spots) {
    let thisRow = spots[row];
    let y = row;
    let x;
    let spot;

    // Switch through vehicle types and .find() matching spot 
    switch (vehicle) {
      case 'regular':
        spot = thisRow.find(spot => spot === 'R');
        // console.log(vehicle, spot, spots[row].indexOf(spot));
        break;
      case 'small':
        spot = thisRow.find(spot => spot === 'R' || spot === 'S');
        // console.log(vehicle, spot, spots[row].indexOf(spot));
        break;
      case 'motorcycle':
        spot = thisRow.find(spot => spot === spot.toUpperCase());
        // console.log(vehicle, spot, spots[row].indexOf(spot));
        break;
    }

    // Set x to index of found spot, if no spot found set x to 0
    x = thisRow.indexOf(spot) === -1 ? 0 : thisRow.indexOf(spot);

    // As long as both x and y are not 0 set result to xy pair, otherwise set to false
    result = (x !== 0 && y !== 0) ? [x,y] : false;
    
    // Stop looping if spot was found
    if (spot !== undefined) {
      break;
    }
  }
  
  return result;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));