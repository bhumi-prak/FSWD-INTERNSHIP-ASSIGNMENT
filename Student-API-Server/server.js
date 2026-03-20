const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');
const pageRoutes = require('./routes/pages');

// Use routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/', pageRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
