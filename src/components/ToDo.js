// ToDo Component

import React from "react";

export default function ToDo({ item, deleteTask, taskCompleteStatus }) {
  return (
    <div className="ToDo">
      {/* ToDo Form */}
      <form className="ToDo__form">
        {/* Label */}
        <label className="ToDo__form__label" htmlFor={`todo-${item.id}`}>
          <div
            className={
              item.complete
                ? "ToDo__form__label__task complete"
                : "ToDo__form__label__task"
            }
          >
            {item.task}
          </div>
          {/* Input */}
          <input
            type="checkbox"
            id={`todo-${item.id}`}
            className={`ToDo__form__label__checkbox`}
            name="complete"
            checked={item.complete}
            onChange={() => taskCompleteStatus(item.id)}
          />
        </label>
        {/* Delete Button - delete task when clicked*/}
        <button
          type="button"
          id={item.id}
          className="ToDo__form__delete-btn"
          onClick={deleteTask}
        >
          <span className="span__1"></span>
          <span className="span__2"></span>
        </button>
      </form>
    </div>
  );
}
