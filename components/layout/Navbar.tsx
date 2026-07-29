"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeTogle";

const menus = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">
          Alfath<span className="text-blue-500">.</span>
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {menu}
            </a>
          ))}

          <ThemeToggle />
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="block px-6 py-4 hover:bg-slate-900"
              onClick={() => setOpen(false)}
            >
              {menu}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}