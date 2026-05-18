"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { heroPipeline, highlightStack } from "@/lib/data";
import { GridBackground } from "@/components/ui/GridBackground";

function PipelineVisual() {
  return (
    <div className="relative mt-12 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2 border-b border-zinc-800 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-zinc-500">notification-pipeline.ts</span>
      </div>

      <div className="relative flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        {heroPipeline.map((node, i) => (
          <motion.div key={node.id} className="relative flex flex-1 flex-col items-center">
            {i > 0 && (
              <motion.div
                className="absolute -top-4 left-1/2 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent sm:top-1/2 sm:-left-1/2 sm:block sm:h-px sm:w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              />
            )}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative z-10 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-3 text-center sm:px-4"
            >
              <span className="font-mono text-xs font-medium text-sky-400 sm:text-sm">
                {node.label}
              </span>
            </motion.div>
            {i < heroPipeline.length - 1 && (
              <motion.div
                className="my-2 h-6 w-px bg-gradient-to-b from-sky-500/50 to-transparent sm:hidden"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            x1="10%"
            y1="50%"
            x2="90%"
            y2="50%"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <GridBackground />
      <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2" />

      <div className="flex justify-between  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 font-mono text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Notifications-as-a-Service · In active development
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            Distributed notification infrastructure for modern applications.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Developer-first Notifications-as-a-Service platform for realtime, push, and
            email delivery with scalable asynchronous processing.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#architecture"
              className="inline-flex cursor-pointer min-w-[197px] items-center gap-2 rounded-lg bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              View Architecture
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#progress"
              className="inline-flex items-center min-w-[197px] gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-500"
            >
              <Code2 className="h-4 w-4" />
              Follow Development
            </Link>
            <Link
            href="https://github.com/NotifyFlow"
            target="blank"
            className="rounded-lg bg-sky-500/10 px-4 min-w-[197px] py-2 text-sm font-medium flex justify-between gap-2 my-auto text-sky-400 ring-1 ring-sky-500/30 transition hover:bg-sky-500/20"
          >
           <img src="./githublogo.svg" alt="gitHub" className="h-5 -w-5"></img>
           GitHub Repository
          </Link>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {highlightStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-xs text-zinc-400"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="./code-sample.png" className="max-w-[500px] hidden md:block my-auto rounded-xl"/>
        </motion.div>

        
      </div>
    </section>
  );
}
