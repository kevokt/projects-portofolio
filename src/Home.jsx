import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import PortofolioSection from "./components/PortofolioSection/PortofolioSection";
import Skill from "./components/Skill";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <Hero />
      <Skill />
      <WorkExperience />
      <PortofolioSection />
      <Contact />
    </div>
  );
}

export default App;
