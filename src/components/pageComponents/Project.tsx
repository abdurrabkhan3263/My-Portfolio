import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Project() {
  const projectHeading = useRef<HTMLHeadingElement>(null);
  const projectCards = useRef<Array<HTMLSpanElement | null>>([]);

  const animation = (
    elements: HTMLHeadingElement | HTMLSpanElement[],
    target: "heading" | "project__card",
  ) => {
    if (target === "heading" && elements instanceof HTMLHeadingElement) {
      gsap.to(elements, {
        translateX: 0,
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.4,
        scrollTrigger: {
          trigger: elements,
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 0.3, // Added a small scrub value for smoother scrubbing
        },
      });
    } else if (target === "project__card" && Array.isArray(elements)) {
      gsap.to(elements, {
        translateY: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elements[0],
          scroller: "body",
          start: "top 80%", // Start when the top of the element hits 80% of the viewport height
          end: "top 70%", // End when it hits 70%
        },
      });
    }
  };

  useGSAP(() => {
    if (projectHeading.current) {
      animation(projectHeading.current, "heading");
    }
    if (projectCards.current.length > 0) {
      // Filter out null values
      const cards = projectCards.current.filter(
        (card) => card !== null,
      ) as HTMLSpanElement[];
      animation(cards, "project__card");
    }
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className="overflow-hidden">
        <h1
          className="-translate-x-full text-5xl font-bold"
          ref={projectHeading}
        >
          Projects
        </h1>
      </div>
      <div className="mb-16 mt-16 grid grid-cols-4 gap-16">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className="project__card translate-y-11 opacity-0"
              ref={(el: HTMLSpanElement) => (projectCards.current[i] = el)}
            >
              <ProjectCard />
            </span>
          ))}
      </div>
    </div>
  );
}

export default Project;
