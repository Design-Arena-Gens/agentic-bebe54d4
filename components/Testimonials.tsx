const testimonials = [
  {
    name: "Jamie Patel",
    role: "Product Designer",
    quote:
      "CircuitSavers resurrected my water-damaged MacBook in under 24 hours and provided a full diagnostic report. Their precision and transparency sets a new standard.",
    rating: 5
  },
  {
    name: "Li Wei",
    role: "Esports Coach",
    quote:
      "Our consoles need to run flawlessly. The team not only repaired HDMI ports but optimized cooling and firmware. Game nights have been smooth ever since.",
    rating: 5
  },
  {
    name: "Marissa Gomez",
    role: "Studio Engineer",
    quote:
      "They reversed a blown amp channel and recalibrated our entire mixing desk. The audio lab here understands pro gear better than the manufacturer.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
        <h2 className="text-3xl font-semibold text-white">Customers Trust CircuitSavers</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
          Verified reviews pulled from Google, Yelp, and Enterprise SLAs. We track every service
          ticket to keep customer satisfaction over 4.9/5.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-6"
            >
              <div className="flex items-center gap-2 text-brand-light">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>{index < testimonial.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-200">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 text-sm">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
