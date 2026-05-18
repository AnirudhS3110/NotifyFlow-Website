"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { roadmapFeatures } from "@/lib/data";

export function Roadmap() {
  return (
    <FadeIn id="roadmap" className="border-t border-zinc-800/80 bg-zinc-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Roadmap"
          title="Version 1 features"
          description="Planned capabilities for the first production-ready release of NotifyFlow."
        />

        <div className="grid gap-2 sm:grid-cols-2">
          {roadmapFeatures.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{scale:1.02}}
              viewport={{ once: false }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3"
            >
              <span className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-zinc-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8"
        >
          <h3 className="font-medium text-zinc-100">Engineering goals</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            NotifyFlow is built as a learning-focused engineering project exploring distributed
            systems, asynchronous pipelines, event-driven architecture, realtime communication,
            backend scalability patterns, and infrastructure engineering.
          </p>
        </motion.div>
      </div>
    </FadeIn>
  );
}
