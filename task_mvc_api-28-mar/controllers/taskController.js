let tasks = require("../models/taskModel");

// GET all tasks
exports.getTasks = (req, res) => {
  res.json(tasks);
};

// GET task by ID
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

// CREATE task
exports.createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.json({ message: "Task created", task: newTask });
};

// UPDATE task
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title || task.title;
  task.completed =
    req.body.completed !== undefined ? req.body.completed : task.completed;

  res.json({ message: "Task updated", task });
};

// DELETE task
exports.deleteTask = (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(t => t.id != id);

  res.json({ message: "Task deleted" });
};