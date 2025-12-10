const highlights = [
  {
    title: "Certified Technicians",
    detail: "Every engineer holds IPC-7711/7721, CompTIA A+, and Apple ACiT credentials."
  },
  {
    title: "Live Repair Tracker",
    detail: "Watch video updates, approve quotes, and chat with technicians in real time."
  },
  {
    title: "Premium Parts Library",
    detail: "2,300+ OEM components in stock with rapid procurement for mission-critical devices."
  },
  {
    title: "Data-Safe Workflow",
    detail: "Chain-of-custody logging, secure storage lockers, and backup snapshot policies."
  }
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-brand/60"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              {highlight.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{highlight.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
