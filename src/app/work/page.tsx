import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies walking through Evercurrent and UI clones that showcase lifecycle rigor and implementation detail.",
};

export default function WorkIndexPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Work"
        title="Case studies"
        description="Detailed walkthroughs of the lifecycle systems and interface clones that demonstrate Pedro’s approach to structure, clarity, and data fidelity."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.featuredWork.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </div>
  );
}
