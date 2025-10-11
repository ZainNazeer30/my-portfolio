import React from "react";
import "../styles/Projects.css"; // CSS file
import chatPic from "../assets/Chat-app.png"
import jobPic from "../assets/Job-App.png"


// Single project card component
const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      {/* 👇 Make image clickable */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
      </a>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Text link also clickable */}
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project ↗
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="projects-section">

      <h2 className="section-label" id="projects">Projects</h2>

      <ProjectCard
        image={jobPic}
        title="Job Listing Web App"
        description="A job listing web app built with React and Django backend."
        link="https://github.com/ZainNazeer/job-app"
      />

      <ProjectCard
        image={chatPic}
        title="Chat Web App"
        description="A real-time chat application built using MERN Stack and Socket.IO."
        link="https://chat-appllication-frontend.netlify.app/"
      />
    </section>
  );
};

export default ProjectsSection;
