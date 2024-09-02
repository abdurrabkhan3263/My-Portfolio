import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";

function ProjectCard() {
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
                src={
                  "https://images.unsplash.com/photo-1718547963031-f35adda2ff5e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className="opacity-1 absolute right-1/2 top-0 h-full w-full translate-x-1/2 rounded-md object-cover"
                alt="Person Image"
                width={300}
                height={100}
                ref={imageElement}
              />
              <video
                src="/video2.mp4"
                muted
                loop={true}
                controls
                className="absolute right-1/2 top-0 h-full w-full translate-x-1/2 rounded-md object-cover opacity-0"
                ref={videoElement}
              ></video>
            </div>
          </CardTitle>
          <CardDescription className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            ipsum
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Click Here Brother</Button>
        </CardFooter>
      </Card>
    </Tilt>
  );
}

export default ProjectCard;

export function Button({ children }: { children: React.ReactNode }) {
  return <button className="w-full rounded-md border py-2">{children}</button>;
}
