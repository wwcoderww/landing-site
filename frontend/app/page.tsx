import Introduction from "./_components/introduction";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

export default function page() {
  return (
    <div className="pb-40">
      <Introduction />
      <Projects />
      <Skills />
    </div>
  );
}
