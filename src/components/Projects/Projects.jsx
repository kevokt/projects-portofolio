import React from "react";
import "./Projects.css";
import projects from "./projectsData";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container section">
      <h2 className="projects-title">Web Projects</h2>
      <p className="projects-subtitle">
        Here’s a look at some of the projects I’ve built.
      </p>
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card hoverable project-card"
        >
          <div className="card-image">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5>{project.title}</h5>
              <p className="tech">
                Tech: {project.tech} <br />
              </p>
              <p>{project.description}</p>
            </div>
            <div className="card-action">
              <span className="view-project">View Project →</span>
            </div>
          </div>
        </a>
      ))}
      <div className="see-more">
        <p className="projects-subtitle2">
          Want to explore more of my work? Visit my GitHub!
        </p>
        <a
          className="custom-button-projects projects-btn"
          target="_blank"
          href="https://github.com/kevokt"
          rel="noopener noreferrer"
        >
          <span>
            kevokt on GitHub <FaGithub />
          </span>
        </a>
      </div>
    </div>
  );
};
export default Projects;
