const repeatNumbers = function(data) {
  let result = [];

  // Loop through arrays in data
  for (let item in data) {
    const array = data[item];
    let nums = [];

    // Add first value of each array to nums arrya
    for (let i = 0; i < array[1]; i++) {
      nums.push(array[0]);
    }

    // Add nums array without commas to result array
    result.push(nums.join(''));
  }

  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));