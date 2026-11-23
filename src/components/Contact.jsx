import CVButton from "./CVButton";
import { WA, EMAIL, LINKEDIN, GH } from "../data";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="gt rv">Let’s Work Together</h2>
      <p className="lead rv">Open to internships and junior web developer roles. Message me directly.</p>
      <div className="row rv" style={{ justifyContent: "center" }}>
        <a className="btn wa" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className="btn" href={`mailto:${EMAIL}`}>Email</a>
        <a className="btn ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn ghost" href={GH} target="_blank" rel="noopener noreferrer">GitHub</a>
        <CVButton />
      </div>
      <p className="lead rv" style={{ marginTop: 22 }}>03295782050 · {EMAIL}</p>
    </section>
  );
}
