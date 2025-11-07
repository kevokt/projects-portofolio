import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content container">
        <h4>Hello, Welcome to my portofolio site!</h4>
        <p>
          Thanks for stopping by. I'm Kevin Oktavian, a Web Developer who builds
          modern and responsive websites.
        </p>
        <a href="resume.pdf" className="custom-button-main" target="_blank">
          Download Resume
        </a>
        <a href="#learn-more" className="custom-button-secondary">
          Learn More
        </a>
      </div>
      <div class="hero-fade"></div>
    </div>
  );
};

export default Hero;
