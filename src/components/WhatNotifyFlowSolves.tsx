"use client";

import { motion } from "framer-motion";
import {
  Layers,
  RefreshCw,
  Radio,
  Shield,
  Workflow,
  Zap,
  Mail,
  Code2,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { solutions } from "@/lib/data";

const icons = [Layers, Workflow, RefreshCw, RefreshCw, Shield, Radio, Mail, Code2, Zap];

export function WhatNotifyFlowSolves() {
  return (
    <FadeIn id="solutions" className="border-t border-zinc-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Solutions"
          title="What NotifyFlow solves"
          description="Centralized notification infrastructure into a modular, scalable platform with clear separation of concerns."
        />

        <motion.div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, i) => {
            const Icon = icons[i] ?? Zap;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{scale:1.02}}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <Icon className="h-5 w-5 text-sky-400/80" />
                <h3 className="mt-3 font-medium text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </FadeIn>
  );
}
