const urlEncode = function(text) {
  for (let i of text) {
    if(i === ' ') i = '%20';
  }

  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));