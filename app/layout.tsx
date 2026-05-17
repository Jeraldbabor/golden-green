import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT"],
});

export const metadata: Metadata = {
  title: "Golden Green — Correct fast that will last",
  description:
    "Golden Green Yellow Liquid Eraser — a plant-based, refillable correction fluid designed for yellow pad paper. Crafted with turmeric extract and bamboo packaging for a seamless, sustainable alternative to whiteout.",
  keywords: [
    "Golden Green",
    "yellow liquid eraser",
    "correction fluid",
    "eco-friendly stationery",
    "turmeric",
    "bamboo",
    "refillable",
    "sustainable supplies",
  ],
  openGraph: {
    title: "Golden Green — Correct fast that will last",
    description:
      "Plant-based, refillable yellow correction fluid for yellow pad paper.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest-900">
        <div className="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
