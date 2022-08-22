const numberOfVowels = function(data) {
  return data.match(/[aeiou]/gi).length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));