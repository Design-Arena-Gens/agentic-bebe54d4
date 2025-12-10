const hours = [
  { day: "Monday - Friday", time: "9:00 AM — 8:00 PM" },
  { day: "Saturday", time: "10:00 AM — 6:00 PM" },
  { day: "Sunday", time: "Emergency Support" }
];

export default function LocationHours() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
          <h3 className="text-2xl font-semibold text-white">Visit the Repair Bar</h3>
          <p className="mt-3 text-sm text-slate-300">
            Walk-ins welcome. Complimentary espresso and loaner devices available while you wait.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-200">
            {hours.map((item) => (
              <div key={item.day} className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3">
                <span>{item.day}</span>
                <span className="font-semibold text-white">{item.time}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Secure parking, EV charging stalls, and accessible entrances available on site.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-0 overflow-hidden">
          <iframe
            title="CircuitSavers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.175050005645!2d-121.89070452340272!3d37.33518187211438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccb517fe0a6f%3A0xa9ee3060f0a9c35c!2sSan%20Jose%20Technology%20Museum!5e0!3m2!1sen!2sus!4v1707777777777!5m2!1sen!2sus"
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
