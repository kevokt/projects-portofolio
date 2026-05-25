import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <video
        className="hero-video"
        src="/video/bg_gradient.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-content">
        <h4>Hello, Welcome to my portofolio site!</h4>
        <p>
          Thanks for stopping by. I'm Kevin Oktavian, a full-stack developer who
          builds modern and responsive websites.
        </p>
        <a href="cv.pdf" className="custom-button-main" target="_blank">
          Download CV
        </a>
        <a href="#learn-more" className="custom-button-secondary">
          Learn More
        </a>
      </div>
      <div className="hero-fade"></div>
    </div>
  );
};

export default Hero;
