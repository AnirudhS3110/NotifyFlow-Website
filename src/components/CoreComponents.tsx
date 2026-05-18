"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { coreComponents } from "@/lib/data";

export function CoreComponents() {
  return (
    <FadeIn id="components" className="border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Components"
          title="Core system components"
          description="Modular building blocks designed for independent scaling and clear ownership boundaries."
        />

        <motion.div className="grid gap-3 md:grid-cols-2">
          {coreComponents.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              whileHover={{scale:1.02}}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 font-mono text-xs text-sky-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-medium text-zinc-100">{comp.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeIn>
  );
}
