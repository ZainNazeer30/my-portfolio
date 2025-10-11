import React from "react";
import aboutPic from "../assets/about.png";
import "../styles/About.css"

function About() {
  return (
    <section id="about">
        <h1>About me</h1>
      <div className="main-about">
        <div className="left-side-profile">
          <div className="left-side-profile-bg"></div>
          <img src={aboutPic} alt="my Profile" />
        </div>
        <div className="right-side-content">
          <div className="sub-heading">Curious about me? Here you have it:</div>
          <p>
            I am a passionate and dedicated web developer with a strong interest in
            creating dynamic, user-friendly, and responsive applications. My skills
            span across front-end and back-end development, working with technologies
            such as HTML, CSS, JavaScript, React, Django, and Flask. I enjoy bringing
            ideas to life through clean code, modern design, and real-time
            functionality using tools like Socket.IO.
          </p>
          <p>
            I am continuously learning and exploring new technologies to sharpen my
            expertise and deliver high-quality solutions. My goal is to build
            innovative applications that provide seamless user experiences while
            growing as a full-stack developer.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products end to
            end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me on LinkedIn or
            Instagram, witnessing the journey of startups or enjoying free time.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="about-me">
            <div className="study">
              <li>B.S. Computer Science</li>
              <li>Pre-Engineering</li>
            </div>
            <div className="profession">
              <li>Full Stack Developer</li>
              <li>React & Django Developer</li>
            </div>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to reach
            out and say hello! I promise I don’t bite 😉
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
