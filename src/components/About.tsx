"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cvData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-section scroll-mt-24">
      <div className="page-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="section-title mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-copy mb-6">
              {cvData.about.summary}
            </p>
            <p className="section-copy mb-8">
              {cvData.about.goal}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cvData.about.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="inner-surface flex items-center gap-3 rounded-full p-3 transition-colors hover:inner-surface-hover"
                >
                  <div className="h-2 w-2 rounded-full bg-accent-cyan" />
                  <span className="text-primary font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full max-w-xl"
          >
            <div className="surface-card relative aspect-square overflow-hidden p-3">
              <div className="image-panel relative h-full w-full overflow-hidden rounded-[1rem]">
                <Image
                  src={cvData.avatar}
                  alt={cvData.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
