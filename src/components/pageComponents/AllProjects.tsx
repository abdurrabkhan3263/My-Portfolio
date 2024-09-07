"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import { Project } from "@/lib/types";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Loader2, LoaderIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function AllProjects() {
  const projectCards = useRef<(HTMLSpanElement | null)[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectCards.current.length > 0 && !loading) {
      const cards = projectCards.current as HTMLSpanElement[];
      gsap.to(cards, {
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: cards[0],
          scroller: "body",
          start: "top 90%",
        },
      });
    }
  }, [loading]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/get-projects");
        if (Array.isArray(res.data.data)) {
          setAllProjects(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching projects");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="mt-36 flex h-screen items-start justify-center">
        <span className="animate-spin">
          <Loader2 height={50} width={50} />
        </span>
      </div>
    );
  }

  return (
    <div className="mt-16 grid grid-cols-1 gap-16 text-white sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array.isArray(allProjects) && allProjects.length > 0 ? (
        allProjects.map((project, index) => (
          <span
            key={project._id}
            ref={(el: HTMLSpanElement) => {
              projectCards.current[index] = el;
            }}
            className="translate-y-7 opacity-0"
          >
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
