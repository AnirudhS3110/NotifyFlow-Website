"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { architectureLayers } from "@/lib/data";

export function ArchitectureOverview() {
  return (
    <FadeIn id="architecture" className="border-t border-zinc-800/80 bg-zinc-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Architecture"
          title="Event-driven notification platform"
          description="Clear separation between API orchestration, queue processing, delivery providers, and realtime gateways."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl border border-zinc-800 bg-white p-2 sm:p-4"
        >
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-sky-500/20" />
          <Image
            src="/architecture-diagram.png"
            alt="NotifyFlow system architecture: NestJS API, Redis queues, BullMQ workers, Socket.IO gateway, Firebase push, and Resend email delivery"
            width={1400}
            height={900}
            className="h-auto w-full rounded-lg"
            priority
          />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {architectureLayers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <h3 className="font-mono text-sm font-medium text-sky-400">{layer.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{layer.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
