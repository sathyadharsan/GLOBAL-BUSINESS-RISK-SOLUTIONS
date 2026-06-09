import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | TRUSTFLOW Industry Risk Architecture",
  description: "Sector-specific risk consulting practices with dedicated expertise across 12 verticals.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}