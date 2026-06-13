"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Contact() {
  const emailSubject = encodeURIComponent(
    "Portfolio inquiry - Fullstack Web Developer",
  );

  return (
    <section id="contact" className="py-24 bg-background scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            Ready to collaborate or have a project in mind? Feel free to reach
            out through any of the platforms below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>

            <a
              href={`mailto:${cvData.contact.email}`}
              className="flex items-center gap-6 p-6 glass rounded-2xl hover:border-accent-cyan/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Email Me At</p>
                <p className="text-lg font-bold text-gray-200">
                  {cvData.contact.email}
                </p>
              </div>
            </a>

            <a
              href={cvData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass rounded-2xl hover:border-accent-cyan/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Connect on LinkedIn
                </p>
                <p className="text-lg font-bold text-gray-200">
                  Professional Profile
                </p>
              </div>
            </a>

            <a
              href={cvData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass rounded-2xl hover:border-accent-cyan/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Follow on GitHub
                </p>
                <p className="text-lg font-bold text-gray-200">
                  Open Source Projects
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl flex flex-col justify-between gap-8"
          >
            <div>
              <p className="text-accent-cyan font-semibold uppercase text-sm mb-4">
                Let&apos;s work together
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                Open to internship, fresher, and junior web developer
                opportunities.
              </h3>
              <p className="section-copy">
                I&apos;m interested in full-stack web development roles where I
                can build clean interfaces, integrate reliable APIs, and apply
                my information security background to practical products.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${cvData.contact.email}?subject=${emailSubject}`}
                className="primary-action w-full py-4 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-cyan/20"
              >
                Email Me <Send size={20} />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={cvData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-action py-3 hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href={cvData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-action py-3 hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={cvData.contact.cvUrl}
                  download
                  className="secondary-action py-3 hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
