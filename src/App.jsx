import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useReveal from "./hooks/useReveal";
import { WA } from "./data";

export default function App() {
  useReveal();
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>© 2026 Kashan Ali. Built with React &amp; Three.js.</footer>
      <a className="fab" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </>
  );
}
