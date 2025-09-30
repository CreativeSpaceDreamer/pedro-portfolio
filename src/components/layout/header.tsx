"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls } from "framer-motion";
import { Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const scrollThreshold = 12;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollThreshold;
      setScrolled(isScrolled);
      controls.start({
        y: isScrolled ? 0 : 4,
        opacity: 1,
        boxShadow: isScrolled
          ? "0 12px 35px -20px rgba(124,45,59,0.45)"
          : "0 0 0 rgba(0,0,0,0)",
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -12 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,border-color] duration-300 ease-out"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-8 rounded-full border px-5 py-3",
          "backdrop-blur-xl",
          scrolled
            ? "bg-[rgba(11,12,16,0.85)] border-border/80"
            : "bg-[rgba(11,12,16,0.6)] border-transparent"
        )}
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.28em] uppercase text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Pedro Pichardo
        </Link>
        <nav className="flex items-center gap-6 text-sm" aria-label="Site sections">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition-colors",
                  "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive && "text-foreground"
                )}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.email}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "group flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_8px_30px_rgba(124,45,59,0.35)] transition-all duration-200",
              "hover:shadow-[0_10px_38px_rgba(124,45,59,0.45)] hover:-translate-y-0.5"
            )}
          >
            <Mail className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-[1px]" />
            Email Me
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
