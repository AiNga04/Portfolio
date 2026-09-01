"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { cvData } from "@/lib/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Socials", href: "#socials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      if (isOpen) {
        setIsOpen(false);
        // Small delay to let the menu exit animation start and avoid layout shift jitter
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // Update URL hash without jumping the page immediately
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-3 py-4 transition-all duration-300 sm:px-5 lg:py-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-3xl border border-theme bg-[color-mix(in_srgb,var(--background)_86%,white_12%)] px-4 py-3 shadow-[0_20px_70px_rgba(37,99,235,0.14)] backdrop-blur-xl transition-all duration-300 dark:bg-[color-mix(in_srgb,var(--background)_78%,white_4%)] ${
          scrolled
            ? "max-w-5xl py-2.5 shadow-[0_16px_48px_rgba(37,99,235,0.16)]"
            : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex cursor-pointer items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-accent-blue to-accent-cyan text-lg font-semibold text-white shadow-lg shadow-accent-blue/20 transition-transform group-hover:-translate-y-0.5">
            AN
          </span>
          <span className="hidden min-[420px]:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.08em] text-primary">
              Ai Nga
            </span>
            <span className="text-xs font-normal text-secondary">
              Fullstack Developer
            </span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-accent-sapphire hover:text-accent-blue xl:px-4"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href={cvData.contact.cvUrl}
            download
            className="primary-action flex items-center gap-2 px-5 py-3 text-sm shadow-lg shadow-accent-blue/20 hover:-translate-y-0.5 hover:shadow-accent-blue/30"
          >
            <Download size={17} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-theme bg-[color-mix(in_srgb,var(--background)_82%,white_10%)] text-foreground shadow-sm focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-theme bg-[color-mix(in_srgb,var(--background)_94%,white_4%)] shadow-[0_20px_60px_rgba(37,99,235,0.14)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col space-y-2 px-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-primary transition-colors hover:bg-accent-sapphire hover:text-accent-blue"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={cvData.contact.cvUrl}
                download
                className="primary-action mt-3 flex items-center justify-center gap-2 px-5 py-3 text-sm"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
