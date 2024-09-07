import React, { useEffect } from "react";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";

function AllAboutPageComponents() {
  return (
    <>
      {/* ABOUT SECTION */}
      <About />
      {/* WHAT I KNOW IT */}
      <Skill />
      {/* Projects page */}
      <Projects />
      {/* Contact Page */}
      <Contact />
    </>
  );
}

export default AllAboutPageComponents;
