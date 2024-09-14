import axios from "axios";
import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import getProjects from "@/lib/getProjects";

async function AllProjects() {
  let loading = true;
  const allProjects = await getProjects().then((projects) => {
    return projects;
  });

  return (
    <div className="mt-16 grid grid-cols-1 gap-16 text-white sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array.isArray(allProjects) && allProjects.length > 0 ? (
        allProjects.map((project, index) => (
          <span key={project._id} className="opacity-1 translate-y-0">
            <ProjectCard project={project} />
          </span>
        ))
      ) : loading ? (
        ""
      ) : (
        <div className="col-span-5">
          <h2 className="text-center text-4xl font-semibold">
            No projects found
          </h2>
        </div>
      )}
    </div>
  );
}

export default AllProjects;
