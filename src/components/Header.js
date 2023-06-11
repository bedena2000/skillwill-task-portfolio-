import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// Images
import darkIcon from "../assets/images/dark-icon.png";
import lightIcon from "../assets/images/light-icon.png";

export function Header() {
  const [themeSymbol, setThemeSymbol] = useState("dark");

  const onChangeTheme = () => {
    const newTheme = themeSymbol === "dark" ? "light" : "dark";
    setThemeSymbol(newTheme);
  };

  return (
    <div className="header container">
      <div className="header-title">
        <h1>Hi!</h1>
      </div>

      <nav className="header-navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </div>
  );
}
