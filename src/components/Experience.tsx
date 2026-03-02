"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made at various
            organizations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {cvData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-white/10 ml-4"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

              <div className="glass p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent-cyan/10 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-6">
                  <div className="flex items-start gap-4">
                    {exp.icon ? (
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                        <img
                          src={exp.icon}
                          alt={exp.company}
                          className="w-12 h-12 object-contain rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 shrink-0 text-accent-cyan">
                        <Briefcase size={24} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 font-medium">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-accent-cyan font-medium shrink-0 bg-accent-cyan/5 px-4 py-2 rounded-xl border border-accent-cyan/10">
                    <Calendar size={18} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-accent-cyan mt-1.5 shrink-0">
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-xs font-semibold text-accent-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
