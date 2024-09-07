"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { Navigation } from "lucide-react";
import { Project } from "@/lib/types";

function ProjectCard({ project }: { project: Project }) {
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const imageElement = useRef<HTMLImageElement | null>(null);
  const cardTitleContainer = useRef<HTMLParagraphElement | null>(null);
  const isMouseEnterRef = useRef(false);

  const mouseEnter = () => {
    isMouseEnterRef.current = true;
    setTimeout(() => {
      const videoElem = videoElement.current;
      const imageElem = imageElement.current;
      if (videoElem && imageElem && isMouseEnterRef.current) {
        gsap.to(videoElem, {
          opacity: 1,
        });
        videoElem.play();
        videoElem.autoplay = true;
        gsap.to(imageElem, {
          opacity: 0,
        });
      }
    }, 500);
  };

  const mouseLeave = () => {
    isMouseEnterRef.current = false;
    const videoElem = videoElement.current;
    const imageElem = imageElement.current;
    if (videoElem && imageElem) {
      videoElem.pause();
      gsap.to(videoElem, {
        opacity: 0,
      });
      videoElem.autoplay = false;
      gsap.to(imageElem, {
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    const cardContainer = cardTitleContainer.current;
    if (cardContainer) {
      cardContainer.addEventListener("mouseenter", mouseEnter);
      cardContainer.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (cardContainer) {
        cardContainer.removeEventListener("mouseenter", mouseEnter);
        cardContainer.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return (
    <Tilt
      className="overflow-hidden rounded-xl shadow-lg shadow-lightShadow"
      perspective={1500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.05}
    >
      <Card>
        <CardHeader>
          <CardTitle ref={cardTitleContainer}>
            <div className="relative min-h-48 w-full">
              <Image
                src={project.image || ""}
                className="opacity-1 absolute right-1/2 top-0 h-full w-full translate-x-1/2 rounded-md object-contain"
                alt="Person Image"
                width={300}
                height={100}
                ref={imageElement}
                priority
              />
              <video
                src={project.video || ""}
                muted
                loop={true}
                controls
                className="absolute right-1/2 top-0 h-full w-full translate-x-1/2 rounded-md object-cover opacity-0"
                ref={videoElement}
              ></video>
            </div>
          </CardTitle>
          <CardTitle>
            <h2 className="text-xl font-semibold">{project.title}</h2>
          </CardTitle>
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          {project?.link && (
            <Button onClick={() => window.open(project.link)}>
              Click to see
            </Button>
          )}
        </CardFooter>
      </Card>
    </Tilt>
  );
}

export default ProjectCard;

export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const nav = useRef<HTMLSpanElement | null>(null);

  return (
    <button
      className="flex w-full justify-center gap-4 overflow-hidden rounded-md border bg-red-500 py-2 text-white hover:bg-red-400"
      onClick={onClick}
    >
      {children}
      <span ref={nav}>
        <Navigation size={24} />
      </span>
    </button>
  );
}
