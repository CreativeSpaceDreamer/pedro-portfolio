import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <div className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </div>
      ) : null}
    </div>
  );
}
