import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { NRI } from "@/components/NRI";
import { Cities } from "@/components/Cities";
import { Founder } from "@/components/Founder";
import { Recognition } from "@/components/Recognition";
import { Blogs } from "@/components/Blogs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problem />
      <Services />
      <Approach />
      <NRI />
      <Cities />
      <Founder />
      <Recognition />
      <Blogs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
