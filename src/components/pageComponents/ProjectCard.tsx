"use client";
import React, { useCallback, useRef } from "react";
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
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

function ProjectCard({ project }: { project: Project }) {
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const imageElement = useRef<HTMLImageElement | null>(null);
  const videoContainer = useRef<HTMLDivElement | null>(null);
  const isMouseEnterRef = useRef(false);
  const timelineRef = useRef(gsap.timeline({ paused: true }));

  const mouseEnter = useCallback(() => {
    isMouseEnterRef.current = true;
    setTimeout(() => {
      const videoElem = videoElement.current;
      if (videoElem && isMouseEnterRef.current) {
        videoElem.play();
        timelineRef.current.play();
      }
    }, 500);
  }, []);

  const mouseLeave = useCallback(() => {
    isMouseEnterRef.current = false;
    const videoElem = videoElement.current;
    if (videoElem) {
      videoElem.pause();
      timelineRef.current.reverse();
    }
  }, []);

  React.useEffect(() => {
    const videoBox = videoContainer.current;
    const imageElem = imageElement.current;

    if (videoBox && imageElem) {
      timelineRef.current
        .to(videoBox, { opacity: 1 })
        .to(imageElem, { opacity: 0 }, "<");
    }

    const timeline = timelineRef.current;
    return () => {
      timeline.kill();
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
        <CardHeader onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <CardTitle>
            <div className="relative mb-2.5 min-h-48 w-full">
              <Image
                src={project.image?.url || ""}
                className="opacity-1 absolute right-1/2 top-0 h-full w-full translate-x-1/2 rounded-md object-cover"
                alt="Person Image"
                width={300}
                height={100}
                ref={imageElement}
                priority
              />
              <div
                className="absolute right-1/2 top-0 h-full w-full translate-x-1/2 overflow-hidden rounded-md object-cover opacity-0"
                ref={videoContainer}
              >
                <CldVideoPlayer
                  videoRef={videoElement}
                  src={project.video?.url || ""}
                  id={project._id}
                  controls
                  bigPlayButton={false}
                  loop={true}
                  muted
                  transformation={{
                    streaming_profile: "hd",
                  }}
                  sourceTypes={["hls", "dash"]}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </CardTitle>
          <CardTitle>{project.title}</CardTitle>
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
