import type { ReactNode } from "react";

interface WorkLayoutProps {
  children: ReactNode;
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return <div className="container section-padding space-y-16 pb-28">{children}</div>;
}
