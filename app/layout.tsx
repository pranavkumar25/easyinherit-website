import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EasyInherit | Inheritance, Succession & Estate Services in India",
  description:
    "EasyInherit helps Indian families and NRIs with wills, succession certificates, property transfer after death, letter of administration, death claims & inheritance disputes. Get clarity today.",
};

export const viewport: Viewport = {
  themeColor: "#0A0F22",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-midnight font-sans text-white antialiased">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
