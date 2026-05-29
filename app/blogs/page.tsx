import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BlogCard } from "@/components/Blogs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { BLOGS } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs — EasyInherit",
  description:
    "Stories, explainers and frameworks on wills, succession, NRI inheritance, property transfer and rights — written for Indian families.",
};

export default function BlogsPage() {
  // Group blogs by category for the filter chips
  const categories = Array.from(new Set(BLOGS.map((b) => b.category)));

  return (
    <main className="relative">
      <Navbar />

      <section className="relative pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-32">
        <BackgroundFX variant="section" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          <div className="mt-8 sm:mt-10">
            <SectionHeader
              align="left"
              eyebrow="EasyInherit journal"
              tone="electric"
              title={
                <>
                  Inheritance,{" "}
                  <span className="gradient-text">explained.</span>
                </>
              }
              description="Plain-language articles on wills, succession, NRI inheritance, property transfer, digital assets and the laws that govern them in India."
            />
          </div>

          {/* Category chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/[0.08] px-3 py-1.5 text-[12px] font-medium text-mint">
              All ({BLOGS.length})
            </span>
            {categories.map((c) => {
              const count = BLOGS.filter((b) => b.category === c).length;
              return (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-white/65"
                >
                  {c} ({count})
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* All articles grid */}
      <section className="relative pb-24 sm:pb-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOGS.map((blog, i) => (
              <BlogCard key={blog.slug} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
