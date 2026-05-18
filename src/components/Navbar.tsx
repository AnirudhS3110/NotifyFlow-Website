"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center text-zinc-50">
          <Logo className="md:h-24 h-15 w-auto" priority />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#architecture"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
          >
            View Architecture
          </Link>
          <Link
            href="#progress"
            className="rounded-lg bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400 ring-1 ring-sky-500/30 transition hover:bg-sky-500/20"
          >
            Development
          </Link>
          <Link
            href="https://github.com/NotifyFlow"
            target="blank"
            className="rounded-lg bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400 ring-1 ring-sky-500/30 transition hover:bg-sky-500/20"
          >
           <img src="./githublogo.svg" alt="gitHub" className="h-4 -w-6"></img>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-sm text-zinc-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
