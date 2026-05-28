import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EasyInherit — Inheritance, simplified for Indian families",
  description:
    "Modern inheritance and succession assistance for Indian families and NRIs. Wills, succession certificates, property transfer, death claims and dispute resolution — handled with clarity.",
};

export const viewport: Viewport = {
  themeColor: "#0A0F22",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-midnight font-sans text-white antialiased">{children}</body>
    </html>
  );
}
