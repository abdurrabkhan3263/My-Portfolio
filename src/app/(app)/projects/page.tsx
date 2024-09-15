import React from "react";
import type { Metadata } from "next";
import ProjectHeading from "@/components/pageComponents/Project_Heading";
import Projects from "@/components/pageComponents/Projects";
import axios from "axios";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page",
};

async function page() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="px-6 pb-16 pt-20 lg:px-24"
    >
      <ProjectHeading />
      <Projects />
    </div>
  );
}

export default page;
