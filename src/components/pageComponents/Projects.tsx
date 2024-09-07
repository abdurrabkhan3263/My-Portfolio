"use client";

import React, { useRef } from "react";
import AllProjects from "./AllProjects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectHeading = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(projectHeading.current, {
      translateX: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: projectHeading.current,
        scroller: "body",
        start: "top 90%",
        end: "top 95%",
      },
    });
  });

  return (
    <div className="mt-16 min-h-fit">
      <div className="mt-32 min-h-screen text-white lg:mt-0">
        <div className="overflow-hidden">
          <h1
            className="-translate-x-full text-5xl font-bold"
            ref={projectHeading}
          >
            Projects
          </h1>
        </div>
        <AllProjects />
      </div>
    </div>
  );
}
