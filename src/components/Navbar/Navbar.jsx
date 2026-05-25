import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo";
import "./Navbar.css";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoMdContact, IoMdHome } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = `dark-nav${isHome && !scrolled ? " transparent" : ""}`;

  return (
    <nav className={navClass} role="navigation">
      <div className="nav-wrapper container">
        <Link id="logo-container" to="/" className="brand-logo">
          <Logo />
        </Link>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/" className="nav-button">
              <span>
                <IoMdHome /> Home
              </span>
            </Link>
          </li>

          <li>
            <Link to="/projects" className="nav-button">
              <span>
                <MdOutlineWebAsset /> Projects
              </span>
            </Link>
          </li>

          <li>
            <a
              href="https://github.com/kevokt"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button"
            >
              <span>
                <FaGithub /> GitHub
              </span>
            </a>
          </li>

          <li>
            <Link to="/#contact" className="nav-button">
              <span>
                <IoMdContact /> Contact
              </span>
            </Link>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <Link to="/" className="nav-button">
              <span>
                <IoMdHome /> Home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-button">
              <span>
                <MdOutlineWebAsset /> Projects
              </span>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/kevokt"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button"
            >
              <span>
                <FaGithub /> GitHub
              </span>
            </a>
          </li>
          <li>
            <Link to="/#contact" className="nav-button">
              <span>
                <IoMdContact /> Contact
              </span>
            </Link>
          </li>
        </ul>

        <a data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
