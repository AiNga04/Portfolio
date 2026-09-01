"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  X,
} from "lucide-react";
import { cvData } from "@/lib/data";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const facebookUrl = useMemo(
    () =>
      cvData.socials.find((social) => social.platform === "Facebook")?.url ??
      "https://www.facebook.com/truong.ai.nga.2025/",
    [],
  );

  const contacts = [
    {
      label: "Zalo",
      description: "Nhắn tin qua số 0376600545",
      href: "https://zalo.me/0376600545",
      icon: null,
      external: true,
    },
    {
      label: "Facebook",
      description: "Kết nối với mình trên Facebook",
      href: facebookUrl,
      icon: Facebook,
      external: true,
    },
    {
      label: "Hotline",
      description: cvData.contact.phone,
      href: `tel:${cvData.contact.phone}`,
      icon: Phone,
      external: false,
    },
    {
      label: "Email",
      description: cvData.contact.email,
      href: `mailto:${cvData.contact.email}`,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            className="mb-5 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[1.75rem] border border-theme bg-background shadow-[0_28px_80px_rgba(37,99,235,0.2)]"
          >
            <div className="relative overflow-hidden bg-linear-to-r from-accent-blue to-accent-cyan px-6 py-5 text-white">
              <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/10" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-accent-blue shadow-lg shadow-blue-950/10">
                    <MessageSquare size={27} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">Liên hệ nhanh</h3>
                    <p className="text-sm font-semibold text-white/82">
                      Mình luôn sẵn sàng trao đổi
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close contact panel"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="space-y-3 bg-[color-mix(in_srgb,var(--background)_88%,white_8%)] px-5 py-5">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-theme bg-[color-mix(in_srgb,var(--background)_72%,white_14%)] p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent-blue/30 hover:shadow-[0_14px_34px_rgba(37,99,235,0.12)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-sapphire text-accent-blue">
                      {Icon ? (
                        <Icon size={23} />
                      ) : (
                        <span className="text-sm font-black">Zalo</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-black text-primary">
                        {contact.label}
                      </p>
                      <p className="truncate text-sm font-medium text-secondary">
                        {contact.description}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-accent-blue/35 transition-transform group-hover:translate-x-1 group-hover:text-accent-blue"
                    />
                  </a>
                );
              })}
            </div>

            <div className="border-t border-theme bg-accent-sapphire/45 px-5 py-4 text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue">
                Let&apos;s build something useful
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-accent-blue/10 animate-ping" />
            <span className="absolute -inset-5 rounded-full bg-accent-blue/8" />
          </>
        )}
        <motion.button
          type="button"
          aria-label={open ? "Close contact panel" : "Open contact panel"}
          onClick={() => setOpen((value) => !value)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-accent-blue to-accent-cyan text-white shadow-[0_18px_40px_rgba(37,99,235,0.3)]"
        >
          {open ? <X size={31} /> : <Headphones size={29} />}
        </motion.button>
      </div>
    </div>
  );
}
