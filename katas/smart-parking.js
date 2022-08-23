const whereCanIPark = function (spots, vehicle) {
  let result;
  for (let row in spots) {
    let y = row;
    let x;
    let spot;
    let type;

    console.log(vehicle);


    
    // I might be doing this backwards, try doing vehicle type logic before finding the spot



    spot = spots[row].find(col => col === col.toUpperCase()); 
    x = spots[row].indexOf(spot);

    // As long as both x and y are not 0 set result to xy pair, otherwise set to false
    result = (x !== 0 && y !== 0) ? [x,y] : false;
    
    // Check if spot was found
    if (spot !== undefined) {
      // Stop looping through spots if spot was found
      if (spot === spot.toUpperCase()) {
        switch (vehicle) {
          case 'regular':
            type = ['R'];
            break;
          case 'small':
            type = ['S', 'R'];
            break;
          case 'motorcycle':
            type = ['M', 'S', 'R'];
            break;
        }
        // Find match in type array
        console.log(spot, ' type ',type.find(i => i === spot));
        if (spot === type.find(i => i === spot)) {
          console.log('true');
        } else if (type.find(i => i === spot) === undefined) {
          console.log('false');
        }
        break;
      }
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