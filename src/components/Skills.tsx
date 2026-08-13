"use client";

import { motion } from "framer-motion";
import { cvData } from "@/lib/data";
import { Layout, Database, Zap, Cpu } from "lucide-react";

const categories = [
  {
    name: "Frontend",
    icon: Layout,
  },
  {
    name: "Backend",
    icon: Database,
  },
  {
    name: "Styling",
    icon: Zap,
  },
  {
    name: "Other Skills",
    icon: Cpu,
  },
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-section relative overflow-hidden scroll-mt-24"
    >
      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the modern
            tools I use to build high-performance, secure, and beautiful digital
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group surface-card flex min-w-0 flex-col items-center p-5 text-center transition-all duration-500 sm:p-6"
            >
              {/* Icon Header */}
              <div
                className="icon-tile mb-6 p-4 text-accent-cyan transition-transform duration-500 group-hover:scale-110"
              >
                <cat.icon size={32} />
              </div>

              <h3 className="display-serif mb-4 text-2xl text-primary">
                {cat.name}
              </h3>

              <div className="space-y-3 w-full mt-4">
                {cvData.skills
                  .filter((skill) => skill.category === cat.name)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="inner-surface rounded-full px-4 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:inner-surface-hover"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
