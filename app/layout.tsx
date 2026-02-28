import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "A3S Consulting and Business Services",
  description:
    "Specialized IT consulting and product management firm focused on fintech. Scaling innovation from Series A to Public Market.",
  keywords: [
    "fintech consulting",
    "product management",
    "IT consulting",
    "Series A scaling",
    "digital transformation",
    "compliance",
  ],
  verification: {
    google: "-ixtQC2THuXCqZoMN4NCL4EkKOubW4ykG2jSfpfWldo",
  },
  openGraph: {
    title: "A3S Consulting and Business Services",
    description:
      "Scaling Innovation from Series A to Public Market. Expert fintech consulting and product management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
