import { skillIcons } from "@/data/skill-icons";
import React, { use, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const heading = useRef(null);
  const heading2 = useRef(null);
  const slogan1 = useRef(null);
  const slogan2 = useRef(null);
  const logos = useRef<Array<HTMLDivElement>>([]);

  React.useEffect(() => {
    logos.current = Array.from(
      document.getElementsByClassName("logos"),
    ) as Array<HTMLDivElement>;
  }, []);

  function scrollAnimation(
    elements: Array<HTMLElement | null>,
    animationMode: string,
  ) {
    if (animationMode === "slide") {
      gsap.to([...elements], {
        translateY: 0,
        stagger: 0.5,
        opacity: 1,
        ease: "power2",
        duration: 0.5,
        scrollTrigger: {
          trigger: elements[0],
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: true,
        },
      });
    } else if (animationMode === "scale") {
      gsap.to([...elements], {
        scale: 1,
        stagger: 0.5,
        opacity: 1,
        ease: "power2",
        duration: 0.5,
        scrollTrigger: {
          trigger: elements[0],
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: true,
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
    <div className="h-screen text-white">
      <div className="mt-16 flex w-full justify-center">
        <div className="w-1/2 text-center">
          <div className="overflow-hidden">
            <h1
              className="translate-y-full text-6xl font-bold opacity-0"
              ref={heading}
            >
              These Are My Go-To
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="translate-y-full text-6xl font-bold opacity-0"
              ref={heading2}
            >
              Technologies.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-center">
        <div
          className="flex w-2/3 flex-wrap justify-center gap-x-20 gap-y-24 text-6xl"
          id="logos"
        >
          {skillIcons.map(({ Icon }, index) => (
            <div className="logos scale-0 opacity-0" key={index}>
              <Tilt
                key={index}
                className="overflow-hidden rounded-xl"
                perspective={800}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.2}
              >
                <button
                  key={index}
                  className="rounded-xl p-3 hover:bg-[#006666]"
                >
                  <Icon />
                </button>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
      <div className="text-medium mt-28 flex justify-center text-lg font-medium">
        <div className="w-1/2">
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
