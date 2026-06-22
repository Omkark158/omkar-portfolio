import QuickFacts from "./QuickFacts";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-eyebrow">Get to know more</span>
            <h2 className="section-title">About Me</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-grid">
            <div className="about-body">
              <p>
                I'm a full-stack developer (MERN) with a B.Tech in CSE (AI), 2025. I build web applications and enjoy combining web development with machine learning to solve real problems.
              </p>
              <p>
                I've worked with React, Node.js, MongoDB, and have exposure to Angular, .NET, and SQL Server. Comfortable working across the stack and always open to exploring new tools and frameworks.
              </p>
              <div className="about-tags">
                <span className="tag">Web Development</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Full-Stack Development</span>
              </div>
            </div>

            <QuickFacts />
          </div>
        </Reveal>
      </div>
    </section>
  );
}