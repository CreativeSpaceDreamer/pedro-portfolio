"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const transition = { type: "spring", stiffness: 220, damping: 28, duration: 0.18 } as const;

export function ContactContent() {
  return (
    <div className="container section-padding space-y-16 pb-24">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="grid gap-10 lg:grid-cols-[0.6fr_1fr]"
      >
        <div className="rounded-[28px] border border-border/70 bg-card/70 p-8 shadow-[0_18px_54px_rgba(0,0,0,0.18)]">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s structure your lifecycle data"
            description="Retention work is easier when the workflows are labeled, logged, and measurable. Email to start a project or ask about data hygiene."
          />
          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <Link
              href="mailto:pedro@evercurrent.io"
              className={cn(
                "group inline-flex items-center gap-3 rounded-2xl border border-border/70 bg-background/40 px-4 py-3 text-sm font-semibold text-foreground transition-all",
                "hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <Mail className="h-4 w-4" aria-hidden />
              pedro@evercurrent.io
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              href="https://github.com/CreativeSpaceDreamer"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group inline-flex items-center gap-3 rounded-2xl border border-border/70 bg-background/40 px-4 py-3 text-sm font-semibold text-foreground transition-all",
                "hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub Profile
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Details before we start"
            description="Short answers to the most common questions about availability, engagement structure, and tooling."
          />
          <Accordion type="single" collapsible className="mt-8 space-y-4">
            <AccordionItem value="availability" className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
              <AccordionTrigger className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Availability
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                Currently available 20+ hrs/week with room to flex during launches or campaign peaks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="engagement" className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
              <AccordionTrigger className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Engagement structure
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                Hourly or retainer. Projects start with lifecycle mapping + SOP audit so scope is clear and data capture stays consistent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tools" className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
              <AccordionTrigger className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Tools &amp; platforms
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                Workspace, Klaviyo, Shopify, GA4, Notion, Figma, Postmark, Zapier, and clean JSON exports for training datasets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.section>
    </div>
  );
}
