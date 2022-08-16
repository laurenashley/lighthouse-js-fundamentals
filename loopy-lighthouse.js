for (let x = 100; x < 201; x++) {
  // Determine result by divisibility
  let result = (x % 3 === 0) ? 'Loopy' : (x % 4 === 0 ? 'Lighthouse' : x);

  // if both conditions are true combine result message
  if (x % 3 === 0 && x % 4 === 0) {
    result = 'LoopyLighthouse';
  }

  // print result
  console.log(result);
}



