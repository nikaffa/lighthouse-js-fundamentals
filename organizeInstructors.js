//Given a list of instructors, creates an object to organize them based on their course.
const organizeInstructors = instructors => {
  const newInstructors = {}; 

  for (let i = 0 ; i < instructors.length; i++) {
    let x = instructors[i].course; //getting the name of course value
    if (newInstructors[x] === undefined) { //if there is no such property in the new object yet,
      newInstructors[x] = []; //create it and assign to empty array
    }
    newInstructors[x].push(instructors[i].name); //add the instructor's name to that array
  } 
  return newInstructors;
};

//input
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/* output
{
  CourseName: [instructors]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}*/