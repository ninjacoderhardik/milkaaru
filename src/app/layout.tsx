import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { siteUrl } from "../lib/seo";
import { LayoutShell } from "../components/LayoutShell";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Milkaaru | Farm-Fresh Milk & Ghee",
    template: "%s | Milkaaru",
  },
  description:
    "Milkaaru delivers pure, farm-fresh milk and ghee straight from well-cared-for cows — fresh, chemical-free, and delivered daily.",
  keywords: [
    "Milkaaru",
    "fresh milk",
    "farm fresh milk",
    "ghee",
    "dairy delivery",
    "A2 milk",
    "natural dairy products",
  ],
  authors: [{ name: "Milkaaru" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Milkaaru | Farm-Fresh Milk & Ghee",
    description:
      "Pure, chemical-free milk and ghee delivered daily from pasture-raised cows.",
    siteName: "Milkaaru",
    images: [
      {
        url: `${siteUrl}/Milkaaaru.svg`,
        width: 1200,
        height: 630,
        alt: "Milkaaru dairy products brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milkaaru | Farm-Fresh Milk & Ghee",
    description:
      "Pure, chemical-free milk and ghee delivered daily from pasture-raised cows.",
    images: [`${siteUrl}/Milkaaaru.svg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/Milkaaaru.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${nunito.variable} font-sans antialiased min-h-screen bg-[#fff8e8] text-neutral-900`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
