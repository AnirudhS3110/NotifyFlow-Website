"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <FadeIn id="stack" className="border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Stack"
          title="Technology stack"
          description="Built with production-grade backend tooling and modern frontend infrastructure."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{scale:1.02}}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-sky-400/90">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-zinc-700/80 bg-zinc-950 px-3 py-1.5 font-mono text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
