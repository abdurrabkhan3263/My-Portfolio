"use client";
import Button from "@/components/ui/button";
import About from "@/components/pageComponents/About";

// Icons
import { skillIcons } from "@/data/skill-icons";
import Skill from "@/components/pageComponents/Skill";
import Project from "@/components/pageComponents/Project";
import Contact from "@/components/pageComponents/Contact";

export default function Home() {
  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }} className="px-24">
      {/* ABOUT SECTION */}
      <About />
      {/* WHAT I KNOW IT */}
      <Skill />
      {/* Projects page */}
      <Project />
      {/* Contact Page */}
      <Contact />
    </div>
  );
}
