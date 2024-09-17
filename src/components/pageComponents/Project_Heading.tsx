"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHeading() {
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
    <div className="min-h-fit">
      <div className="text-white">
        <div className="overflow-hidden">
          <h1
            className="-translate-x-full text-5xl font-bold"
            ref={projectHeading}
          >
            Projects
          </h1>
        </div>
      </div>
    </div>
  );
}
