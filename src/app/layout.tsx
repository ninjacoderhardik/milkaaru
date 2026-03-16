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
    default: "Milkaaru Surat | Gir Cow A2 Milk, Bilona Ghee & Dairy Delivery in Gujarat",
    template: "%s | Milkaaru",
  },
  description:
    "Milkaaru delivers farm-fresh Gir cow A2 milk, traditional bilona ghee, paneer, and curd in Surat, Gujarat. Pure, chemical-free dairy products from trusted farmers delivered fresh to your doorstep daily.",
  keywords: [
    "Gir cow milk Surat",
    "A2 milk delivery Gujarat",
    "farm fresh milk Surat",
    "A2 ghee Surat",
    "bilona ghee Gujarat",
    "dairy farm Surat",
    "organic milk Surat",
    "A2 paneer Surat",
    "A2 curd Gujarat",
    "Milkaaru",
    "Gir cow dairy Surat",
    "fresh milk home delivery Surat",
    "chemical-free milk Gujarat",
    "traditional ghee Surat",
    "farm to home dairy Surat",
  ],
  authors: [{ name: "Milkaaru" }],
  creator: "Milkaaru",
  publisher: "Milkaaru",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Milkaaru Surat | Gir Cow A2 Milk & Bilona Ghee Delivery in Gujarat",
    description:
      "Farm-fresh Gir cow A2 milk, bilona ghee, paneer & curd delivered daily in Surat, Gujarat. Pure, chemical-free dairy from trusted farmers.",
    siteName: "Milkaaru",
    images: [
      {
        url: `${siteUrl}/milkaaru1.svg`,
        width: 1200,
        height: 630,
        alt: "Milkaaru - Farm Fresh Gir Cow Dairy Products in Surat, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milkaaru Surat | Gir Cow A2 Milk & Bilona Ghee Delivery",
    description:
      "Farm-fresh Gir cow A2 milk, bilona ghee, paneer & curd delivered daily in Surat, Gujarat.",
    images: [`${siteUrl}/milkaaru1.svg`],
    creator: "@milkaaru_dairy_farm",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/milkaaru1.svg",
    apple: "/milkaaru1.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Milkaaru",
              "description": "Farm-fresh Gir cow A2 milk and traditional dairy products delivered daily in Surat, Gujarat",
              "url": siteUrl,
              "logo": `${siteUrl}/milkaaru1.svg`,
              "image": `${siteUrl}/milkaaru1.svg`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.1702",
                "longitude": "72.8311"
              },
              "sameAs": [
                "https://www.instagram.com/milkaaru_dairy_farm"
              ],
              "priceRange": "₹₹",
              "servesCuisine": "Dairy Products",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dairy Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Gir Cow A2 Milk",
                      "description": "Farm-fresh Gir cow A2 milk delivered daily"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Bilona Ghee",
                      "description": "Traditional bilona ghee made from A2 milk"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "A2 Paneer",
                      "description": "Fresh paneer made from Gir cow A2 milk"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "A2 Curd",
                      "description": "Fresh curd made from Gir cow A2 milk"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Milkaaru",
              "url": siteUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteUrl}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
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
