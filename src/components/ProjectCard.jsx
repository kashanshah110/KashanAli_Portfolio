import { useRef } from "react";
import { GH } from "../data";

export default function ProjectCard({ p }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current, b = el.getBoundingClientRect();
    el.style.setProperty("--ry", ((e.clientX - b.left) / b.width - 0.5) * 14 + "deg");
    el.style.setProperty("--rx", -((e.clientY - b.top) / b.height - 0.5) * 14 + "deg");
  };
  const onLeave = () => {
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <article ref={ref} className="card pc rv" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="tag">{p.live ? "● LIVE" : "⌥ BACKEND PROJECT"}</div>
      <h3>{p.n}</h3>
      <p>{p.d}</p>
      <div className="chips">{p.t.map((x) => <span key={x}>{x}</span>)}</div>
      <div className="row">
        {p.live && (
          <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">Live demo ↗</a>
        )}
        <a className="btn ghost" href={p.gh || GH} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      {!p.live && <small>It has a backend, so view the code on GitHub.</small>}
    </article>
  );
}
