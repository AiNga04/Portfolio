"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
    <nav
      className={`fixed top-0 w-full z-50 border-b border-theme transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-[color-mix(in_srgb,var(--background)_90%,transparent)] py-4"
      }`}
    >
      <div className="page-container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex cursor-pointer items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-accent-blue to-accent-cyan text-lg font-black text-white shadow-lg shadow-accent-cyan/20 transition-transform group-hover:-translate-y-0.5">
            AN
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.16em] text-primary">
              Ai Nga
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
              secure web portfolio
            </span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-xl border border-theme bg-[color-mix(in_srgb,var(--background)_76%,transparent)] p-1.5 shadow-sm">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-secondary transition-colors hover:bg-accent-cyan hover:text-white xl:px-4"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-theme bg-[color-mix(in_srgb,var(--background)_72%,transparent)] p-2 text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="lg:hidden overflow-hidden border-b border-theme bg-[color-mix(in_srgb,var(--background)_94%,transparent)] backdrop-blur-xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xl font-bold text-primary hover:text-accent-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
