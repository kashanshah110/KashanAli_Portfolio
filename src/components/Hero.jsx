import useTypewriter from "../hooks/useTypewriter";
import CVButton from "./CVButton";
import { ROLES, WA, PHOTO_URL } from "../data";

export default function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section id="hero">
      <div>
        <p className="hi rv">HELLO, I’M</p>
        <h1 className="gt rv">Kashan Ali</h1>
        <p className="role rv">{role}</p>
        <p className="lead rv">
          I build fast, animated full-stack web apps with the MERN stack. Fly through my work below.
        </p>
        <div className="row rv">
          <a className="btn" href="#projects">Explore Projects</a>
          <CVButton />
          <a className="btn wa" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
        </div>
      </div>
      <div className="ph rv"><img src={PHOTO_URL} alt="Kashan Ali" /></div>
    </section>
  );
}
