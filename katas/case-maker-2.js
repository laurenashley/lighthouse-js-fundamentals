const makeCase = function (input, caseType) {
  let result = '';
  const caseIsArray = Array.isArray(caseType);

  const camelCase = function(input) {
    let noSpaces = input.replace(/[^A-Z0-9]/ig, ' ').split(' ');
    let output = [];

    for (let i = 0; i < noSpaces.length; i++) {
      output.push( i === 0 ?  noSpaces[i] : noSpaces[i].charAt(0).toUpperCase() + noSpaces[i].slice(1));
    }
    result = output.join('');
  };

  const titleCase = function(input) {
    input = input.split(' ');
    let output = [];
    for (let i of input) {
      // Question: I'm unclear why my first word isn't uppercase. 
      output.push(i.charAt(0).toUpperCase() + i.slice(1));
    }
    result = output.join(' ');
  };

  const caseSwitch = function(caseType) {
    // First priority: Camel, Pascal, Snake, Kebab, Title
    switch (caseType) {
      case 'camel':
        camelCase(input);
      break;
      case 'pascal':
        camelCase(input);
      break;
      case 'snake':
        result = (result !== '') ? result.replace(/[^A-Z0-9]/ig, '_') : input.replace(/[^A-Z0-9]/ig, '_');
      break;
      case 'kebab':
        result = input.replace(/[^A-Z0-9]/gi, '-');
      break;
      case 'title':
        titleCase(input);
      break;
    }

    // Second priority: Vowel, Consonant
    switch (caseType) {
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
    }

    // Third priority: Upper, Lower
    switch(caseType) {
      case 'upper':
        result = (result !== '') ? result.toUpperCase() : input.toUpperCase();
      break;
      case 'lower':
        result = (result !== '') ? result.toLowerCase() : input.toLowerCase();
      break;
    }
  }

  caseIsArray ? caseType.forEach(e => caseSwitch(e)) : caseSwitch(caseType);

  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["snake", "upper"]));