"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

import { AITrainingFitPanel } from "@/components/ai-training-fit-panel";
import { PillCTA } from "@/components/pill-cta";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { siteConfig } from "@/config/site";

const transition = { type: "spring", stiffness: 220, damping: 26, duration: 0.18 } as const;

export function HomeContent() {
  return (
    <div className="space-y-24 pb-24">
      <section className="container section-padding grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/70">
            Evercurrent · DTC Lifecycle Focus
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
            Pedro Pichardo
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground sm:max-w-xl">
            “I build and operate email/lifecycle systems for DTC. I’m currently focused on Evercurrent (my email/lifecycle agency) and I enjoy turning ambiguous workflows into clear SOPs, structured data, and better outcomes.”
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillCTA
              href={siteConfig.email}
              label="Email Me"
              icon={<Mail className="h-4 w-4" aria-hidden />}
            />
            <PillCTA
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              label="View GitHub"
              icon={<Github className="h-4 w-4" aria-hidden />}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.08 }}
          className="rounded-[32px] border border-border/60 bg-card/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
        >
          <div className="grid gap-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Email/Retention Specialist · Ecommerce Founder · Full-Stack (AI-assisted backend)
            </p>
            <p>
              Lifecycle programs demand precise segmentation, copy variants, and measurement. The real output is structured data that gives models high-quality, labeled examples.
            </p>
            <p>
              Evercurrent is the current focus — a retention agency built on SOP discipline, meticulous UTM hygiene, and retaining context across every touchpoint.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="container section-padding space-y-10">
        <SectionHeading
          eyebrow="Featured work"
          title="Retention systems that translate into structured data"
          description="Selected projects that demonstrate lifecycle depth, interface precision, and why those traits produce AI-ready datasets."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.featuredWork.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))}
        </div>
      </section>

      <section className="container section-padding">
        <AITrainingFitPanel />
      </section>
    </div>
  );
}
