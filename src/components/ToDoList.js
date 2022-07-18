// ToDoList Component

// Imports:
// - react
import React from "react";
// - components
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import Filter from "./Filter";

export default function ToDoList({
  toDoList,
  addToDo,
  deleteTask,
  changeTaskStatus,
}) {
  // ----------------------------------------------------

  // - map over our toDoList array and return
  //   ToDo components with necesarry props passed to them

  const task = toDoList.map((item) => {
    return <ToDo key={item.id} item={item} deleteTask={deleteTask} />;
  });

  // ----------------------------------------------------

  return (
    <div className="ToDoList">
      <ToDoForm toDoList={toDoList} addToDo={addToDo} />
      {task}
      <Filter />
    </div>
  );
}
