import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="gt rv">Skills</h2>
      <div className="sks rv">
        {SKILLS.map((s, i) => (
          <span key={s} className="sk" style={{ animationDelay: `${i * 0.25}s` }}>{s}</span>
        ))}
      </div>
    </section>
  );
}
