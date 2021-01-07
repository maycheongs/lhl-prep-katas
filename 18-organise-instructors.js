const organizeInstructors = function(instructors) {
  const output = {};
  for (let personObj of instructors) {
    let course = personObj.course;
    let name = personObj.name;
    output[course] ? output[course].push(name) : output[course] = [name];
  }
  return output;
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