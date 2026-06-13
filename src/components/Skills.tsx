"use client";

import { motion } from "framer-motion";
import { cvData } from "@/lib/data";
import { Layout, Database, Zap, Cpu } from "lucide-react";

const categories = [
  {
    name: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/50",
    glow: "shadow-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "Backend",
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/50",
    glow: "shadow-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    name: "Styling",
    icon: Zap,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/50",
    glow: "shadow-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    name: "Other Skills",
    icon: Cpu,
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/50",
    glow: "shadow-orange-500/20",
    iconColor: "text-orange-400",
  },
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-background relative overflow-hidden scroll-mt-24"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative group glass p-6 rounded-2xl border ${cat.border} ${cat.glow} bg-linear-to-br ${cat.color} backdrop-blur-xl transition-all duration-500 flex flex-col items-center text-center`}
            >
              {/* Icon Header */}
              <div
                className={`p-4 icon-tile mb-6 ${cat.iconColor} group-hover:scale-110 transition-transform duration-500 shadow-xl`}
              >
                <cat.icon size={32} />
              </div>

              <h3
                className={`text-xl font-bold mb-4 ${cat.iconColor} uppercase`}
              >
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
                      className="px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-sm font-semibold text-gray-200 hover:border-white/20 transition-all hover:bg-black/60 shadow-lg"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>

              {/* Decorative background glow */}
              <div
                className={`absolute -inset-2 rounded-2xl bg-linear-to-br ${cat.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
