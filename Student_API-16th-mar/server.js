const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

app.use(express.json());

// Middleware
app.use(logger);

// Routes
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});