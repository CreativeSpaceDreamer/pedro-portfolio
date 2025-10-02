export const siteConfig = {
  name: "Pedro Pichardo",
  headline: "Email/Retention Specialist · Ecommerce Founder · Full-Stack (AI-assisted backend)",
  description:
    "Email/Retention Specialist & Ecommerce Founder building lifecycle programs and structured workflows that benefit AI training.",
  url: "https://pedro-portfolio.vercel.app",
  email: "mailto:pedropichardo00@gmail.com",
  github: "https://github.com/CreativeSpaceDreamer",
  navigation: [
    { label: "Work", href: "/work/evercurrent" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  featuredWork: [
    {
      title: "Evercurrent — Email/Lifecycle Agency",
      tags: ["Klaviyo", "Shopify", "Segmentation", "A/B Testing"],
      blurb:
        "Retention-focused email/lifecycle agency. DTC-oriented offers, segmentation logic, and lifecycle architecture.",
      href: "/work/evercurrent",
    },
    {
      title: "YouTube UI Clone (No AI)",
      tags: ["HTML5", "CSS3", "Accessibility"],
      blurb: "Pixel-tight homepage replica with semantic HTML/CSS and responsive grids.",
      href: "/work/youtube-clone",
    },
    {
      title: "Facebook UI Clone (No AI)",
      tags: ["HTML5", "CSS3"],
      blurb:
        "Feed & profile UI recreation demonstrating layout mastery and component thinking.",
      href: "/work/facebook-clone",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
