import React from "react";
import "./PortfolioSection.css";

import { Link } from "react-router-dom";
const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "CV. David Teknik Blower",
      tech: "React, Vite, Chakra UI",
      description:
        "Built responsive front-end components for a commercial website using React, Vite, and Chakra UI. Collaborated closely with the project manager to translate design requirements into clean, efficient, and visually consistent user interfaces. The website is currently live at davidteknik.com.",
      image: "portofolio-image/img1.jpg",
      link: "https://davidteknik.com",
    },
    {
      id: 2,
      title: "UG-BOT | Gunadarma University Chatbot Website",
      tech: "React, Express.js, MongoDB, Node.js, Chakra UI, Botpress, JWT",
      description:
        "Developed a chatbot website to help students with registration and campus information. Used React and Chakra UI for the frontend, and Node.js, Express.js, and MongoDB for the backend. Integrated Botpress for smart, conversational replies and secured the system with JWT authentication for admins.",
      image: "portofolio-image/img2.jpg",
      link: "https://ug-bot-demo.netlify.app/",
    },
    {
      id: 3,
      title: "Pet Groom Service Web App",
      tech: "Vite, React, Chakra UI, Node.js, Express.js, Mongoose, MongoDB, JWT, JSDoc",
      description:
        "Built a full-stack web app for managing pet grooming reservations, complete with login, file uploads, and an admin dashboard. Designed the interface with React (Vite) and Chakra UI, and built the backend using Node.js, Express.js, and MongoDB. Added JWT-based authentication for secure access and documented the API with JSDoc.",
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

      <Link className="custom-button-portofolio" to="/projects">
        View More Projects
      </Link>
    </div>
  );
};
export default PortfolioSection;
