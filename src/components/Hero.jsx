import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h4>Hey there 👋</h4>
        <p>
          Thanks for stopping by. I'm a Web Developer who builds modern and
          responsive websites. here’s a little of what I do.
        </p>
        <a href="resume.pdf" className="custom-button-main" target="_blank">
          Download Resume
        </a>
        <a href="/projects" className="custom-button-secondary">
          View Projects
        </a>
      </div>
      <div class="hero-fade"></div>
    </div>
  );
};

export default Hero;
