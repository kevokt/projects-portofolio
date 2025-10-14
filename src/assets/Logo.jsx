import React from "react";
import { FaCode } from "react-icons/fa";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <FaCode className="logo-icon" />
      <span className="logo-text">kevokt's Portfolio</span>
    </div>
  );
};

export default Logo;
