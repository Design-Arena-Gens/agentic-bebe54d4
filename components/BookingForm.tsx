"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const serviceLevels = [
  { value: "priority", label: "Priority Repair (same-day +$59)" },
  { value: "standard", label: "Standard Repair (24-48h)" },
  { value: "enterprise", label: "Enterprise SLA (contract)" }
];

const deviceTypes = [
  "Smartphone",
  "Tablet",
  "Laptop",
  "Desktop",
  "Gaming Console",
  "Audio Equipment",
  "Custom Hardware"
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ message: string; reference?: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      setLoading(true);
      setResponse(null);
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit request");
      }
      setResponse({
        message: "Repair request received! A technician will confirm within 30 minutes.",
        reference: json.reference
      });
      form.reset();
    } catch (error) {
      setResponse({
        message:
          error instanceof Error ? error.message : "Unexpected error submitting your request."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_-50px_rgba(59,130,246,0.8)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Book a Repair Slot</h2>
            <p className="mt-2 text-sm text-slate-300">
              Drop off in-store or schedule a courier pickup. We confirm booking within business
              hours: Mon-Sat, 9AM-8PM.
            </p>
          </div>
          <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-200">
            24/7 Emergency Hotline · 1-800-555-2477
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Name
            <input
              name="name"
              required
              placeholder="Alex Johnson"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="(555) 555-1234"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Device Type
            <select
              name="deviceType"
              required
              defaultValue=""
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            >
              <option value="" disabled>
                Select device
              </option>
              {deviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200 md:col-span-2">
            Issue Description
            <textarea
              name="issue"
              required
              rows={4}
              placeholder="Example: Laptop shuts down unexpectedly, fan running loud, suspect overheating."
              className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Preferred Date
            <input
              type="date"
              name="preferredDate"
              required
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Service Level
            <select
              name="serviceLevel"
              required
              defaultValue=""
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            >
              <option value="" disabled>
                Choose option
              </option>
              {serviceLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Pickup Preference
            <select
              name="pickupPreference"
              defaultValue="drop-off"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            >
              <option value="drop-off">Drop off at repair bar</option>
              <option value="courier">Courier pickup (metro area)</option>
              <option value="mail-in">Mail-in with prepaid label</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Attach Diagnostic Logs (optional)
            <input
              type="url"
              name="diagnosticUrl"
              placeholder="Link to crash reports or system diagnostics"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </label>
          <div className="md:col-span-2">
            <label className="flex items-center gap-3 text-xs text-slate-300">
              <input
                type="checkbox"
                name="consent"
                required
                className="h-4 w-4 rounded border border-white/20 bg-slate-900 text-brand focus:ring-brand"
              />
              I authorize CircuitSavers to perform diagnostics that may involve opening the device.
            </label>
          </div>
          <div className="md:col-span-2 flex flex-col gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-light disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Confirm Booking"}
            </button>
            {response && (
              <p
                className={`text-sm ${
                  response.reference ? "text-emerald-300" : "text-rose-300"
                } text-center`}
              >
                {response.message}
                {response.reference && (
                  <>
                    {" "}
                    Reference: <span className="font-mono">{response.reference}</span>
                  </>
                )}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
