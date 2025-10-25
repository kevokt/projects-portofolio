import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Container from "./components/Container";
import PortofolioSection from "./components/PortofolioSection";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container />
      <Skill />
      <PortofolioSection />
      <Footer />
    </>
  );
}

export default App;
