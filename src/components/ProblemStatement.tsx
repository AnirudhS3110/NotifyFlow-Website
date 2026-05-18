"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { problemPoints } from "@/lib/data";

export function ProblemStatement() {
  return (
    <FadeIn id="problem" className="border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Problem"
          title="Why notification systems become difficult"
          description="Most applications start with simple sendEmail and sendPush calls. As products scale, notification logic becomes a complex distributed system tightly coupled to business logic."
        />

        <div className="grid gap-8 lg:grid-cols-1">
          {/* <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 font-mono text-sm">
            <p className="text-zinc-500">// early stage</p>
            <p className="mt-2 text-sky-400">sendEmail(user)</p>
            <p className="text-sky-400">sendPush(user)</p>
            <p className="mt-6 text-zinc-500">// at scale</p>
            <p className="mt-2 text-amber-400/90">retryOrchestrator.enqueue(...)</p>
            <p className="text-amber-400/90">idempotencyGuard.validate(...)</p>
            <p className="text-amber-400/90">deliveryStateMachine.transition(...)</p>
            <p className="text-amber-400/90">websocketGateway.broadcast(...)</p>
          </div> */}

          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-3">
            {problemPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.04 }}
                whileHover={{scale:1.01}}
                className="flex items-start gap-3 rounded-lg border border-zinc-800 border-2 bg-zinc-950/50 px-3 py-2.5 text-md text-zinc-400"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
