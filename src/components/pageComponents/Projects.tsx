import getProjects from "@/lib/getProjects";
import AllProjects from "./AllProjects";

export default async function Projects() {
  const allProjectsData = await getProjects();

  return <AllProjects allProjects={allProjectsData} />;
}
