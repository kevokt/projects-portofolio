import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioSection from "./components/PortofolioSection";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <PortofolioSection />
      <Footer />
    </>
  );
}

export default App;
