import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock3 } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";
import { getFeaturedBlogs, formatBlogDate, type Blog } from "@/lib/blogs";

export function Blogs() {
  const featured = getFeaturedBlogs();

  return (
    <section id="blogs" className="relative py-20 sm:py-24 lg:py-32">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="From our journal"
          tone="electric"
          title={
            <>
              Plain answers to{" "}
              <span className="gradient-text">complex inheritance.</span>
            </>
          }
          description="Stories, explainers and frameworks on wills, succession, NRI inheritance, property transfer and rights — written for Indian families."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((blog, i) => (
            <BlogCard key={blog.slug} blog={blog} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/blogs"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-[14.5px] font-medium text-white backdrop-blur transition-all hover:border-mint/40 hover:bg-mint/[0.08] hover:text-mint"
          >
            View all articles
            <span className="grid h-5 w-5 place-items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Reusable blog card ─────────── */
export function BlogCard({ blog, index = 0 }: { blog: Blog; index?: number }) {
  // Alternate accents for visual rhythm
  const tone: "electric" | "mint" = index % 2 === 0 ? "electric" : "mint";
  const toneClasses =
    tone === "electric"
      ? "border-electric/30 bg-electric/[0.08] text-electric-200"
      : "border-mint/30 bg-mint/[0.08] text-mint";
  const hoverBorder =
    tone === "electric" ? "hover:border-electric/40" : "hover:border-mint/40";

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 ${hoverBorder} hover:bg-white/[0.04]`}
    >
      {/* Decorative glow corner */}
      <div
        className={`pointer-events-none absolute -inset-x-4 -top-12 h-24 rounded-full opacity-50 blur-2xl ${
          tone === "electric" ? "bg-electric/25" : "bg-mint/20"
        }`}
      />

      <div className="relative flex flex-1 flex-col">
        {/* Category + meta */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] ${toneClasses}`}
          >
            {blog.category}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <Clock3 className="h-3 w-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-[19px] font-medium leading-[1.25] tracking-tight text-white sm:text-[20px]">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">
          {blog.excerpt}
        </p>

        {/* Footer — pushed to bottom */}
        <div className="mt-7 flex items-end justify-between border-t border-white/[0.06] pt-4 lg:mt-auto lg:pt-5">
          <div className="text-[11.5px] uppercase tracking-[0.14em] text-white/40">
            {formatBlogDate(blog.date)}
          </div>
          <div className="inline-flex items-center gap-1 text-[12.5px] font-medium text-white/80 transition-colors group-hover:text-white">
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
