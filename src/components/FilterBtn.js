import React from "react";

export default function FilterBtn({ name, setActiveFilter }) {
  // changeColor(): change text color of the clicked
  //                filter btn
  const changeColor = (e) => {
    const btns = document.querySelectorAll(".filter__btn");
    const target = e.target;

    for (let i = 0; i < btns.length; i++) {
      if (target === btns[i].children[0]) {
        btns[i].children[0].classList.add("clicked");
      } else {
        btns[i].children[0].classList.remove("clicked");
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