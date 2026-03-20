// Array of student objects

let students = [
  {
    name: "Rahul",
    marks: [80, 75, 90]
  },
  {
    name: "Anjali",
    marks: [85, 88, 92]
  },
  {
    name: "Sumana",
    marks: [70, 78, 82]
  }
];

// Function to calculate average
function calculateAverage(marks) {

  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return total / marks.length;
}

// Display results
students.forEach(function(student) {

  let average = calculateAverage(student.marks);

  console.log("Student:", student.name);
  console.log("Marks:", student.marks);
  console.log("Average:", average);
  console.log("----------------------");

});