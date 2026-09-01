"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ShieldCheck,
  ServerCog,
  Code2,
} from "lucide-react";
import { cvData } from "@/lib/data";

const heroStats = [
  { label: "Graduation Thesis", value: "LensHub" },
  { label: "Core Stack", value: "Next + Spring" },
  { label: "Security Focus", value: "JWT/RBAC" },
];

const focusItems = [
  { label: "Full-stack", icon: Code2 },
  { label: "Secure APIs", icon: ShieldCheck },
  { label: "Backend Systems", icon: ServerCog },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = cvData.roles;

  const handleType = useCallback(() => {
    const currentRole = roles[roleIndex % roles.length];
    const updatedText = isDeleting
      ? currentRole.substring(0, text.length - 1)
      : currentRole.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentRole) {
      setTypingSpeed(2000); // Pause at end of typing
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
      setTypingSpeed(500);
    } else {
      setTypingSpeed(isDeleting ? 80 : 120);
    }
  }, [roles, roleIndex, isDeleting, text.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [handleType, typingSpeed]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--background),color-mix(in_srgb,var(--accent-sapphire)_42%,var(--background)))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="page-container flex min-h-[calc(100vh-9rem)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="eyebrow mb-6"
          >
            Portfolio &bull; Secure Fullstack Development
          </motion.p>

          <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-semibold leading-[1.05] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            I build secure web apps with{" "}
            <span className="text-gradient">clean product thinking.</span>
          </h1>

          <div className="mb-8 flex min-h-[52px] flex-wrap items-center justify-center gap-3">
            <span className="rounded-lg border border-theme bg-[color-mix(in_srgb,var(--background)_68%,transparent)] px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] text-secondary">
              {cvData.name}
            </span>
            <span className="relative inline-flex min-w-[260px] items-center rounded-lg border border-theme bg-[color-mix(in_srgb,var(--card)_72%,transparent)] px-5 py-2 text-xl font-semibold text-accent-cyan shadow-sm">
              {text}
              <span className="inline-block w-[3px] h-[0.9em] bg-accent-cyan ml-1 animate-pulse align-middle" />
            </span>
          </div>

          <p className="section-copy mx-auto mb-8 max-w-2xl">
            {cvData.tagline}
          </p>

          <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {focusItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 + index * 0.08 }}
                className="surface-card flex items-center justify-center gap-3 px-4 py-3"
              >
                <item.icon size={18} className="text-accent-cyan" />
                <span className="text-sm font-medium text-primary">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mb-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-action flex w-full items-center justify-center gap-2 px-8 py-4 shadow-xl shadow-accent-cyan/15 hover:-translate-y-0.5 hover:shadow-accent-cyan/25 sm:w-auto"
            >
              Explore My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={cvData.contact.cvUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="secondary-action group flex w-full items-center justify-center gap-2 px-8 py-4 text-primary hover:bg-accent-cyan/10 sm:w-auto"
            >
              Get Resume{" "}
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={cvData.contact.github}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-theme text-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={cvData.contact.linkedin}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-theme text-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${cvData.contact.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-theme text-secondary transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-xl border border-theme bg-[color-mix(in_srgb,var(--background)_80%,transparent)] shadow-sm sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-theme px-5 py-4 text-left last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-subtle">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-primary">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-theme rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
