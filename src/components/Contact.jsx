import { links } from "../data";
import { MailIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-eyebrow">Get in touch</span>
            <h2 className="section-title">Contact Me</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-card">
            <a href={`mailto:${links.email}`}>
              <MailIcon />
              {links.email}
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
