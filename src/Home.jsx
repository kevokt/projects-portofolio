import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PortofolioSection from "./components/PortofolioSection/PortofolioSection";
import Skill from "./components/Skill";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Hero />
      <Skill />
      <PortofolioSection />
      <Contact />
    </>
  );
}

export default App;
