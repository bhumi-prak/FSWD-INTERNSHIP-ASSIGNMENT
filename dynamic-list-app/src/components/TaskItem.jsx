import React from "react";

function TaskItem({ task, index, deleteTask, toggleTask }) {

  return (
    <li className={task.completed ? "completed" : ""}>

      <span onClick={() => toggleTask(index)}>
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>
        Delete
      </button>

    </li>
  );
}

export default TaskItem;