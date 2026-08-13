"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { cvData } from "@/lib/data";

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
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--border-strong),transparent)]" />

      <div className="page-container flex min-h-[calc(100vh-9rem)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="eyebrow mb-6"
          >
            Portfolio &bull; Fullstack Web Developer
          </motion.p>

          <h1 className="display-serif mx-auto mb-8 max-w-3xl text-5xl leading-[0.98] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&apos;m
            <span className="mt-2 block italic text-accent-cyan">
              {cvData.name}
            </span>
          </h1>

          <div className="mb-8 flex min-h-[52px] flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-theme bg-[color-mix(in_srgb,var(--background)_68%,transparent)] px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-secondary">
              I am a
            </span>
            <span className="display-serif relative inline-flex min-w-[260px] items-center rounded-full border border-theme bg-[color-mix(in_srgb,var(--card)_52%,transparent)] px-5 py-2 text-2xl italic text-accent-cyan shadow-sm">
              {text}
              <span className="inline-block w-[3px] h-[0.9em] bg-accent-cyan ml-1 animate-pulse align-middle" />
            </span>
          </div>

          <p className="section-copy mx-auto mb-8 max-w-2xl">
            {cvData.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl"
          >
            <div className="rounded-2xl border border-theme bg-[color-mix(in_srgb,var(--background)_62%,transparent)] px-5 py-4 shadow-sm">
              <span className="display-serif text-xl italic leading-relaxed text-primary">
                Building secure, scalable and user-centric web applications with
                modern full-stack technologies.
              </span>
            </div>
          </motion.div>

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
