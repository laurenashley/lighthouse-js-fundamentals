const makeCase = function (input, c) {
  let noSpaces = input.replace(/[^A-Z0-9]/ig, ' ').split(' ');
  let result = [];

  // remove special characters/punctuation
  // let string = input.replace(/[^A-Z0-9]/ig, ' ');
  // console.log(string);

  const makeCamelCase = function(noSpaces) {
    for (let i = 0; i < noSpaces.length; i++) {
      result.push( i === 0 ?  noSpaces[i] : noSpaces[i].charAt(0).toUpperCase() + noSpaces[i].slice(1));
    }
    result = result.join('');
  };

  const makeTitleCase = function(input) {
    input = input.split(' ');
    for (let i of input) {
      result.push(i.charAt(0).toUpperCase() + i.slice(1));
    }
    result = result.join(' ');
  };

  switch (c) {
    case 'camel':
      makeCamelCase(noSpaces);
    break;
    case 'pascal':
      makeCamelCase(noSpaces);
    break;
    case 'snake':
      result = input.replace(/[^A-Z0-9]/ig, '_');
    break;
    case 'kebab':
      result = input.replace(/[^A-Z0-9]/ig, '-');
    break;
    case 'title':
      makeTitleCase(input);
    break;
    case 'vowel':
      result = input.replace((/[aeiou]/g, function(e) {
        console.log(e);
        return e.toUpperCase();
      }));
    break;
  }

  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));