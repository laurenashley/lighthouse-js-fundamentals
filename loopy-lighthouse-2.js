function loopyLighthouse(range, multiples, words){
  for (let x = range[0]; x <= range[1]; x++) {
    // Determine result by divisibility
    let result = (x % multiples[0] === 0) ? words[0] : (x % multiples[1] === 0 ? words[1] : x);

    // if both conditions are true combine result message
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      result = words[0] + words[1];
    }
  
    // print result
    return result;
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));