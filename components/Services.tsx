const services = [
  {
    title: "Smartphone & Tablet Repair",
    description:
      "Screen replacements, battery swaps, water damage recovery, and logic board rework for all major brands.",
    turnaround: "Under 2 hours",
    badge: "Most Popular"
  },
  {
    title: "Laptop & Desktop Diagnostics",
    description:
      "Thermal profiling, motherboard repair, data recovery, and custom performance tuning for Windows, macOS, and Linux devices.",
    turnaround: "Same-day"
  },
  {
    title: "Gaming Console Specialists",
    description:
      "HDMI port reflow, disc drive repair, firmware recovery, and cooling system upgrades for Xbox, PlayStation, and Nintendo.",
    turnaround: "24 hours"
  },
  {
    title: "Audio & Studio Electronics",
    description:
      "Amplifier calibration, mixer board repair, microphone restoration, and pro audio maintenance certified by AES technicians.",
    turnaround: "2-4 days"
  },
  {
    title: "Enterprise Fleet Maintenance",
    description:
      "On-site repairs, device lifecycle audits, and SLA-backed support for corporate workstations and POS systems.",
    turnaround: "Custom SLA",
    badge: "B2B Program"
  },
  {
    title: "Custom PCB Rework",
    description:
      "Trace repair, BGA reballing, reflow soldering, and conformal coating for prototypes and low-volume hardware runs.",
    turnaround: "Project-based"
  }
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Full-Spectrum Electronics Care
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Each repair includes detailed diagnostics, genuine replacement components, ultrasonic
            cleaning, and 25-point QA to ensure your device is road-ready and resilient.
          </p>
        </div>
        <div className="lg:ml-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-light">
            ISO 9001 Certified Lab
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-brand/60"
          >
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              {service.badge && (
                <span className="rounded-full border border-brand/60 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-light">
                  {service.badge}
                </span>
              )}
            </div>
            <p className="relative mt-4 text-sm leading-6 text-slate-300">{service.description}</p>
            <div className="relative mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Turnaround</span>
              <span className="font-semibold text-slate-200">{service.turnaround}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
