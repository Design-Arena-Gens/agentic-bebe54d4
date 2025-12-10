"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Devices Repaired", value: "18,500+" },
  { label: "Same-Day Fixes", value: "92%" },
  { label: "Warranty Coverage", value: "12 months" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_45%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Same-day expert repairs for your essential tech
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Precision Repairs for Every Device You Depend On
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            CircuitSavers keeps your electronics running at peak performance. From cracked
            smartphone screens to complex PCB soldering, our certified engineers diagnose, repair,
            and rigorously QA every device with manufacturer-grade tools.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#booking"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-xl shadow-brand/40 transition hover:bg-brand-light"
            >
              Book a Repair
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-200 transition hover:border-brand hover:text-brand-light"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_40px_120px_-40px_rgba(37,99,235,0.75)]"
        >
          <div className="absolute inset-x-12 -top-3 mx-auto h-1 rounded-full bg-gradient-to-r from-brand-light via-brand to-emerald-400" />
          <div className="space-y-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">Live Diagnostics</p>
              <p className="mt-2 text-lg font-semibold text-white">Thermal camera trace</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Pinpoint overheating components with IR matrix and auto-generated repair insights.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">Micro soldering</p>
              <p className="mt-2 text-lg font-semibold text-white">0.3mm precision tips</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Certified IPC technicians restore traces, BGA chips, and flex cables with 1-year
                warranty.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-wider text-slate-400"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-sm font-semibold text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
