import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BookingProvider } from "@/components/BookingProvider";

export const metadata: Metadata = {
  title: "EasyInherit | Inheritance, Succession & Estate Services in India",
  description:
    "EasyInherit helps Indian families and NRIs with wills, succession certificates, property transfer after death, probate, death claims & inheritance disputes. Get clarity today.",
};

export const viewport: Viewport = {
  themeColor: "#0A0F22",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-midnight font-sans text-white antialiased">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
