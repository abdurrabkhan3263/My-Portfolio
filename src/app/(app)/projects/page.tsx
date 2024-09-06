import Project from "@/components/pageComponents/Project";
import React from "react";
import type { Metadata } from "next";
import axios from "axios";

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
      <div className="mt-16 min-h-fit">
        <Project />
      </div>
    </div>
  );
}

export default page;
