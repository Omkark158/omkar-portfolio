import { GraduationCapIcon, LayersIcon, MapPinIcon, StatusDotIcon } from "./Icons";

const FACTS = [
  { icon: GraduationCapIcon, label: "Education", value: "B.Tech CSE (AI), 2025" },
  { icon: LayersIcon, label: "Focus", value: "Full-stack web & ML" },
  { icon: MapPinIcon, label: "Based in", value: "Ichalkaranji, Maharashtra" },
  { icon: StatusDotIcon, label: "Status", value: "Open to opportunities" },
];

export default function QuickFacts() {
  return (
    <div className="quick-facts">
      {FACTS.map(({ icon: Icon, label, value }) => (
        <div className="quick-fact" key={label}>
          <span className="quick-fact-icon">
            <Icon />
          </span>
          <div>
            <span className="quick-fact-label">{label}</span>
            <span className="quick-fact-value">{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
