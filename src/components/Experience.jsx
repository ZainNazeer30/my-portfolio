import React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="Experience" id="Experience">
      <h2>Experience</h2>
      <p>Here is a quick summary of my most recent experiences:</p>

      <div className="exp-container">
          <div className="academic-exp">
            <ul className="exp-list">
              <h3>Academic Experience</h3>
              <li>
                I gained hands-on experience by building real projects including
                responsive websites, a real-time chat app.
              </li>
              <li>
                Strengthened my skills in HTML, CSS, JavaScript, React, MySQL,
                and Git.
              </li>
            </ul>
            <div className="exp-years">Nov 2024 - Present</div>
          </div>
        </div>
        <div className="personal-exp">
          <ul className="exp-list">
          <h3>Personal Experience</h3>
            <li>
              Built landing pages with responsive layouts and clean UI design.
            </li>
            <li>
              Developed a real-time chat application using React and Django.
            </li>
            <li>
              Created to-do list applications to practice CRUD operations.
            </li>
            <li>
              Designed a React calculator to strengthen component/state skills.
            </li>
          </ul>
          <div className="exp-years">Nov 2024 - Present</div>
        </div>
    </section>
  );
}

export default Experience;
