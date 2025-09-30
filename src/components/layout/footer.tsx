import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container flex flex-col items-start justify-between gap-6 border-t border-border/60 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center">
      <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">
        © {year} Pedro Pichardo. All rights reserved.
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <Link
          href="/work/evercurrent"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Contact
        </Link>
        <Link
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}

// TODO: Optional QR code/link to GitHub footer treatment.
