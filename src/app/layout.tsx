import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Virag Bohare — Global MHM Consultant, Researcher & Founder",
  description:
    "Portfolio of Virag Bohare — international expert in menstrual hygiene management, social entrepreneurship, and sustainable energy research. Founder of Rag Innovations. Consultant to governments, NGOs, and institutions worldwide.",
  keywords: [
    "Virag Bohare",
    "Rag Innovations",
    "menstrual hygiene management",
    "MHM consultant",
    "social entrepreneur",
    "sustainable energy researcher",
    "sanitary napkin making machine",
    "global consultant",
    "MANIT Bhopal PhD",
    "women empowerment",
    "international trainer",
  ],
  authors: [{ name: "Virag Bohare" }],
  openGraph: {
    title: "Virag Bohare — Global MHM Consultant, Researcher & Founder",
    description:
      "International expert in menstrual hygiene management, sustainable energy, and social entrepreneurship. Founder of Rag Innovations.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virag Bohare — Global MHM Consultant, Researcher & Founder",
    description:
      "International expert in menstrual hygiene management, sustainable energy, and social entrepreneurship. Founder of Rag Innovations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
