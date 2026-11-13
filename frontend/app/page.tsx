import Introduction from "./_components/introduction";
import Projects from "./_components/projects";
import ScrollReset from "./_components/scroll-reset";
import Skills from "./_components/skills";

export default function page() {
  return (
    <div className="">
      <ScrollReset />
      <Introduction />
      <Projects />
      <Skills />
    </div>
  );
}
