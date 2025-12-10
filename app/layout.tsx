import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import Providers from "@/components/Providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CircuitSavers | Electronics Repair Specialists",
  description:
    "Full-service electronics repair shop offering diagnostics, repairs, and maintenance for smartphones, laptops, gaming consoles, and more."
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
