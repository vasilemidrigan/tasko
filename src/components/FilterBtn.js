import React from "react";

export default function FilterBtn({ name, setActiveFilter }) {
  // changeColor(): change text color of the clicked
  //                filter btn
  const changeColor = (e) => {
    const btns = document.querySelectorAll(".filter-btn");
    const target = e.target;

    for (let i = 0; i < btns.length; i++) {
      if (target === btns[i].children[0]) {
        btns[i].children[0].classList.add("clicked");
      } else {
        btns[i].children[0].classList.remove("clicked");
      }
    }
  };

  const x = () => {
    console.log("hi");
  };

  return (
    <button
      type="button"
      className="filter-btn ns"
      // here we're using onClick() and onTouchEnd()
      // for the same functions, just because we need
      // to run them when clicking, as well as when
      // touching.
      onClick={(event) => {
        setActiveFilter(name);
        changeColor(event);
      }}
      onTouchEnd={(event) => {
        setActiveFilter(name);
        changeColor(event);
      }}
    >
      <span>{name}</span>
    </button>
  );
}
