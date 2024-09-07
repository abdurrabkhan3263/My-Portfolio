import React from "react";
import type { Metadata } from "next";
import Projects from "@/components/pageComponents/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects page",
};

async function page() {
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
