import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#booking", label: "Book Repair" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg font-bold">
            CS
          </span>
          CircuitSavers
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-light transition">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/40 transition hover:bg-brand-light md:inline-flex"
          >
            Get a Quote
          </a>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
