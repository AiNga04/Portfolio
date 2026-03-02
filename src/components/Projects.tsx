"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best work, demonstrating my technical skills and
            problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-[#0a0c10] rounded-4xl overflow-hidden border border-white/5 hover:border-accent-cyan/30 transition-all duration-500 shadow-2xl hover:shadow-accent-cyan/10"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#0d0f14]">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-40 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    {index % 2 === 0 ? "Production" : "Masterclass"}
                  </span>
                </div>

                {/* Main Project Image */}
                <div className="absolute inset-0 z-10 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0c10] via-transparent to-transparent z-20 opacity-80" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30 px-6">
                  <div className="flex gap-4 p-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-accent-cyan/20 rounded-xl transition-all hover:scale-110 border border-white/10"
                      title="View Code"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-accent-cyan/20 rounded-xl transition-all hover:scale-110 border border-white/10"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="px-2 py-1 bg-accent-cyan/10 rounded-md border border-accent-cyan/20">
                    <ArrowRight
                      size={14}
                      className="text-accent-cyan group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[44px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-gray-500 italic">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
