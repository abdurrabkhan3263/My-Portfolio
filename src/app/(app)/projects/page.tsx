"use client";

import Project from "@/components/pageComponents/Project";
import React from "react";

function page() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="px-12 pb-16 lg:px-24"
    >
      <div className="mt-16 min-h-fit">
        <Project />
      </div>
    </div>
  );
}

export default page;
