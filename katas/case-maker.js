const camelCase = function(input) {
  let result = [];
  let noSpaces = input.split(' ');

  for (let i = 0; i < noSpaces.length; i++) {
    result.push( i === 0 ?  noSpaces[i] : noSpaces[i].charAt(0).toUpperCase() + noSpaces[i].slice(1));
  }

  return result.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));