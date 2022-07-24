// App Component

// Imports:
// - react
import React, { useState } from "react";
import "./styles/index.scss";
// - data
import data from "./data.json";
// - components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [toDoList, setToDoList] = useState(data);

  // ----------------------------------------------------
  // Get an array of our current existed ID's
  // ! Will serve for addToDo() function bellow as an
  //   argument, in order to generate a new ID for our
  //   newly created task.
  const existedIds = toDoList.map((el) => {
    return el.id;
  });

  // ----------------------------------------------------
  // newID(arr) : Generate a new unexisted ID

  // About:
  // Generate a new unexisted ID for our newly created task
  //  - Let say we had 5 to-do's [1, 2, 3, 4, 5]
  //  - Then we did 2 of them and deleted them imediatelly
  //  - So now we have [2, 3, 5] 3 tasks to do
  //  - What we will do is to loop through this array
  //    and create a new ID for the new task (the smallest
  //    id that doesn't exist in the array, in this
  //    case - 1)
  //  - If let say we have [1, 2, 3, 4, 5], then we just
  //    add one to the last to do (in this case - 6)
  const newID = (arr) => {
    let newIDs = [];

    for (let i = 1; i < arr.length + 1; i++) {
      if (!arr.includes(i)) {
        newIDs.push(i);
      }
    }
    if (newIDs.length === 0) {
      newIDs.push(arr.length + 1);
    }
    return newIDs[0];
  };

  // ----------------------------------------------------

  // addToDo(newToDo) : Add a new task

  // About:
  // - addToDo(newToDo) function takes our new to-do created
  //   by ToDoForm component and returns a new array
  //   with to-do's, but at the end, with our
  //   newly created to-do.

  const addToDo = (newToDo) => {
    if (!newToDo) {
      return;
    }
    setToDoList((prevToDoList) => {
      return [
        ...prevToDoList,
        { id: newID(existedIds), task: newToDo, complete: false },
      ];
    });
  };

  // ---------------------------------------------------
  // taskCompleteStatus(id) : change tasks completed status

  // - Map over our tasks state and return an oposite value
  //   of the tasks complete property
  // - The function gives us the ability to mark our
  //   tasks as completed and as well to apply
  //   appropiate styles.

  const taskCompleteStatus = (id) => {
    const updateTodos = toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });
    setToDoList(updateTodos);
  };

  // ----------------------------------------------------

  // deleteTask(e) : delete task

  // About:
  // - The function takes as argument the event object
  //   in order to gain access to the element that was
  //   clicked,
  //   and creates a new array that passes through currently
  //   existed to-do array, watching for their id's, and
  //   as a result it returns only the to-do's which doesn't
  //   have the id of the to-do that was clicked.
  // - Then it sets our toDoList to our newly created
  //   array
  // - Now our to-do list doesn't include the deleted to-do
  // - NOTE! The content of our buttons is 2 spans which
  //         draws the x sign(see todo.scss), so when the span
  //         is clicked instead of button, if statement
  //         catches that event and it watches for
  //         parent element of the current clicked span
  //         which is the button element obviously,
  //         and so now it can compare the id of the
  //         button and the current todo element in the
  //         map.

  function deleteTask(e) {
    const spanIsClicked = e.target.childNodes.length === 0;
    const spansParentId = e.target.parentNode.id;
    const updateArray = toDoList.filter((el) => {
      if (spanIsClicked) {
        return el.id != spansParentId;
      } else {
        return el.id != e.target.id;
      }
    });
    setToDoList(updateArray);
  }
  // ----------------------------------------------------
  // clearCompleted() : clear completed tasks function
  const clearCompleted = () => {
    const activeTasks = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(activeTasks);
  };
  // ----------------------------------------------------

  return (
    <div className="App">
      <Header />
      <ToDoList
        taskCompleteStatus={taskCompleteStatus}
        toDoList={toDoList}
        setToDoList={setToDoList}
        addToDo={addToDo}
        deleteTask={deleteTask}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}
