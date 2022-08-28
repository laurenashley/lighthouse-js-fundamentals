const organizeInstructors = function(instructors) {
  let result = [];

  // Create array of unique courses
  let courses = [...new Set(instructors.map((obj) => obj.course))];

  courses.forEach(function(course){
    let names = [];

    // Look through instructors objects for names with matching course
    for (let i of instructors) {
      if (i.course === course) {
        names.push(i.name);
      }
    }
    
    // add names array as value to course key in result obj
    result[`${course}`] = names;
  });

  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));