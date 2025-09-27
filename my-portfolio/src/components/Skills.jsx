import React from "react";
import "../styles/Skills.css";

const skills = [
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "jQuery",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  {
    name: "Django",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Socket.io",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <p>The skills, tools and technologies I am really good at:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          // convert name -> lowercase, replace spaces and dots with "-"
          const safeClass = skill.name.toLowerCase().replace(/[ .]/g, "-");

          return (
            <div className="skill-item" key={skill.name}>
              <img
                src={skill.img}
                alt={skill.name}
                className={`skill-icon ${safeClass}`}
              />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
