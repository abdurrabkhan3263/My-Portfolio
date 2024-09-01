import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Project() {
  const projectHeading = useRef(null);
  const productCard = useRef<Array<HTMLSpanElement | null>>(null);
  const timeLine = gsap.timeline();

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

  useEffect(() => {
    productCard.current = Array.from(
      document.getElementsByClassName("product__card"),
    ) as Array<HTMLSpanElement>;
  }, []);

  useGSAP(() => {
    timeLine.to(productCard.current, {
      x: 5,
    });
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
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
        <span ref={productCard} className="product__card">
          <ProjectCard />
        </span>
      </div>
    </div>
  );
}

export default Project;
