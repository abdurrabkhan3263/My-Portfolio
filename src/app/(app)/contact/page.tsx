import React from "react";
import Contact from "@/components/pageComponents/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us page",
};

function page() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="px-6 pt-20 lg:px-24"
    >
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default page;
