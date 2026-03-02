"use client";

import { motion } from "framer-motion";
import { cvData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {cvData.about.summary}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {cvData.about.goal}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {cvData.about.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 glass p-3 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  <span className="text-gray-200 font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4 relative">
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-accent-blue/20 to-accent-cyan/20 overflow-hidden">
                <img
                  src={cvData.avatar}
                  alt={cvData.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
