import React from "react";
import AllProjects from "./AllProjects";
import getProjects from "@/lib/getAllProjects";

export const revalidate = 60;

export default async function Projects() {
  const allProjects = await getProjects()
    .then((res) => {
      console.log("All projects", res);
      return res;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });

  return <AllProjects allProjects={allProjects} />;
}
