const steps = [
  {
    title: "1. Rapid Intake",
    detail:
      "Walk-in or schedule a courier. We log your device, capture issue details, and photograph condition within 5 minutes."
  },
  {
    title: "2. Bench Diagnostics",
    detail:
      "Engineers run multi-point electrical, thermal, and software diagnostics. You receive a scoped repair quote with options."
  },
  {
    title: "3. Precision Repair",
    detail:
      "Manufacturer-grade tools, ESD-safe labs, and genuine components bring your device back to spec, backed by QA reports."
  },
  {
    title: "4. Quality Assurance",
    detail:
      "Stress tests, calibration, and final cleaning ensure optimal performance. You get a video walkthrough of the repair."
  },
  {
    title: "5. Ready for Pickup",
    detail:
      "Pick up in-store or have it delivered. Each repair includes warranty coverage and maintenance tips tailored to your device."
  }
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Transparent Repairs, Step by Step
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-300">
          Track your repair in real-time through the CircuitSavers portal. We timestamp each stage
          and notify you before any changes for full clarity.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_-40px_rgba(37,99,235,0.5)]"
            >
              <div className="absolute inset-0 rounded-3xl border border-white/5" />
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
