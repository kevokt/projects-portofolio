import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import ScrollToHashElement from "./ScrollToHashElement";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
