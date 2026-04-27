const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});