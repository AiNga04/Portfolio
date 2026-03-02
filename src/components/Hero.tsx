"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Hero() {
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-6"
          >
            Available for opportunities
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">{cvData.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {cvData.title}. <br className="hidden md:block" />
            <span className="text-gray-400 text-xl font-normal mt-4 block">
              {cvData.tagline}
            </span>
          </h2>

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
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-semibold transition-colors"
            >
              Contact Me
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
