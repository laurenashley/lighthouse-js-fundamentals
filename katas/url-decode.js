const urlDecode = function(text) {
  const objects = text.split('&');
  let result = {};

  objects.forEach(e => {
    const key = e.split('=')[0];
    const value = e.split('=')[1];

    result[key] = value.replaceAll('%20', ' ');
  });

  return result;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);