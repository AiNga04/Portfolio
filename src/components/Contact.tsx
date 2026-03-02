"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { cvData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

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
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-cyan/20 transition-all"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
