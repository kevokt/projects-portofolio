import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import "./EMF.css";

const images = [
  "/portofolio-image/emf-thumbnail.jpeg",
  "/portofolio-image/img4.jpg",
  "/portofolio-image/img5.jpg",
  "/portofolio-image/img6.jpg",
];

const techStack = [
  "Go", "React", "PostgreSQL", "Docker", "Redis", "Nginx",
  "GitHub Actions", "Linux", "REST API", "JWT",
];

const highlights = [
  {
    title: "ERP System",
    desc: "Built a company-wide ERP system handling inquiries, quotations, and internal calculations.",
  },
  {
    title: "Dynamic Draft System",
    desc: "Implemented auto-saving drafts to prevent data loss and improve user workflow efficiency.",
  },
  {
    title: "Multi-Stage Approval",
    desc: "Designed a multi-stage approval and rejection workflow for inquiries and quotations.",
  },
  {
    title: "PDF Generator",
    desc: "Developed an automated PDF generator transforming internal pricing into client-ready quotations.",
  },
  {
    title: "DevOps & Deployment",
    desc: "Managed CI/CD pipelines, Docker containers, and Linux server deployments.",
  },
];

const EMF = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="article-page">
      <header className="article-header">
        <video
          className="article-video"
          src="/video/bg_gradient.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="article-content container">
          <span className="article-period">Nov 2025 - Present</span>
          <h1 className="article-title">PT e-Manufaktur</h1>
          <p className="article-role">Full Stack Developer &amp; DevOps Engineer</p>
        </div>
        <div className="article-fade" />
      </header>

      <section className="carousel-section container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((src, i) => (
              <div className="embla__slide" key={i}>
                <img src={src} alt={`EMF screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="embla__btn embla__btn--prev" onClick={scrollPrev}>
          <FiArrowLeft />
        </button>
        <button className="embla__btn embla__btn--next" onClick={scrollNext}>
          <FiArrowRight />
        </button>
      </section>

      <section className="article-body container">
        <div className="article-grid">
          <div className="article-main">
            <h2>Overview</h2>
            <p>
              At PT e-Manufaktur, I work as a Full Stack Developer and DevOps Engineer
              building and maintaining the company's internal ERP system. The platform
              handles the complete lifecycle of customer inquiries, from initial draft
              through multi-stage approvals to final PDF quotation generation.
            </p>

            <h2>Key Highlights</h2>
            <div className="highlights-grid">
              {highlights.map((h, i) => (
                <div className="highlight-card" key={i}>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h3>Tech Stack</h3>
              <div className="tech-tags">
                {techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Links</h3>
              <div className="sidebar-links">
                <a href="#" className="sidebar-link" target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Company Site
                </a>
                <a href="#" className="sidebar-link" target="_blank" rel="noopener noreferrer">
                  <FiGithub /> Repository
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default EMF;
