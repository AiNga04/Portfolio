"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeMode, useTheme } from "@/components/ThemeProvider";

const themeOptions: {
  value: ThemeMode;
  label: string;
  icon: typeof Sun;
}[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="inline-flex items-center rounded-xl border border-theme bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] p-1"
      role="radiogroup"
      aria-label="Switch theme"
    >
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const selected = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 ${
              selected
                ? "text-white"
                : "text-secondary hover:text-accent-cyan"
            }`}
            aria-label={`Use ${option.label} theme`}
            aria-checked={selected}
            role="radio"
            title={option.label}
          >
            {selected && (
              <motion.span
                layoutId="theme-toggle-active"
                className="absolute inset-0 rounded-lg bg-linear-to-r from-accent-blue to-accent-cyan shadow-lg shadow-accent-cyan/20"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <Icon size={17} className="relative z-10" />
          </button>
        );
      })}
    </div>
  );
}
