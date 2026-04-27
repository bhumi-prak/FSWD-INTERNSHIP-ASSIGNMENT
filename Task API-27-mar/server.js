const express = require("express");
const app = express();

app.use(express.json());

// Sample data
let tasks = [
  { id: 1, title: "Learn Node", completed: false },
  { id: 2, title: "Build API", completed: false }
];


// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


// GET task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});


// CREATE new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.json({ message: "Task added", task: newTask });
});


// UPDATE task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title || task.title;
  task.completed =
    req.body.completed !== undefined ? req.body.completed : task.completed;

  res.json({ message: "Task updated", task });
});


// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;

  tasks = tasks.filter(t => t.id != id);

  res.json({ message: "Task deleted" });
});


// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});