const sumLargestNumbers = function(data) {
  // Find highest value in array
  let firstMaxValue = Math.max(...data);
  // Get index of highest value
  let firstIndex = data.indexOf(firstMaxValue);

  // Create new array with first highest value removed
  data.splice(firstIndex, 1);
  // Find next highest value
  let secondMaxValue = Math.max(...data);

  // Return sum of 2 highest values of array
  return firstMaxValue + secondMaxValue;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));