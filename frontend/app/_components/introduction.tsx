import Image from "next/image";

export default function Introduction() {
  return (
    <div className="bg-linear-to-bl from-zinc-900 to-zinc-700">
      <div className="grid lg:grid-cols-[4fr_2fr]">
        <div className="flex flex-col gap-12 py-20">
          <p className="md:mx-40 md:text-9xl text-7xl font-bold text-amber-400 text-center md:text-start">
            Hello, I'm <br /> Kevin Sadler
          </p>
          <div className="text-3xl px-10 pt-6 pb-10">
            <p className=" text-normal text-zinc-200">
              NextJs, ExpressJS, Docker, and Postgres developer with a passion
              for coding. Over the past 3 years, I have built a strong
              foundation in full-stack development and am eager to continue
              scaling my developer skills. Driven by continuous learning, I am
              actively seeking a collaborative position where I can work
              alongside, learn from, and meaningfully contribute with a team of
              developers!
            </p>
          </div>
          <button className="translate duration-400 ease-in-out hover:-translate-y-2 hover:cursor-pointer border-2 rounded-3xl px-6 py-3  bg-amber-400 text-zinc-800 text-4xl text-normal border-amber-300 w-70 mx-auto">
            Contact Me!
          </button>
        </div>
        <div className="w-full h-1/2 xl:h-full my-auto relative hidden lg:inline-block">
          <Image src="/bezos.png" alt="mainPic" fill className="" />
        </div>
      </div>
    </div>
  );
}
