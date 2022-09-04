const squareCode = function(message) {
  // remove spaces from input string
  const noSpaces = message.replaceAll(' ', '');
  // Find number of output strings needed
  const sqrt = Math.ceil(Math.sqrt(noSpaces.length));
  // Set counter, container for each coded string, and result array
  let counter = 0;
  let coded = [];
  let result = [];

  // Create n (sqrt) number of coded strings
  for (let i = 0; i < sqrt; i++) {
    // Push every n char sqrt length apart of string to coded container
    for (let x = 0 + counter; x < noSpaces.length; x += sqrt) {
      coded.push(noSpaces[x]);
    }

    // Push joined coded string, increase counter by 1, reset coded string container
    result.push(coded.join(''));
    counter++;
    coded = [];
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));