import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import ScrollToHashElement from "./ScrollToHashElement";
import EMF from "./components/EMF/EMF";
import DTB from "./components/DTB/DTB";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/e-manufaktur" element={<EMF />} />
        <Route path="/david-teknik-blower" element={<DTB />} />
      </Routes>
    </>
  );
}

export default App;
