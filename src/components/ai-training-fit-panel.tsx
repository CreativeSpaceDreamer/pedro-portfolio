"use client";

import { Database, Mailbox, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const bullets = [
  {
    icon: Workflow,
    text: "Email workflows produce clean, labeled structures (segments, events, templates) ideal for training.",
  },
  {
    icon: Mailbox,
    text: "Gmail-centric operations (filters, labels, templating) map directly to repeatable, measurable tasks.",
  },
  {
    icon: Database,
    text: "Lifecycle rigor (offers, timing, copy variants) = consistent, high-quality supervised examples.",
  },
];

export function AITrainingFitPanel() {
  return (
    <div className="rounded-[28px] border border-border/70 bg-card/70 p-8 shadow-[0_18px_54px_rgba(0,0,0,0.18)]">
      <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
        Why this benefits AI training
      </h2>
      <div className="mt-6 grid gap-5 sm:gap-7">
        {bullets.map(({ icon: Icon, text }) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 320, damping: 32, duration: 0.2 }}
            className="flex items-start gap-4 rounded-2xl border border-border/40 bg-background/40 p-5 backdrop-blur"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

