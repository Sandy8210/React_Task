import React, { useContext } from "react";
import "./Nav.css";
import { navData } from "../../utils/navData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../context/ThemeContext";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <ul>
        {navData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <FontAwesomeIcon
        onClick={toggleTheme}
        icon={theme === "light" ? faMoon : faSun}
        className="icon"
      />
    </nav>
  );
};

export default Nav;
