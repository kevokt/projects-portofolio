import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import "./EMF.css";

const images = [
  "/portofolio-image/emf-thumbnail.jpeg",
  "/carousel/emf/emf-admin-dash.png",
  "/carousel/emf/emf-bd-quo.png",
  "/carousel/emf/emf-crm-inq.png",
  "/carousel/emf/emf-pe-calc.png",
  "/carousel/emf/emf-pe-dash.png",
  "/carousel/emf/emf-rl-1.jpg",
  "/carousel/emf/emf-rl-2.jpg",
];

const techStack = [
  "Golang Fiber",
  "React",
  "PostgreSQL",
  "PM2",
  "REST API",
  "JWT",
  "VPS",
  "GitHub Actions",
];

const highlights = [
  {
    title: "Design-to-Code",
    desc: "Translated Figma designs into responsive, production-ready interfaces while maintaining design fidelity across breakpoints.",
  },
  {
    title: "Multiple User Roles",
    desc: "Implemented role-based access control managing 3 roles across 6 departments with distinct permissions and responsibilities.",
  },
  {
    title: "Data Isolation",
    desc: "Enforced per-department data boundaries so each organizational unit only accesses its own records, regardless of role.",
  },
  {
    title: "Draft System",
    desc: "Implemented persistent drafts across multiple forms to prevent data loss and improve user workflow efficiency.",
  },
  {
    title: "Multi-Stage Approval",
    desc: "Designed a multi-stage approval and rejection workflow for inquiries and quotations with full status tracking.",
  },
  {
    title: "PDF Generator",
    desc: "Developed an automated PDF generator transforming internal pricing calculations into client-ready quotations.",
  },
  {
    title: "Authentication & Session Management",
    desc: "Implemented cookie-based JWT authentication with expiry handling and protected routes enforced on both frontend and backend.",
  },
  {
    title: "Form Validation & Error Handling",
    desc: "Built consistent validation and user-facing error feedback across the majority of forms to ensure data integrity and a smooth user experience.",
  },
  {
    title: "Audit Trail",
    desc: "Logged approval and rejection actions system-wide, with a dedicated activity view exposed to superadmin for full operational visibility.",
  },
  {
    title: "DevOps & Deployment",
    desc: "Managed CI/CD pipelines through GitHub Actions and implemented Linux server deployments via PM2 on a VPS.",
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
          <p className="article-role">
            Full Stack Developer &amp; DevOps Engineer
          </p>
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
              At PT e-Manufaktur, I work as a Full Stack Developer and DevOps
              Engineer building and maintaining the company's internal ERP
              system. The platform handles the complete lifecycle of customer
              inquiries, from initial draft through multi-stage approvals to
              final PDF quotation generation.
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
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Links</h3>
              <div className="sidebar-links">
                <a
                  href="https://e-manufaktur.co.id"
                  className="sidebar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> Company Site
                </a>
                <a
                  href="https://www.linkedin.com/company/teknologimanufakturindonesia/"
                  className="sidebar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin /> Company LinkedIn
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
