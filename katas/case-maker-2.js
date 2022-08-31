const makeCase = function (input, c) {
  let result = [];

  const makeCamelCase = function(input) {
    let noSpaces = input.replace(/[^A-Z0-9]/ig, ' ').split(' ');
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

  const caseSwitch = function(c) {
    switch (c) {
      case 'camel':
        makeCamelCase(input);
      break;
      case 'pascal':
        makeCamelCase(input);
      break;
      case 'snake':
        console.log(c, 'result is ', result);
        result = result !== [] ? result[0].replace(/[^A-Z0-9]/ig, '_') : input.replace(/[^A-Z0-9]/ig, '_');
      break;
      case 'kebab':
        result = input.replace(/[^A-Z0-9]/gi, '-');
      break;
      case 'title':
        makeTitleCase(input);
      break;
      case 'vowel':
        result = input.replace(/[aeiou]/gi, (e) => { 
          return e.toUpperCase();
      });
      break;
      case 'consonant':
        result = input.replace(/[bcdfghjklmnpqrstvwxys]/gi, (e) => { 
          return e.toUpperCase();
      });
      break;
      case 'upper':
        console.log('result is ', result, input);
        result = result === [] ? input.toUpperCase() : result[0].toUpperCase();
        console.log(result);
      break;
    }
  }

  const caseIsArray = Array.isArray(c);
  const caseArray = caseIsArray ? c : [];

  caseIsArray ? caseArray.forEach(e => caseSwitch(e)) : caseSwitch(c);

  return result;
}


console.log(makeCase("this is a string", ["snake", "upper"]));

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));