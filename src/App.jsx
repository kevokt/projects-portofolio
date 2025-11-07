import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioSection from "./components/PortofolioSection";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      
      <PortofolioSection />
      <Contact />
    </>
  );
}

export default App;
