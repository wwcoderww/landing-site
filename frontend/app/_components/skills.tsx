"use client";
import ScrollEffect from "./scroll-effect";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "TypeScript",
  "React",
  "React Query",
  "React Toolkit",
  "Zod",
  "TailwindCSS",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "Drizzle",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "Linode",
  "AWS",
];

const STYLESKILLS =
  "w-90 h-70 border-4 rounded-3xl text-5xl flex justify-center items-center  bg-zinc-600 font-semibold";

export default function Skills() {
  return (
    <div className="text-amber-400">
      <div className="text-center text-7xl py-25 font-semibold">
        ✅ Active Stack & Continuous Learning ✅
      </div>
      <div className="flex flex-wrap px-6  gap-10 justify-center">
        {skills.map((skill, index) => (
          <ScrollEffect key={index} direction="bottom">
            <div className={STYLESKILLS}>{skill}</div>
          </ScrollEffect>
        ))}
      </div>
    </div>
  );
}
