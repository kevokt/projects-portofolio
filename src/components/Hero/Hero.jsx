import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
      <div className={`hero-video-wrapper${ready ? " visible" : ""}`}>
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/hOgVAYpHPCc?autoplay=1&mute=1&loop=1&playlist=hOgVAYpHPCc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="Background video"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="hero-content">
        <h4>Hello, Welcome to my portofolio site!</h4>
        <p>
          Thanks for stopping by. I'm Kevin Oktavian, a Web Developer who builds
          modern and responsive websites.
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
