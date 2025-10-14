import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Build Fast, Responsive Sites</h1>
        <p>Powerful and modern portfolio made with React & MaterializeCSS.</p>
        <a href="#projects" className="btn-large teal">
          View Projects
        </a>
      </div>
      <div class="hero-fade"></div>
    </div>
  );
};

export default Hero;
