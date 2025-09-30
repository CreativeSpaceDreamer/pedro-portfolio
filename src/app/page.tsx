import type { Metadata } from "next";

import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Email/Retention Specialist & Ecommerce Founder building lifecycle programs and structured workflows that benefit AI training.",
};

export default function HomePage() {
  return <HomeContent />;
}
