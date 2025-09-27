import React from "react";
import mypic from "../assets/mypic.png";
import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Zain👋</h1>
        <p className="home-intro">
          I’m Zain, a Full Stack Developer passionate about creating responsive and
          user-friendly web applications. Skilled in HTML, CSS, JavaScript, Django and
          React, I enjoy bringing ideas to life with clean code and modern design.
          My goal is to grow as a developer while contributing to meaningful projects.
        </p>
        <p className="desc">📍 Lahore, Pakistan</p>

        <div className="social-links">
          <a id="contact-id" href="#contact"> <FaUser /> </a>
          <a 
            href="http://www.linkedin.com/in/zain-nazeer-8300b536a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ZainNazeer30"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-bg"></div>
        <img src={mypic} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
}

export default Hero;
