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
                <strong>Education:</strong> B.Tech in Computer Science and
                Engineering (Artificial Intelligence), graduated 2025.
              </p>
              <p>
                I'm Omkar Kulkarni, a full-stack developer with hands-on
                experience building web applications on the MERN stack,
                along with exposure to Angular, .NET, and SQL Server. I
                enjoy combining web development with machine learning to
                solve practical problems — from crowd management systems
                to inventory tracking APIs.
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