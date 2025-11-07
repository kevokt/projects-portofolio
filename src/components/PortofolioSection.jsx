import React from "react";
import "./PortfolioSection.css";
const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "CV. David Teknik Blower",
      tech: "React, Vite, Chakra UI",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "portofolio-image/img1.jpg",
      link: "https://davidteknik.com",
    },
    {
      id: 2,
      title: "UG-BOT | Gunadarma University Chatbot Website",
      tech: "React, Express.js, MongoDB, Node.js, Chakra UI, Botpress, JWT",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "portofolio-image/img2.jpg",
      link: "https://ug-bot-demo.netlify.app/",
    },
    {
      id: 3,
      title: "Pet Groom Service Web App",
      tech: "Vite, React, Chakra UI, Node.js, Express.js, Mongoose, MongoDB, JWT, JSDoc",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "portofolio-image/img3.jpg",
      link: "https://github.com/kevokt/pet-groom-service",
    },
  ];
  return (
    <div className="container section">
      <h2 className="center-align portofolio-title">Web Projects</h2>
      <p className="portofolio-subtitle">
        Here are some of the top projects I've worked on.
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

      <a
        className="custom-button-portofolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        View More Projects
      </a>
    </div>
  );
};
export default PortfolioSection;
