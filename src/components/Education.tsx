"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Code2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { cvData } from "@/lib/data";

export default function Education() {
  const education = cvData.education;

  return (
    <section id="education" className="py-24 bg-section-soft scroll-mt-24">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            Academic foundation in information security, software development,
            and secure web application design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card relative mx-auto max-w-4xl overflow-hidden p-5 sm:p-8"
        >
          <div className="relative flex flex-col md:flex-row gap-6 md:items-start md:justify-between mb-8">
            <div className="flex items-start gap-4 min-w-0">
              <div className="p-2 rounded-xl icon-tile shrink-0">
                {education.icon ? (
                  <Image
                    src={education.icon}
                    alt={education.school}
                    width={56}
                    height={56}
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <GraduationCap size={32} className="text-accent-cyan" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {education.school}
                </h3>
                <div className="flex items-center gap-2 text-secondary font-medium flex-wrap">
                  <GraduationCap size={18} className="text-accent-cyan" />
                  <span>{education.degree}</span>
                </div>
                <p className="section-copy mt-4 max-w-2xl">
                  {education.focus}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-theme bg-[color-mix(in_srgb,var(--background)_62%,transparent)] px-4 py-2 font-medium text-accent-cyan">
              <Calendar size={18} />
              <span>{education.duration}</span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <BookOpen size={18} className="text-accent-cyan" />
                <span>Relevant Coursework</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="inner-surface flex items-center gap-3 rounded-full px-4 py-3 text-secondary"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <ShieldCheck size={18} className="text-accent-cyan" />
                <span>Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {education.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="soft-chip px-4 py-2"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Code2 size={18} className="text-accent-cyan" />
                <span>Activities</span>
              </div>
              <div className="inner-surface rounded-2xl px-4 py-4 leading-relaxed text-secondary">
                {education.activities}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
