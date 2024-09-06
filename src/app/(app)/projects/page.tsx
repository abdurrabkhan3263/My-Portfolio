import Project from "@/components/pageComponents/AllProjects";
import React from "react";
import type { Metadata } from "next";
import axios from "axios";
import AllProjects from "@/components/pageComponents/AllProjects";
import Projects from "@/components/pageComponents/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page",
};

function page() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="px-9 pb-16 lg:px-24"
    >
      <Projects />
    </div>
  );
}

export default page;
