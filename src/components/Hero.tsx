import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Code2,
  ShieldCheck,
  MapPin,
  PanelsTopLeft,
  Sparkles,
  Compass,
} from "lucide-react";
import { cvData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="portfolio-hero" aria-label="Introduction">
      <div className="page-container portfolio-hero-grid">
        <div className="portfolio-hero-copy">
          <p className="portfolio-hero-note">
            Thoughtful code, meaningful experiences.
          </p>
          <h1>Trương Ái Nga</h1>
          <p className="portfolio-hero-role">Fullstack Web Developer</p>
          <ul className="portfolio-hero-description">
            <li>
              <Code2 size={20} />
              <span>
                Fullstack web applications with Java, Spring Boot, Next.js, and TypeScript.
              </span>
            </li>
            <li>
              <ShieldCheck size={20} />
              <span>
                Secure authentication, payment integration, and Docker deployment on AWS EC2.
              </span>
            </li>
            <li>
              <MapPin size={20} />
              <span>
                Based in Thu Duc, Viet Nam. Open to fullstack opportunities.
              </span>
            </li>
          </ul>
          <div className="portfolio-hero-actions">
            <a href="#projects" className="primary-action">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a
              href={cvData.contact.cvUrl}
              download
              className="secondary-action"
            >
              Get resume <Download size={16} />
            </a>
          </div>
          <a href="#about" className="portfolio-hero-scroll">
            <ArrowDown size={16} /> Scroll to discover
          </a>
        </div>
      </div>
      <div className="portfolio-hero-values">
        <span>
          <PanelsTopLeft size={23} aria-hidden="true" />
          Responsive interfaces
        </span>
        <span>
          <ShieldCheck size={23} aria-hidden="true" />
          Secure applications
        </span>
        <span>
          <Sparkles size={23} aria-hidden="true" />
          Thoughtful details
        </span>
        <span>
          <Compass size={23} aria-hidden="true" />
          Always exploring
        </span>
      </div>
    </section>
  );
}
