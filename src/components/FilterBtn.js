import React from "react";

export default function FilterBtn({ name, setActiveFilter }) {
  return (
    <button
      type="button"
      className="filter__btn"
      onClick={() => setActiveFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
}
