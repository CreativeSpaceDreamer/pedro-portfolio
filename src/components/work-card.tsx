"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  title: string;
  blurb: string;
  href: string;
  tags: ReadonlyArray<string>;
  ctaLabel?: string;
}

export function WorkCard({ title, blurb, tags, href, ctaLabel = "View case study" }: WorkCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 280, damping: 30 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all"
    >
      <div>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {blurb}
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border border-border/60 bg-transparent px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground/90"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors",
            "hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        layoutId="work-card-glow"
      />
    </motion.article>
  );
}

