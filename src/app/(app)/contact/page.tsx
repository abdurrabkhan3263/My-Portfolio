"use client";

import React from "react";
import Contact from "@/components/pageComponents/Contact";

function page() {
  return (
    <div style={{ minHeight: "calc(100vh - 80px)" }} className="px-12 lg:px-24">
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default page;
