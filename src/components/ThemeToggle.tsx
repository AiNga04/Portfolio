"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const Icon = isDark ? Sun : Moon;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <motion.button
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      onClick={() => setTheme(nextTheme)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-theme bg-[color-mix(in_srgb,var(--background)_82%,white_10%)] text-secondary shadow-sm backdrop-blur-xl transition-all hover:border-accent-blue/30 hover:bg-accent-sapphire hover:text-accent-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon size={18} strokeWidth={2.2} />
    </motion.button>
  );
}
