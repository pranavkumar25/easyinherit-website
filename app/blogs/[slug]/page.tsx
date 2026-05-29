import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BlogCard } from "@/components/Blogs";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { BookingTrigger } from "@/components/BookingTrigger";
import { BLOGS, getBlog, getRelatedBlogs, formatBlogDate } from "@/lib/blogs";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const blog = getBlog(params.slug);
  if (!blog) return { title: "Blog not found — EasyInherit" };
  return {
    title: `${blog.title} — EasyInherit`,
    description: blog.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const blog = getBlog(params.slug);
  if (!blog) notFound();

  const related = getRelatedBlogs(blog.slug, 3);

  return (
    <main className="relative">
      <Navbar />

      <article className="relative">
        {/* Header */}
        <header className="relative pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-32">
          <BackgroundFX variant="section" />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All articles
            </Link>

            {/* Meta */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-electric/30 bg-electric/[0.08] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-electric-200">
                {blog.category}
              </span>
              <div className="flex items-center gap-1.5 text-[12px] text-white/50">
                <Calendar className="h-3 w-3" />
                <span>{formatBlogDate(blog.date)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-white/50">
                <Clock3 className="h-3 w-3" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-balance text-[clamp(30px,4.5vw,52px)] font-medium leading-[1.1] tracking-tight text-white">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-pretty text-[16px] leading-relaxed text-white/65 sm:text-[17px]">
              {blog.excerpt}
            </p>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>
        </header>

        {/* Body */}
        <div className="relative pb-20 sm:pb-24">
          <div className="relative mx-auto max-w-3xl px-5 sm:px-6">
            <div className="flex flex-col gap-5">
              {blog.body.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="mt-6 text-[22px] font-semibold leading-snug tracking-tight text-white sm:text-[24px]"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list" && block.items) {
                  return (
                    <ul key={i} className="ml-1 flex list-none flex-col gap-3">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[15.5px] leading-relaxed text-white/75"
                        >
                          <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint shadow-[0_0_8px_rgba(34,232,155,0.7)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[15.5px] leading-[1.7] text-white/75 sm:text-[16px]"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* In-article CTA */}
            <div className="mt-12 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 sm:mt-16 sm:p-9">
              <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-mint">
                Need help with your inheritance?
              </div>
              <h3 className="mt-3 text-[22px] font-medium leading-tight tracking-tight text-white sm:text-[26px]">
                Talk to a specialist about your specific situation.
              </h3>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/60">
                Whether you&apos;re drafting your first will, navigating succession,
                or claiming an inheritance — our team will guide you through the
                next step.
              </p>
              <div className="mt-6">
                <BookingTrigger
                  variant="mint"
                  size="md"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Book a consultation
                </BookingTrigger>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="relative border-t border-white/[0.06] py-16 sm:py-20">
            <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-mint">
                    Continue reading
                  </div>
                  <h2 className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-white sm:text-[28px]">
                    More from {blog.category}
                  </h2>
                </div>
                <Link
                  href="/blogs"
                  className="hidden text-[13.5px] font-medium text-white/65 transition-colors hover:text-white sm:inline-flex sm:items-center sm:gap-1"
                >
                  All articles
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {related.map((b, i) => (
                  <BlogCard key={b.slug} blog={b} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTA />
      <Footer />
    </main>
  );
}
