import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={open ? "nav-open" : ""}>
      <a className="logo" href="#hero" onClick={closeMenu}>KASHAN.DEV</a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div id="nav-links" className="nav-links">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}
