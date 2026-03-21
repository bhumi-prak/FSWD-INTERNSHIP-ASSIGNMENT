import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((task, i) => i !== index);
    setTasks(updated);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className="container">

      <h1>Dynamic List App</h1>

      <TaskInput addTask={addTask} />

      <p>Total Tasks: {tasks.length}</p>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

    </div>
  );
}

export default App;