import { Github, Linkedin, Mail } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {cvData.name}. All rights
            reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href={cvData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-cyan transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={cvData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${cvData.contact.email}`}
            className="text-gray-400 hover:text-accent-cyan transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
