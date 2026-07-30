"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeTogle";

const menus = [
  "About",
  "Experience",
  "Projects",
  "Certificate",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/75 px-4 backdrop-blur-xl md:px-6">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            Alfath<span className="text-blue-400">.</span>
          </h1>

          <nav className="hidden items-center gap-2 md:flex">
            {menus.map((menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {menu}
              </a>
            ))}

            <ThemeToggle />
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-blue-400 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 py-3 md:hidden">
            {menus.map((menu) => (
              <a
                key={menu}
                href={`#${menu.toLowerCase()}`}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {menu}
                <span className="text-slate-500">→</span>
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