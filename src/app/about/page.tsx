import type { Metadata } from "next";

import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Digital entrepreneur focused on lifecycle programs, structured workflows, and disciplined data capture.",
};

export default function AboutPage() {
  return <AboutContent />;
}
