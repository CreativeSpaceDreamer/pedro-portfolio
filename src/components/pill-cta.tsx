import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PillCTAProps extends ComponentProps<typeof Link> {
  icon?: ReactNode;
  label: string;
}

export function PillCTA({ icon, label, className, ...props }: PillCTAProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
