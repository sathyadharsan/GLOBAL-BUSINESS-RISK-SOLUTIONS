import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Outcomes | TRUSTFLOW",
  description:
    "Real-world enterprise risk outcome case studies demonstrating how integrated risk transfer architectures protect corporate cash flow and governance globally.",
};

export default function OutcomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}