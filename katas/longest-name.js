const instructorWithLongestName = function(instructors) {
  // get length of longest name. Unsure if this is appropriate use of map()
  let length = Math.max(...instructors.map(e => e.name.length));
  let result;

  // Find object that contains the name that matches length
  for (let e of instructors) {
    if (e.name.length === length) result = e;
  }
  
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));