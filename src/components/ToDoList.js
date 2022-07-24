// ToDoList Component

// Imports:
// - react
import React, { useState } from "react";
// - components
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import FilterBtn from "./FilterBtn";

// CONSTANTS
// - We'll use this object as an argument to our
//   filter function which we will run on our toDoList
//   state(see taskList variable below)
const FILTERS = {
  All: () => true,
  Active: (task) => !task.complete,
  Completed: (task) => task.complete,
};
const FILTER_NAMES = Object.keys(FILTERS);

export default function ToDoList({
  taskCompleteStatus,
  toDoList,
  addToDo,
  deleteTask,
  clearCompleted,
}) {
  // ----------------------------------------------------
  // Filter state for our tasks: All, Active, Completed
  const [activeFilter, setActiveFilter] = useState("All");

  // ----------------------------------------------------
  // - apply filter to our toDoList and then map through
  //   our filtered tasks already
  // - map over our toDoList array and return
  //   ToDo components with necesarry props passed to them

  const taskList = toDoList.filter(FILTERS[activeFilter]).map((item) => {
    return (
      <ToDo
        key={item.id}
        item={item}
        taskCompleteStatus={taskCompleteStatus}
        deleteTask={deleteTask}
      />
    );
  });
  // ----------------------------------------------------
  // Create button components for each of our filter

  const filterBtns = FILTER_NAMES.map((name) => {
    return (
      <FilterBtn key={name} name={name} setActiveFilter={setActiveFilter} />
    );
  });
  // ----------------------------------------------------
  // We're using this variable to track remaining tasks
  //   and show them to user.
  const tasksAmount = toDoList.filter((task) => {
    return !task.complete;
  }).length;
  // ----------------------------------------------------

  return (
    <div className="ToDoList">
      {/* to-do form (create a new task) */}
      <ToDoForm toDoList={toDoList} addToDo={addToDo} />
      {/* to-do list */}
      <div className="ToDoList__tasklist__wrapper">
        {taskList}
        {/* track items left and clear completed section */}
        <div className="ToDoList__bottom-bar">
          <div className="ToDoList__bottom-bar__spans">
            <span className="ToDoList__bottom-bar__spans__items-left">{`${tasksAmount} items left`}</span>
            <span
              className="ToDoList__bottom-bar__spans__clear-completed"
              onClick={clearCompleted}
            >
              Clear Completed
            </span>
          </div>
        </div>
      </div>
      {/* filter section */}
      <div className="ToDoList__Filter">{filterBtns}</div>
    </div>
  );
}
