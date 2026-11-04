"use client";
import Image from "next/image";
import ScrollEffect from "./scroll-effect";

const projects = [
  {
    title: "Project 1",
    imageURL: "/custom-hompage.png",
  },
];

export default function Projects() {
  return (
    <div className="bg-zinc-500 grid grid-cols-2 text-zinc-900">
      {projects.map((project, i) => (
        <div key={i} className="flex flex-col">
          <div className="text-4xl py-12 text-center font-semibold">
            {project.title}
          </div>
          <ScrollEffect direction={i % 2 === 0 ? "left" : "right"}>
            <div className="h-130 ">
              <Image fill src={project.imageURL} alt={project.title} />
            </div>
          </ScrollEffect>
        </div>
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          <div className="text-4xl py-12 text-center font-semibold">
            Project {i + 1}
          </div>
          <ScrollEffect direction={(i + 1) % 2 === 0 ? "left" : "right"}>
            <div className="h-130 bg-zinc-300 " />
          </ScrollEffect>
        </div>
      ))}
    </div>
  );
}
