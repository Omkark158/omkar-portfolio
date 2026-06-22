import { skills } from "../data";
import { CheckIcon, TerminalIcon, LayersIcon, WrenchIcon, GraduationCapIcon } from "./Icons";
import Reveal from "./Reveal";

const CATEGORY_ICONS = {
  Languages: TerminalIcon,
  "Web Technologies": LayersIcon,
  Tools: WrenchIcon,
  Coursework: GraduationCapIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-eyebrow">Explore my</span>
            <h2 className="section-title">Skills</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="skills-grid">
            {skills.map((group) => {
              const Icon = CATEGORY_ICONS[group.category] ?? TerminalIcon;
              return (
                <div className="skill-card" key={group.category}>
                  <div className="skill-card-head">
                    <span className="skill-card-icon">
                      <Icon />
                    </span>
                    <h3>{group.category}</h3>
                  </div>
                  {group.items.map((item) => (
                    <div className="skill-item" key={item}>
                      <span className="check">
                        <CheckIcon />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
