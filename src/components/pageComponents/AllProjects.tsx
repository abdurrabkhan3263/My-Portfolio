"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/types";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

gsap.registerPlugin(ScrollTrigger);

export default function AllProjects() {
  const projectCards = useRef<(HTMLSpanElement | null)[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useGSAP(() => {
    if (projectCards.current.length > 0 && allProjects.length > 0) {
      const cards = projectCards.current.filter(Boolean) as HTMLSpanElement[];
      gsap.to(cards, {
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: cards[0],
          scroller: "body",
          start: "top 90%",
          end: "top 95%",
        },
      });
    }
  }, [allProjects]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/get-projects");
        if (response.status === 200) {
          if (Array.isArray(response.data.data)) {
            setAllProjects(response.data.data);
          } else {
            setAllProjects([]);
          }
        }
      } catch (error) {
        toast({
          title: "Failed to fetch projects",
          description: "Please try again",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [setAllProjects]);

  return (
    <div className="mt-16 grid grid-cols-1 gap-16 pb-16 text-white sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array.isArray(allProjects) && allProjects.length > 0 ? (
        allProjects.map((project, index) => (
          <span
            key={project._id}
            className="translate-y-12 opacity-0"
            ref={(el: HTMLSpanElement) => {
              projectCards.current[index] = el;
            }}
          >
            <ProjectCard project={project} />
          </span>
        ))
      ) : isLoading ? (
        <div className="col-span-4 flex items-start justify-center">
          <Loader2 className="animate-spin" height={60} width={60} />
        </div>
      ) : (
        <div className="col-span-5">
          <h2 className="text-center text-4xl font-semibold">
            No projects found
          </h2>
        </div>
      )}
    </div>
  );
}
