import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import "./DTB.css";

const images = [
  "/portofolio-image/dtb-thumbnail.jpg",
  "/carousel/dtb/image-1.png",
  "/carousel/dtb/image-2.png",
  "/carousel/dtb/image-3.png",
];

const techStack = [
  "React",
  "Vite",
  "Chakra UI",
  "JavaScript",
  "REST API",
  "Responsive Web Design",
];

const highlights = [
  {
    title: "Responsive Front-End",
    desc: "Built responsive, mobile-first UI components for a commercial blower manufacturer website.",
  },
  {
    title: "Chakra UI Design System",
    desc: "Used Chakra UI to create consistent, accessible, and themeable components.",
  },
  {
    title: "Project Collaboration",
    desc: "Worked closely with the project manager to translate Figma designs into production-ready code.",
  },
  {
    title: "Live Deployment",
    desc: "The website is live at davidteknik.com, serving as the company's primary web presence.",
  },
];

const DTB = () => {
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
          <span className="article-period">Nov 2024 - Feb 2025</span>
          <h1 className="article-title">CV. David Teknik Blower</h1>
          <p className="article-role">Front-end Developer</p>
        </div>
        <div className="article-fade" />
      </header>

      <section className="carousel-section container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((src, i) => (
              <div className="embla__slide" key={i}>
                <img src={src} alt={`DTB screenshot ${i + 1}`} />
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
              At CV. David Teknik Blower, I worked as a Front-end Developer
              building the company's commercial website. I collaborated closely
              with the project manager to translate design requirements into
              clean, performant React components using Chakra UI and Vite.
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
                  href="https://davidteknik.com"
                  className="sidebar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> Live Site
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default DTB;
