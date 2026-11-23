import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="gt rv">Projects</h2>
      <div className="grid">
        {PROJECTS.map((p) => <ProjectCard key={p.n} p={p} />)}
      </div>
    </section>
  );
}
