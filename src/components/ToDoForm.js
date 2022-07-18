// ToDoForm Component

import React, { useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDoForm({ addToDo }) {
  // Save our newly created to-do
  const [newToDo, setNewToDo] = useState("");

  console.log(newToDo);

  // ----------------------------------------------------

  // handleSubmit:

  // About
  // - cancel default behaviour of form submit
  // - run addToDo(newToDo)(see the func. in the App Component)
  //   in order to add new to-do to our to-do list
  // - then set newToDo state to back to an empty string
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(newToDo);
    setNewToDo("");
  };

  // ----------------------------------------------------

  // handleChange(e):

  // About:
  // - the function watches for any data introduced
  //   into our form, and sets it imidiatelly to our
  //   newToDo state.

  const handleChange = (e) => {
    setNewToDo(e.currentTarget.value);
  };

  // ----------------------------------------------------

  return (
    <div className="ToDoForm">
      {/* Form */}
      <form className="ToDoForm__form" onSubmit={handleSubmit}>
        {/* Label */}
        <label htmlFor="newToDo">
          {/* Checkbox */}
          <input type="checkbox" id="newTodo" />
          {/* Input */}
          <input
            type="text"
            value={newToDo}
            onChange={handleChange}
            placeholder="Create a new task..."
          />
        </label>
      </form>
    </div>
  );
}
