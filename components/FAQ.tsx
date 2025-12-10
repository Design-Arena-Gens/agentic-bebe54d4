"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long do repairs take?",
    answer:
      "Most smartphone and tablet repairs complete in under two hours. Laptops and advanced board-level repairs typically take 24-72 hours depending on parts availability. We provide exact timelines after diagnostics."
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "Yes. We source manufacturer-grade parts with traceable serials. For legacy devices where OEM parts are unavailable, we present vetted alternatives and secure your approval before installing them."
  },
  {
    question: "Is data safe during repairs?",
    answer:
      "Our ISO 27001 aligned process encrypts and isolates customer data. Diagnostics target hardware only. If data access is necessary, we request written consent and perform operations on secured, air-gapped stations."
  },
  {
    question: "Do you offer business support?",
    answer:
      "CircuitSavers maintains SLAs for startups, schools, and enterprise fleets. Services include on-site triage, asset lifecycle tracking, and quarterly health reports. Contact us for custom coverage."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Frequently Asked</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-300">
        We keep our process transparent. If you need further clarity, our repair coordinators are a
        chat window away.
      </p>
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition"
            >
              <button
                type="button"
                onClick={() => setOpen((prev) => (prev === index ? -1 : index))}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-white"
              >
                {faq.question}
                <span className="text-xl text-brand-light">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="border-t border-white/5 px-6 py-4 text-sm leading-6 text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
