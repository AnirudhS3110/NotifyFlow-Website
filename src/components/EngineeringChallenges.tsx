"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { challenges } from "@/lib/data";

export function EngineeringChallenges() {
  return (
    <FadeIn id="challenges" className="border-t border-zinc-800/80 bg-zinc-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Engineering"
          title="Real engineering challenges developers face"
          description="Production notification systems fail in predictable ways. These are the problems NotifyFlow is designed around."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-xl border-2 border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.examples.map((ex) => (
                  <span
                    key={ex}
                    className="rounded border-2 border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
