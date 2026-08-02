"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeTogle";

const menus = [
  "Home",
  "About",
  "Experience",
  "Portfolio",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 backdrop-blur-xl md:px-6">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-(--text)">
            PORTFOLIO<span className="text-(--primary)">.</span>
          </h1>

          <nav className="hidden items-center gap-2 md:flex">
            {menus.map((menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm text-(--text-secondary) transition hover:bg-[color:var(--surface-hover)] hover:text-(--text)"
              >
                {menu}
              </a>
            ))}

            <ThemeToggle />
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-(--surface-soft) text-(--text) transition hover:border-blue-400 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-(--border) py-3 md:hidden">
            {menus.map((menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-(--text) transition hover:bg-(--surface-hover)"
                onClick={() => setOpen(false)}
              >
                {menu}
                <span className="text-(--text-secondary)">→</span>
              </a>
            ))}

            <div className="mt-3 flex justify-end px-4 pb-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}