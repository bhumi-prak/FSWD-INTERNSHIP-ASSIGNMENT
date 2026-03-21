const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const students = [
    { name: "Amit", course: "AI" },
    { name: "Riya", course: "FullStack" },
    { name: "Rahul", course: "DataScience" }
  ];
  res.json(students);
});

module.exports = router;