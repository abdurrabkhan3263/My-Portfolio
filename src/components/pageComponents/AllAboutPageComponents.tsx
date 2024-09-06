"use client";

import React, { useEffect } from "react";
import About from "./About";
import Skill from "./Skill";
import Project from "./AllProjects";
import Contact from "./Contact";

function AllAboutPageComponents() {
  return (
    <>
      {/* ABOUT SECTION */}
      <About />
      {/* WHAT I KNOW IT */}
      <Skill />
      {/* Projects page */}
      <Project />
      {/* Contact Page */}
      <Contact />
    </>
  );
}

export default AllAboutPageComponents;
