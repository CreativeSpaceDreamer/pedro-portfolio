import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  blurb: string;
  tags: string[];
  metadata?: Array<{ label: string; value: ReactNode }>;
  links?: Array<{ label: string; href: string; external?: boolean }>;
  cta?: { label: string; href: string };
}

export function CaseStudyHeader({
  title,
  subtitle,
  blurb,
  tags,
  metadata = [],
  links = [],
  cta,
}: CaseStudyHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card p-8 shadow-[0_18px_54px_rgba(0,0,0,0.18)] sm:p-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:items-start lg:gap-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/70">
            {subtitle}
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {blurb}
          </p>
          {links.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-border/60 bg-background/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
          {metadata.length > 0 ? (
            <dl className="grid gap-3">
              {metadata.map((item) => (
                <div key={String(item.label)}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/60">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/90">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {cta ? (
            <Link
              href={cta.href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "mt-auto w-fit rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground"
              )}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-10 -top-10 h-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
    </section>
  );
}
