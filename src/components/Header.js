// Header Component

import React from "react";

export default function Header({ toggleTheme }) {
  return (
    <div className="Header">
      <div className="Header__content">
        <h1 className="Header__content__h1">T O D O </h1>
        <div
          className="Header__content__theme-switcher ns"
          onClick={toggleTheme}
        ></div>
      </div>
    </div>
  );
}
