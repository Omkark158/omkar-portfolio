import CodeCard from "./CodeCard";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { links } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">Hello, I'm</span>
          <h1 className="hero-name">Omkar Kulkarni</h1>
          <p className="hero-role">
            Full-Stack Developer (MERN) · B.Tech CSE (AI), 2025
          </p>

          <div className="hero-actions">
            {/* FIX: Added target="_blank" and rel="noreferrer" for seamless mobile viewing */}
            <a 
              className="btn" 
              href={links.resume} 
              target="_blank" 
              rel="noreferrer" 
              download
            >
              Download CV
            </a>
            <a className="btn btn-primary" href="#contact">
              Contact Info
            </a>
          </div>

          <div className="social-row">
            <a
              className="social-icon"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
            <a
              className="social-icon"
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon />
            </a>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}