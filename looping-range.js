function range(start, end, step) {
  let rangeArray = [];
  if ((typeof start === 'number') && (typeof end === 'number') && (typeof step === 'number')) {
    if (start < end && step > 0) {
      for(let x = start; x <= end; x += step) {
        rangeArray.push(x);
      }
      return rangeArray;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));