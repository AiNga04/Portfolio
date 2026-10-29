import { ArrowDown, ArrowUpRight, Download, Code2, ShieldCheck, MapPin } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="portfolio-hero" aria-label="Introduction">
      <div className="page-container portfolio-hero-grid">
        <div className="portfolio-hero-copy">
          <p className="portfolio-hero-note">Thoughtful code, meaningful experiences.</p>
          <h1>Trương Ái Nga</h1>
          <p className="portfolio-hero-role">Fullstack Web Developer</p>
          <ul className="portfolio-hero-description">
            <li><Code2 size={20} /><span>Responsive web experiences with React, Next.js, and Spring Boot.</span></li>
            <li><ShieldCheck size={20} /><span>A background in Information Security. Built with care.</span></li>
            <li><MapPin size={20} /><span>Based in Thủ Đức, Viet Nam. Open to fullstack opportunities.</span></li>
          </ul>
          <div className="portfolio-hero-actions">
            <a href="#projects" className="primary-action">Explore my work <ArrowUpRight size={17} /></a>
            <a href={cvData.contact.cvUrl} download className="secondary-action">Get resume <Download size={16} /></a>
          </div>
          <a href="#about" className="portfolio-hero-scroll"><ArrowDown size={16} /> Scroll to discover</a>
        </div>

      </div>
      <div className="portfolio-hero-values">
        <span>Responsive interfaces</span><span>Secure applications</span><span>Thoughtful details</span><span>Always exploring</span>
      </div>
    </section>
  );
}
