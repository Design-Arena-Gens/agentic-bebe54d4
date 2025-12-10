export default function EnterpriseCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="rounded-3xl border border-brand/40 bg-gradient-to-r from-brand-dark to-brand p-10 text-white shadow-[0_30px_90px_-45px_rgba(59,130,246,0.95)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-semibold">Need enterprise-grade repair coverage?</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
              From onboarding your hardware fleet to quarterly health audits, CircuitSavers FleetCare
              gives your IT team a responsive extension staffed by certified technicians.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:fleet@circuitsavers.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-dark transition hover:bg-slate-100"
            >
              Email Fleet Team
            </a>
            <a
              href="#booking"
              className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
