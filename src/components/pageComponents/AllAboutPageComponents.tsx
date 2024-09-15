import React from "react";
import About from "./About";
import Skill from "./Skill";
import ProjectHeading from "./Project_Heading";
import Contact from "./Contact";
import Projects from "./AllProjects";
import AllProjects from "./AllProjects";

function AllAboutPageComponents() {
  return (
    <>
      {/* ABOUT SECTION */}
      <About />
      {/* WHAT I KNOW IT */}
      <Skill />
      {/* Projects page */}
      <div className="mt-32">
        <ProjectHeading />
        <AllProjects />
      </div>
      {/* Contact Page */}
      <div className="mt-32">
        <Contact />
      </div>
    </>
  );
}

export default AllAboutPageComponents;
