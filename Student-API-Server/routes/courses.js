const express = require('express');
const router2 = express.Router();

router2.get('/', (req, res) => {
  const courses = ["AI", "ML", "FullStack", "DataScience"];
  res.json(courses);
});

module.exports = router2;