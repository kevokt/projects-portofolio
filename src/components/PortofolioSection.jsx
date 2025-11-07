import React from "react";
import "./PortfolioSection.css";
const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Company Website",
      description:
        "A responsive business website built using React and MaterializeCSS. It includes multiple pages and contact form integration.",
      image: "background1.jpg",
      link: "https://example.com",
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description:
        "An admin dashboard for managing products and orders, built with React and Node.js.",
      image: "background2.jpg",
      link: "https://example.com/dashboard",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing various web development projects and skills.",
      image: "background3.jpg",
      link: "https://example.com/portfolio",
    },
  ];
  return (
    <div className="container section">
      <h2 className="center-align portofolio-title">Web Projects</h2>
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
              <h5>{project.title}</h5> <p>{project.description}</p>
            </div>
            <div className="card-action">
              <span className="view-project">View Project →</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
export default PortfolioSection;
