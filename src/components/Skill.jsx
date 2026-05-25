import React from "react";
import "./Skill.css";
import Lottie from "lottie-react";
import developerAnimation from "../assets/lottie/developer.json";

// === React Icons ===
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMaterialdesign,
  SiCodeigniter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const Skill = () => {
  return (
    <section className="skill-section container">
      <div className="skill-row">
        {/* Illustration */}
        <div className="col s12 m6 center-align">
          <Lottie
            animationData={developerAnimation}
            loop={true}
            className="skill-lottie"
          />
        </div>

        {/* Text Content */}
        <div className="skill-content">
          <h2 className="skill-title">My Skills</h2>
          <p className="skill-subtitle">
            What I’m great at (and still improving!)
          </p>

          {/* Tech Icons */}
          <div className="tech-icons">
            <div className="tech-item">
              <FaHtml5 className="tech-icon" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <FaCss3Alt className="tech-icon" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <SiJavascript className="tech-icon" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <FaReact className="tech-icon" />
              <span>ReactJS</span>
            </div>
            <div className="tech-item">
              <FaNodeJs className="tech-icon" />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <SiExpress className="tech-icon" />
              <span>Express.js</span>
            </div>
            <div className="tech-item">
              <FaBootstrap className="tech-icon" />
              <span>Bootstrap</span>
            </div>
            <div className="tech-item">
              <SiMaterialdesign className="tech-icon" />
              <span>Materialize</span>
            </div>
            <div className="tech-item">
              <FaPhp className="tech-icon" />
              <span>PHP</span>
            </div>
            <div className="tech-item">
              <SiCodeigniter className="tech-icon" />
              <span>CodeIgniter</span>
            </div>
            <div className="tech-item">
              <FaJava className="tech-icon" />
              <span>Java</span>
            </div>
            <div className="tech-item">
              <FaPython className="tech-icon" />
              <span>Python</span>
            </div>
            <div className="tech-item">
              <SiMongodb className="tech-icon" />
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <SiPostgresql className="tech-icon" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item">
              <SiMysql className="tech-icon" />
              <span>MySQL</span>
            </div>
          </div>

          {/* Bullet List */}
          <ul className="skill-list">
            <li>⚡ Develop modern and responsive web interfaces</li>
            <li>⚡ Build scalable backend services</li>
            <li>⚡ Design and integrate RESTful APIs and databases</li>
          </ul>
        </div>
      </div>
      <a id="learn-more"></a>
    </section>
  );
};

export default Skill;
