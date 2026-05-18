"use client";

import { motion } from "framer-motion";
import { Code2, Link2, Mail } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Logo className="h-11 md:h-24 w-auto" />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              Built publicly by Anirudh Selvakumar as an exploration into scalable notification
              infrastructure, realtime systems, and backend platform engineering.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex gap-3">
              <Link
                href="https://github.com/NotifyFlow"
                target="blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100"
                aria-label="GitHub"
              >
                <Code2 className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anirudh-selvakumar31/"
                target="blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100"
                aria-label="LinkedIn"
              >
                <Link2 className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:notifyflowapp@gmail.com"
                target="blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
            <p className="font-mono text-xs text-zinc-600">
              © {new Date().getFullYear()} NotifyFlow · All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
