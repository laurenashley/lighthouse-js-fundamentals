const checkAir = function (samples, threshold) {
  // Create array of dirty samples
  const dirtyNum = samples.filter(word => word === 'dirty');

  // divide length of dirty sample array to length of original array
  const dirtiness = dirtyNum.length / samples.length;

  // Returns air quality based on if dirtness is above or below threshold
  return dirtiness < threshold ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))