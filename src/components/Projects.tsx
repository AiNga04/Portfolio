"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-section-soft scroll-mt-24">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            A selection of my best work, demonstrating my technical skills and
            problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`group relative surface-card overflow-hidden hover:border-accent-cyan/30 transition-all duration-500 hover:shadow-accent-cyan/10 ${
                project.featured ? "md:col-span-2 xl:col-span-1 border-accent-cyan/30" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden image-panel">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-40 px-3 py-1 bg-[color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur-md rounded-full border border-theme">
                  <span className="text-xs font-bold uppercase text-primary">
                    {project.badge ??
                      (index % 2 === 0 ? "Production" : "Masterclass")}
                  </span>
                </div>

                {/* Main Project Image */}
                <div className="absolute inset-0 z-10 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-100 transition-transform duration-500 dark:opacity-50 dark:group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 project-fade project-image-shade z-20" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                {/* Quick Actions Overlay (Desktop only) */}
                <div className="absolute inset-0 hidden xl:flex items-center justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30 px-6">
                  <div className="flex gap-4 p-2 bg-[color-mix(in_srgb,var(--background)_55%,transparent)] backdrop-blur-xl rounded-xl border border-theme">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 secondary-action hover:bg-accent-cyan/20 hover:scale-110"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 secondary-action hover:bg-accent-cyan/20 hover:scale-110"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:text-accent-cyan transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="px-2 py-1 bg-accent-cyan/10 rounded-md border border-accent-cyan/20">
                    <ArrowRight
                      size={14}
                      className="text-accent-cyan group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-2 min-h-[44px]">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="soft-chip px-3 py-1">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Mobile/Tablet Quick Actions */}
                <div className="flex xl:hidden gap-3 mb-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 secondary-action text-sm active:bg-accent-cyan/10"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent-cyan/10 active:bg-accent-cyan/20 rounded-xl border border-accent-cyan/20 text-accent-cyan text-sm font-semibold transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-theme">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] rounded-full text-xs font-semibold text-secondary hover:text-primary hover:bg-[color-mix(in_srgb,var(--foreground)_9%,transparent)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] rounded-full text-xs font-semibold text-subtle italic">
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
