"use client";
import ScrollEffect from "./scroll-effect";

export default function Projects() {
  return (
    <div className="bg-zinc-500 grid grid-cols-2 text-zinc-900">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col">
          <div className="text-4xl py-12 text-center font-normal">
            Project {i + 1}
          </div>
          <ScrollEffect direction={i % 2 === 0 ? "left" : "right"}>
            <div className="h-130 bg-zinc-300 " />
          </ScrollEffect>
        </div>
      ))}
    </div>
  );
}
