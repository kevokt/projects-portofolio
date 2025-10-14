import React from "react";
import Logo from "../assets/Logo";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="dark-nav" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">
          <Logo />
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#" className="nav-button">
              <span>
                <FaGithub /> GitHub
              </span>
            </a>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <a href="#">Navbar Link</a>
          </li>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
