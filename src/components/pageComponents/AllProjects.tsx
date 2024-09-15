"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/types";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AllProjects({
  allProjects,
}: {
  allProjects: Project[];
}) {
  const projectCards = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    if (projectCards.current.length > 0 && allProjects.length > 0) {
      const cards = projectCards.current.filter(Boolean) as HTMLSpanElement[];
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
          end: "top 95%",
        },
      });
    }
  }, [allProjects]);

  return (
    <div className="mt-16 grid grid-cols-1 gap-16 pb-16 text-white sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array.isArray(allProjects) && allProjects.length > 0 ? (
        allProjects.map((project, index) => (
          <span
            key={project._id}
            className="translate-y-12 opacity-0"
            ref={(el: HTMLSpanElement) => {
              projectCards.current[index] = el;
            }}
          >
            <ProjectCard project={project} />
          </span>
        ))
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
