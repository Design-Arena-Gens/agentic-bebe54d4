"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = (theme === "system" ? resolvedTheme : theme) ?? "light";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-200 shadow-sm transition hover:border-brand/60 hover:text-white"
    >
      {mounted ? (isDark ? "Light Mode" : "Dark Mode") : "Theme"}
    </button>
  );
}
