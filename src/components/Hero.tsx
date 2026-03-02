"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [colorIndex, setColorIndex] = useState(0);

  const name = cvData.name;
  const colors = [
    "text-accent-cyan",
    "text-accent-blue",
    "text-purple-400",
    "text-emerald-400",
    "text-orange-400",
  ];

  const handleType = useCallback(() => {
    const fullText = name;
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTypingSpeed(2000); // Pause at end
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setTypingSpeed(500);
    } else {
      setTypingSpeed(isDeleting ? 100 : 150);
    }
  }, [name, isDeleting, text.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [handleType, typingSpeed]);

  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(colorTimer);
  }, [colors.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[128px] -z-10" />

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
            className="text-accent-cyan font-medium mb-4 text-lg"
          >
            Welcome, everyone! It’s great to have you here!
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight min-h-[1.2em]">
            Hi, I&apos;m{" "}
            <span
              className={`relative group inline-block transition-colors duration-1000 ${colors[colorIndex]}`}
            >
              {text}
              <span className="inline-block w-[4px] h-[0.8em] bg-current ml-1 animate-pulse align-middle" />
              <span className="absolute inset-0 blur-2xl bg-current opacity-20 scale-150 rounded-full -z-10" />
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            {cvData.title}
          </h2>

          <p className="text-gray-400 text-xl font-normal mb-8 max-w-2xl mx-auto italic">
            {cvData.tagline}
          </p>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-accent-cyan/80 text-lg font-medium mb-12 max-w-2xl mx-auto glass py-4 px-6 rounded-2xl border border-white/5"
          >
            “When you want something, all the universe conspires in helping you
            to achieve it”
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-shadow"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={cvData.contact.cvUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-semibold transition-colors flex items-center gap-2 group"
            >
              Download CV{" "}
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
