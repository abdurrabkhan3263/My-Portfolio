import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork, FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import Button from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";

function About() {
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const profileImage = useRef(null);
  const timeLine = gsap.timeline();

  useGSAP(() => {
    timeLine.to([element2.current, element3.current, element4.current], {
      translateY: "0px",
      ease: "power1",
      duration: "0.3",
      stagger: 0.4,
    });
    timeLine.to(profileImage.current, {
      translateY: "0px",
      ease: "power1",
      opacity: 1,
      duration: "0.5",
    });
  }, []);
  return (
    <div
      className="flex w-full flex-col text-white lg:flex-row"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="mt-16 flex h-full flex-1 items-center">
        <div>
          <div>
            <p className="text-2xl font-medium">Hello, I am</p>
          </div>
          <div className="mt-1 overflow-hidden">
            <h1
              className="translate-y-full text-[80px] font-extrabold leading-[75px]"
              ref={element2}
            >
              Abdur Rab
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="translate-y-full text-[80px] font-extrabold leading-[75px]"
              ref={element3}
            >
              Khan
            </h1>
          </div>
          <div className="overflow-hidden">
            <p
              className="mt-2.5 translate-y-full text-lg font-medium"
              ref={element4}
            >
              Passionate
              <span className="text-[#FFC327]"> Full Stack Web Developer </span>
              && enthusiast to build applications.
            </p>
          </div>
          <div className="overflow-hidden">
            <div>
              <div className="mt-7">
                <p className="text-lg font-medium">Find me on</p>
              </div>
              <div className="mt-3 flex gap-6 text-[#faf9f9]">
                <button>
                  <FaGithubSquare size={24} />
                </button>
                <button>
                  <FaLinkedin size={24} />
                </button>
                <button>
                  <FaSquareXTwitter size={24} />
                </button>
                <button>
                  <TbBrandFiverr size={24} />
                </button>
                <button>
                  <FaSquareUpwork size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 flex gap-14 overflow-hidden">
            <span>
              <Button className="text-nowrap">Hire Me</Button>
            </span>
            <span>
              <Button>Portfolio</Button>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-1 items-center justify-center lg:mt-0">
        <div ref={profileImage} className="translate-y-10 opacity-0">
          <Image
            src={"./image__profile.jpg"}
            alt="my__image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
