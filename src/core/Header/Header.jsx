import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <a href="#projects" className="box" onClick={toggleMenu}>
            {" "}
            PROJECTS
          </a>

          <Link to="/Blog" className="box" onClick={toggleMenu}>
            {" "}
            BLOG
          </Link>
          <Link to="/Short" className="box" onClick={toggleMenu}>
            SHORTCODES
          </Link>

          <Link to="/reac" className="box" onClick={toggleMenu}>
            CONTACT US
          </Link>
        </nav>
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
        {/* <label className="toggle-switch">
          <input type="checkbox" id="modeToggle"/>
          <span className="toggle-slider"> </span>
          
        </label> */}
      </div>

    
    </>
  );
}
