import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Risk Architecture | TRUSTFLOW Risk Intelligence Platform",
  description: "72 enterprise risks across 4 categories — cross-industry, cross-functional, industry-specific, and emerging. AI-powered risk intelligence with actionable mitigation strategies.",
};

export default function RisksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}