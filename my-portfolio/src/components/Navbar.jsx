import React from "react";
import "../styles/Navbar.css"
import myCV from "../assets/my_cv.pdf"

function Navbar() {
  return (
      <nav>
        <a href="#home"><div className="logo">ZN</div></a> 
        <div className="list-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-btn">
          <a href={myCV} target="blank" rel="noreferrer">Download CV</a>
        </div>
      </nav>

  );
}

export default Navbar;
