// ToDo Component

import React from "react";

export default function ToDo({ item, deleteTask, taskCompleteStatus }) {
  return (
    <div className="ToDo">
      {/* ToDo Form */}
      <form className="ToDo__form">
        {/* Label */}
        <label className="ToDo__form__label" htmlFor={`todo-${item.id}`}>
          {item.task}
          {/* Input */}
          <input
            type="checkbox"
            id={`todo-${item.id}`}
            className={`ToDo__form__label__input`}
            name="complete"
            checked={item.complete}
            onChange={() => taskCompleteStatus(item.id)}
          />
        </label>
        {/* Delete Button - delete task when clicked*/}
        <button type="button" id={item.id} onClick={deleteTask}>
          x
        </button>
      </form>
    </div>
  );
}
