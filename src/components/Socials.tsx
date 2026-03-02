"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cvData } from "@/lib/data";

export default function Socials() {
  return (
    <section id="socials" className="py-24 bg-card/10 scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect <span className="text-gradient">With Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out and follow my latest updates across different
            platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cvData.socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
              }}
              className="group relative bg-[#0a0c10]/40 backdrop-blur-xl rounded-4xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              style={{ perspective: "1000px" }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-4xl blur-3xl z-0"
                style={{ backgroundColor: social.color }}
              />

              {/* Icon Container */}
              <div className="relative w-28 h-28 mb-6 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <div
                  className="absolute inset-0 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: social.color }}
                />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-inner">
                  <Image
                    src={social.icon}
                    alt={social.platform}
                    fill
                    priority={index < 2}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 150px"
                  />
                </div>
              </div>

              {/* Platform Name */}
              <h3
                className="text-xl font-bold mb-3 z-10 transition-colors duration-300"
                style={{ color: social.color }}
              >
                {social.platform}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed z-10">
                {social.description}
              </p>

              {/* Bottom Decorative Element */}
              <div
                className="absolute bottom-6 w-12 h-1 rounded-full opacity-20 transition-all duration-500 group-hover:w-24 group-hover:opacity-60"
                style={{ backgroundColor: social.color }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
