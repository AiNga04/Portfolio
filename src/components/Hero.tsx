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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-cyan font-semibold mb-6 text-lg tracking-widest uppercase"
          >
            Welcome &bull; It&apos;s great to have you here
          </motion.p>

          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Hi, I&apos;m{" "}
            <span className="text-gradient block md:inline mt-2 md:mt-0">
              {cvData.name}
            </span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold text-gray-300 mb-8 h-[1.2em] flex items-center justify-center">
            <span className="text-gray-400 mr-3">I am a</span>
            <span className="text-accent-cyan relative inline-block min-w-[50px]">
              {text}
              <span className="inline-block w-[3px] h-[0.9em] bg-accent-cyan ml-1 animate-pulse align-middle" />
            </span>
          </div>

          <p className="text-gray-400 text-xl font-normal mb-12 max-w-2xl mx-auto italic leading-relaxed">
            {cvData.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16 inline-block"
          >
            <div className="text-accent-cyan/90 text-lg font-medium glass py-4 px-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-3 justify-center">
                <span className="text-2xl text-accent-cyan/50">&ldquo;</span>
                When you want something, all the universe conspires in helping
                you to achieve it
                <span className="text-2xl text-accent-cyan/50">&rdquo;</span>
              </span>
              <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-all bg-shimmer"
            >
              Explore My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={cvData.contact.cvUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-bold transition-all flex items-center gap-2 group bg-shimmer"
            >
              Get Resume{" "}
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={cvData.contact.github}
              className="text-gray-400 hover:text-accent-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href={cvData.contact.linkedin}
              className="text-gray-400 hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${cvData.contact.email}`}
              className="text-gray-400 hover:text-accent-cyan transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
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
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
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
