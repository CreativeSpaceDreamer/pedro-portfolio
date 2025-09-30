"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";

const skills = [
  {
    category: "Email / Lifecycle",
    items: ["Klaviyo architecture", "Deliverability monitoring", "Lifecycle mapping", "Offer testing"],
  },
  {
    category: "Analytics",
    items: ["GA4", "Looker Studio", "UTM discipline", "Attribution sanity checks"],
  },
  {
    category: "Web",
    items: ["Next.js", "Tailwind CSS", "Semantic HTML", "Conversion-focused landing pages"],
  },
  {
    category: "Marketing Ops",
    items: ["Workflow SOPs", "CRM hygiene", "Lifecycle reporting", "Experiment logging"],
  },
  {
    category: "Gmail / JSON",
    items: ["Label + filter systems", "AppScript automations", "Structured exports", "JSON templating"],
  },
];

const transition = { type: "spring", stiffness: 240, damping: 30, duration: 0.18 } as const;

export function AboutContent() {
  return (
    <div className="container section-padding space-y-16 pb-24">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="max-w-3xl space-y-6"
      >
        <SectionHeading
          eyebrow="About"
          title="Pedro Pichardo"
          description="Digital entrepreneur experienced in building Shopify stores, testing/scaling products, and running lifecycle programs end-to-end (Klaviyo flows, segmentation, landing pages). Currently building Evercurrent, an email/lifecycle agency."
        />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          The through-line: take ambiguous workflows and turn them into documented systems. Every project — from ecommerce retention to Gmail automation — ends with clean data, reusable SOPs, and operators who know exactly what success looks like.
        </p>
      </motion.section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Skills matrix"
          title="Structured operators ship consistent outcomes"
          description="The mix blends lifecycle strategy, analytics discipline, hands-on web implementation, and the operations muscle that keeps data clean for AI training."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={transition}
              className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-[0_18px_54px_rgba(0,0,0,0.18)]"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                {skill.category}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={transition}
        className="rounded-2xl border border-border/70 bg-card/70 p-6 text-sm text-muted-foreground shadow-[0_18px_54px_rgba(0,0,0,0.18)]"
      >
        <p><strong>CDL note:</strong> Operate Class B trucks for the City of Providence — shows SOP discipline and reliability.</p>
      </motion.section>
    </div>
  );
}
