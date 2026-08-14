import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiffany Eulalio, PhD | Computational Epigenetics",
  description:
    "Tiffany Eulalio is a biomedical data scientist and computational epigeneticist studying genetic, epigenetic, and clinical determinants of long-term health.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
