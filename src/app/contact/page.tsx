import type { Metadata } from "next";

import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pedro Pichardo for email/lifecycle engagements and data-focused retention systems.",
};

export default function ContactPage() {
  return <ContactContent />;
}
