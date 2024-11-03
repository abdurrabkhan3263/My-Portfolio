"use client";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork, FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import Button from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ResumeBtn from "../ResumeBtn";

function About() {
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const profileImage = useRef(null);

  useGSAP(() => {
    gsap.set(
      [
        element2.current,
        element3.current,
        element4.current,
        profileImage.current,
      ],
      {
        y: 100,
        opacity: 0,
      },
    );

    const timeLine = gsap.timeline();
    timeLine.to([element2.current, element3.current, element4.current], {
      y: 0,
      opacity: 1,
      ease: "power1.out",
      duration: 0.6,
      stagger: 0.2,
    });
    timeLine.to(
      profileImage.current,
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 0.6,
      },
      "-=0.3",
    );
  }, []);

  return (
    <div
      className="flex w-full flex-col text-white lg:flex-row"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="mt-16 flex h-full flex-1 items-center lg:mt-32">
        <div>
          <div>
            <p className="text-2xl font-medium">Hello, I am</p>
          </div>
          <div className="mt-1 overflow-hidden">
            <h1
              className="text-6xl font-extrabold leading-[75px] lg:text-[80px]"
              ref={element2}
            >
              Abdur Rab
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="text-6xl font-extrabold leading-[75px] lg:text-[80px]"
              ref={element3}
            >
              Khan
            </h1>
          </div>
          <div className="overflow-hidden text-base lg:text-lg">
            <p className="mt-2.5 font-medium" ref={element4}>
              Passionate
              <span className="text-[#FFC327]"> Full Stack Web Developer </span>
              & enthusiast to build something new.
            </p>
          </div>
          <div className="overflow-hidden">
            <div>
              <div className="mt-7">
                <p className="text-lg font-medium">Find me on</p>
              </div>
              <div className="mt-3 flex gap-6">
                <Link
                  href={"https://github.com/abdurrabkhan3263"}
                  target="_blank"
                  className="hover:text-[#fff27e]"
                >
                  <FaGithubSquare size={24} />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/abdur-rab-khan-188a672a7/"}
                  target="_blank"
                  className="hover:text-[#fff27e]"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href={"https://x.com/abdurrabkhan01"}
                  target="_blank"
                  className="hover:text-[#fff27e]"
                >
                  <FaSquareXTwitter size={24} />
                </Link>
                <Link
                  href={"https://www.fiverr.com/abdurrabkhan438"}
                  target="_blank"
                  className="hover:text-[#fff27e]"
                >
                  <TbBrandFiverr size={24} />
                </Link>
                <Link
                  href={
                    "https://www.upwork.com/freelancers/~0189aced5998188a05"
                  }
                  target="_blank"
                  className="hover:text-[#fff27e]"
                >
                  <FaSquareUpwork size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14 flex gap-14 overflow-hidden">
            <span>
              <ResumeBtn />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full flex-1 items-center justify-center lg:mt-0">
        <div ref={profileImage}>
          <Image
            src={"./image__profile.jpg"}
            alt="my__image"
            width={500}
            height={500}
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
