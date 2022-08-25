const multiplicationTable = function(maxValue) {
  let result = [];

  // Create rows
  for (let x = 1; x <= maxValue; x++) {
    let rowArray = [];

    // Create cloumns in row
    for (let y = 1; y <= maxValue; y++){
      // Do math, add value to row
      rowArray.push(y * x);
    }

    // Add row to table
    result.push(rowArray.join(' '));
  }

  return result.join('\n');
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));