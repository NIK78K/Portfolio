"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-(--surface-soft) text-(--text) transition hover:border-blue-400 hover:bg-(--surface-hover)"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}