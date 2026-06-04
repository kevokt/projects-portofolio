import React from "react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: 1,
    company: "PT e-Manufaktur",
    role: "Full Stack Developer and DevOps Engineer",
    period: "Nov 2025 - Present",
    description: [
      "Built a company ERP system using Go Languague and React",
      "Built a dynamic draft system to improve user workflow and prevent data loss.",
      "Design a multi-stage approval and rejection workflow to manage the progression of inquiries, internal calculation, and final quotation/",
      "Deveop an automated quotation PDF generator that transforms customer inquiries and internal pricing calculation into finzalized, client-ready documentation.",
    ],
    thumbnail: "/portofolio-image/emf-thumbnail.jpeg",
    link: "/e-manufaktur",
  },
  {
    id: 2,
    company: "CV. David Teknik Blower",
    role: "Front-end Developer",
    period: "Nov 2024 - Feb 2025",
    description: [
      "Built responsive front-end components for a commercial website using React, Vite, and Chakra UI.",
      "Collaborated closely with the project manager to translate design requirements into clean, efficient, and visually consistent user interfaces.",
      "Website is currently live at davidteknik.com.",
    ],
    thumbnail: "/portofolio-image/dtb-thumbnail.png",
    link: "/david-teknik-blower",
  },
];

const WorkExperience = () => {
  return (
    <section className="work-section container section">
      <h2 className="work-title">Work Experience</h2>
      <p className="work-subtitle">Where I've worked and what I've done.</p>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
          >
            <div className="timeline-marker" />
            <Link to={exp.link} className="timeline-card">
              <div className="timeline-thumb">
                <img src={exp.thumbnail} alt={exp.company} />
              </div>
              <div className="timeline-body">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-company">{exp.company}</h3>
                <span className="timeline-role">{exp.role}</span>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <span className="timeline-read-more">Read More →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
