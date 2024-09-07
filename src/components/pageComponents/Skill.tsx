"use client";
import { skillIcons } from "@/data/skill-icons";
import React, { use, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const heading = useRef(null);
  const heading2 = useRef(null);
  const slogan1 = useRef(null);
  const slogan2 = useRef(null);
  const logos = useRef<Array<HTMLDivElement>>([]);

  function scrollAnimation(
    elements: Array<HTMLElement | null>,
    animationMode: string,
  ) {
    if (animationMode === "slide") {
      gsap.to([...elements], {
        translateY: 0,
        stagger: 0.3,
        opacity: 1,
        ease: "power2",
        duration: 0.3,
        scrollTrigger: {
          trigger: elements[0],
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
        },
      });
    } else if (animationMode === "scale" && elements.length > 0) {
      gsap.to(elements, {
        scale: 1,
        stagger: 0.3,
        opacity: 1,
        ease: "power2",
        duration: 0.6,
        scrollTrigger: {
          trigger: elements[0],
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
        },
      });
    }
  }

  useGSAP(() => {
    scrollAnimation([heading.current, heading2.current], "slide");
    scrollAnimation([slogan1.current, slogan2.current], "slide");
    const logoElement = logos.current as HTMLElement[];
    scrollAnimation(logoElement, "scale");
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div className="mt-32 flex w-full justify-center">
        <div className="w-full text-center lg:w-1/2">
          <div className="overflow-hidden">
            <h1
              className="translate-y-full text-[2.85rem] font-bold opacity-0"
              ref={heading}
            >
              These Are My Go-To
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="translate-y-full text-[2.85rem] font-bold opacity-0 sm:text-6xl"
              ref={heading2}
            >
              Technologies.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-center">
        <div
          className="flex w-full flex-wrap justify-center gap-x-20 gap-y-24 text-5xl sm:text-6xl lg:w-2/3"
          id="logos"
        >
          {skillIcons.map(({ Icon }, index) => (
            <div
              className="scale-0 opacity-0"
              key={index}
              ref={(el) => {
                if (el) logos.current.push(el);
              }}
            >
              <Tilt
                key={index}
                className="overflow-hidden rounded-xl"
                perspective={800}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.2}
              >
                <div className="rounded-xl p-3 hover:bg-[#006666]">
                  <Icon />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
      <div className="text-medium mt-28 flex justify-center text-base font-medium lg:text-lg">
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden">
            <p className="translate-y-full text-center" ref={slogan1}>
              I believe in the power of continuous learning and growth, and I’m
              always eager to
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="translate-y-full text-center" ref={slogan2}>
              expand my skillset with new and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
