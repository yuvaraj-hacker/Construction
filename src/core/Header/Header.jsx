import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class on body
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="images/darna.png" alt="Logo" />
        </div>
        <nav className={`nav-links ${isOpen ? "show" : ""}`}>
          <Link to="/" className="box" onClick={toggleMenu}>
            {" "}
            HOME
          </Link>
          <Link to="/Shop" className="box" onClick={toggleMenu}>
            {" "}
            ABOUT
          </Link>
          <Link to="/Project" className="box" onClick={toggleMenu}>
            {" "}
            PROJECTS
          </Link>

          <Link to="/Blog" className="box" onClick={toggleMenu}>
            {" "}
               BLOG
          </Link>
          <Link to="/Short" className="box" onClick={toggleMenu}>
           TEAMS 
          </Link>

          <Link to="/reac" className="box" onClick={toggleMenu}>
            CONTACT US
          </Link>
        </nav>
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
        <p className="checkbo2">Change Theme</p>
        <label className="checkbo1">
          <input type="checkbox" id="modeToggle" onChange={toggleDarkMode} />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </>
  );
}
