"use client";
import Image from "next/image";
import ScrollEffect from "./scroll-effect";
import Link from "next/link";

const projects = [
  {
    title: "Custom Hompage",
    imageURL: "/bookmarks-screenshot.png",
    link: "https://bookmarks.ezwezz.com",
  },
  {
    title: "E-Commerce",
    imageURL: "/store-screenshot.png",
    link: "https://store.ezwezz.com",
  },
];

export default function Projects() {
  return (
    <div className="bg-linear-to-br from-zinc-700 to-zinc-900 grid lg:grid-cols-2 text-zinc-900 overflow-x-clip">
      {projects.map((project, i) => (
        <div key={i} className="flex flex-col">
          <div className=" py-12 text-center ">
            <Link
              href={project.link}
              target="_blank"
              className="text-5xl font-bold duration-300 ease-in-out transition hover:-translate-y-2 hover:cursor-pointer inline-block text-amber-400"
            >
              {project.title}
            </Link>
          </div>
          <ScrollEffect direction={i % 2 === 0 ? "left" : "right"}>
            <a href={project.link}>
              <div className="md:h-130 h-70 ">
                <Image fill src={project.imageURL} alt={project.title} />
              </div>
            </a>
          </ScrollEffect>
        </div>
      ))}
      {/* {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          <div className="text-4xl py-12 text-center font-semibold">
            Project {i + 1}
          </div>
          <ScrollEffect direction={(i + 1) % 2 === 0 ? "left" : "right"}>
            <div className="h-130 bg-zinc-300 " />
          </ScrollEffect>
        </div>
      ))} */}
    </div>
  );
}
