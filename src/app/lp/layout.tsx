import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalesAI｜AIがあなたの営業をサポートする業界特化型プラットフォーム",
  description:
    "トークスクリプト・反論対策・営業文作成・商談準備。業界特化のAIが成果につながる営業を支援します。無料プランあり。",
  openGraph: {
    title: "SalesAI｜AIがあなたの営業をサポートする業界特化型プラットフォーム",
    description:
      "トークスクリプト・反論対策・営業文作成・商談準備。業界特化のAIが成果につながる営業を支援します。",
    type: "website",
    locale: "ja_JP",
    siteName: "SalesAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesAI｜AIがあなたの営業をサポートする業界特化型プラットフォーム",
    description:
      "トークスクリプト・反論対策・営業文作成・商談準備。業界特化のAIが成果につながる営業を支援します。",
  },
};

export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
