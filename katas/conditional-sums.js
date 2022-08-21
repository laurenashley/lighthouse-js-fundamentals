const addValues = function(accumulator, a) {
  return accumulator + a;
}

const conditionalSum = function(values, condition) {
  // Create new array containing values that meet the condition
  let conditionArray = [];

  for (let i of values) {
    let isEven = (condition === 'even') && (i % 2 === 0);
    let isOdd = (condition === 'odd') && (i % 2 !== 0);
    
    // Add values that meet condition to array
    if (isEven) {
      conditionArray.push(i);
    } else if (isOdd) {
      conditionArray.push(i);
    }

  }

  // If new array is empty set result to 0, otherwise set result to sum of all values
  let result = conditionArray === [] ? 0 : conditionArray.reduce(addValues, 0);

  return result;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));