import React from "react";
import AllProjects from "./AllProjects";
import axios from "axios";

export default async function Projects() {
  return (
    <div className="mt-16 min-h-fit">
      <AllProjects />
    </div>
  );
}
