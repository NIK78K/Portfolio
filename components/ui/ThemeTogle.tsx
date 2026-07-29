"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="rounded-lg border border-slate-700 p-2 transition hover:border-blue-500"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}