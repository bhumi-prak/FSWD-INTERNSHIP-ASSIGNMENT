const express = require("express");
const router = express.Router();

// Sample data
let students = [
  { id: 1, name: "Arjun", course: "AI" },
  { id: 2, name: "Priya", course: "Web" }
];

// GET all students
router.get("/", (req, res) => {
  res.json(students);
});

// GET student by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// ADD student
router.post("/add", (req, res) => {
  const { name, course } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);
  res.json({ message: "Student added", student: newStudent });
});

module.exports = router;