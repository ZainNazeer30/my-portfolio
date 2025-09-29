import React, { useEffect } from "react";
import "../styles/Navbar.css";
import myCV from "../assets/my_cv.pdf";

function Navbar() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down → hide nav
        nav.style.top = "-80px"; // adjust based on nav height
      } else {
        // Scrolling up → show nav
        nav.style.top = "0";
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home">
        <div className="logo">ZN</div>
      </a>
      <div className="list-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-btn">
        <a href={myCV} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
