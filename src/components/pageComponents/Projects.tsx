import AllProjects from "./AllProjects";

export default function Projects() {
  return (
    <div className="mt-16 min-h-fit">
      <div className="mt-32 min-h-screen text-white lg:mt-0">
        <div className="overflow-hidden">
          <h1 className="-translate-x-0 text-5xl font-bold">Projects</h1>
        </div>
        <AllProjects />
      </div>
    </div>
  );
}
