import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Project() {
  const projectHeading = useRef(null);

  const animation = (elements: Array<HTMLElement | null>) => {
    gsap.to([...elements], {
      translateX: 0,
      opacity: 1,
      ease: "power2",
      duration: 0.5,
      scrollTrigger: {
        trigger: [...elements],
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });
  };
  useGSAP(() => {
    animation([projectHeading.current]);
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
      <div></div>
    </div>
  );
}

export default Project;
