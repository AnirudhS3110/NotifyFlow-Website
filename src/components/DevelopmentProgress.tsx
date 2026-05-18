"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  backendProgress,
  devopsProgress,
  frontendProgress,
} from "@/lib/data";

function ProgressColumn({
  title,
  items,
  status,
  delay,
}: {
  title: string;
  items: {key:string,value:string}[];
  status:"done"|"in progress";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{scale:1.02}}
      viewport={{ once: false }}
      transition={{ delay }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium text-zinc-100">{title}</h3>
  
        <span
          className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
            status === "done"
              ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30"
              : "bg-zinc-800 text-zinc-500"
          }`}
        >
          {status === "done" ? "Completed" : "In Progress"}
        </span>
      </div>
  
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item.key}
            className="flex items-start gap-2.5 text-[14.5px] text-zinc-400"
          >
            {item.value === "done" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500/80" />
            ) : (
              <Circle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
            )}
  
            {item.key}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function DevelopmentProgress() {
  return (
    <FadeIn id="progress" className="border-t border-zinc-800/80 bg-zinc-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Progress"
          title="Development progress"
          description="Active engineering across backend infrastructure, DevOps, and dashboard development."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <ProgressColumn title="Backend Infrastructure" items={backendProgress} status="done" delay={0} />
          <ProgressColumn title="Infrastructure & DevOps" items={devopsProgress} status="in progress"  delay={0.1} />
          <ProgressColumn title="Frontend & Dashboard" items={frontendProgress} status="in progress"  delay={0.2} />
        </div>

      </div>
    </FadeIn>
  );
}
