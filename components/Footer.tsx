const quickLinks = [
  { label: "Diagnostics Lab", href: "#process" },
  { label: "Corporate Services", href: "#services" },
  { label: "Book Repair", href: "#booking" },
  { label: "Warranty Policy", href: "#" }
];

const contact = [
  { label: "support@circuitsavers.com", href: "mailto:support@circuitsavers.com" },
  { label: "1-800-555-2477", href: "tel:+18005552477" },
  { label: "2300 Silicon Ave, Suite 210, San Jose, CA", href: "#" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg font-bold">
              CS
            </span>
            CircuitSavers
          </span>
          <p className="mt-4 max-w-sm text-sm text-slate-400">
            Certified electronics repair labs serving the Bay Area with courier pickups, remote
            diagnostics, and enterprise-level care for every device that powers your life.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm text-slate-300">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-brand-light transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Contact
            </p>
            <ul className="mt-4 space-y-2">
              {contact.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-brand-light transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CircuitSavers Labs. All rights reserved.
      </div>
    </footer>
  );
}
