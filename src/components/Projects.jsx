import { projects } from "../data";
import { GithubIcon, FolderIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-eyebrow">Browse my recent</span>
            <h2 className="section-title">Projects</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.name}>
                <span className="project-card-accent" aria-hidden="true" />
                <div className="project-card-head">
                  <span className="project-card-icon">
                    <FolderIcon />
                  </span>
                  <span className="project-tagline">{project.tagline}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon width="16" height="16" />
                  View on GitHub
                </a>
              </div>
            ))}

            {/* Explore More Card */}
            <a
              className="project-card project-card--explore"
              href="https://github.com/Omkark158"
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-card-accent" aria-hidden="true" />
              <div className="explore-card-inner">
                <span className="explore-card-icon">
                  <GithubIcon width="32" height="32" />
                </span>
                <h3>Explore More Projects</h3>
                <p>
                  Visit my GitHub to browse my full list of repositories, experiments, and active side projects.
                </p>
                <span className="explore-card-cta">
                  View GitHub Profile &#8594;
                </span>
              </div>
            </a>

          </div>
        </Reveal>
      </div>
    </section>
  );
}