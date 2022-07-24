import React from "react";

export default function FilterBtn({ name, setActiveFilter }) {
  // changeColor(): change text color of the clicked
  //                filter btn
  const changeColor = (e) => {
    const btns = e.target.parentElement.parentElement.childNodes;
    const target = e.target;

    for (let i = 0; i < btns.length; i++) {
      let currentEl = btns[i].childNodes[0];
      if (target.textContent !== currentEl.textContent) {
        currentEl.classList.remove("clicked");
      } else if (target.textContent === currentEl.textContent) {
        currentEl.classList.add("clicked");
      }
    }
  };

  return (
    <button
      type="button"
      className="filter__btn"
      onClick={(event) => {
        setActiveFilter(name);
        changeColor(event);
      }}
    >
      <span>{name}</span>
    </button>
  );
}
