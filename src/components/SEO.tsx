import { siteUrl } from "../lib/seo";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = `${siteUrl}/milkaaru1.svg`,
  canonical,
  type = "website",
  noindex = false,
}: SEOProps) {
  const fullTitle = `${title} | Milkaaru`;
  
  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "Gir cow milk Surat",
      "A2 milk Gujarat",
      "Milkaaru",
    ],
    alternates: {
      canonical: canonical || siteUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || siteUrl,
      siteName: "Milkaaru",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@milkaaru_dairy_farm",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Product Schema Generator
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: string;
  brand?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.brand || "Milkaaru",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency || "INR",
      availability: product.availability || "https://schema.org/InStock",
      url: siteUrl,
    },
  };
}

// Article Schema Generator
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || "Milkaaru",
    },
    publisher: {
      "@type": "Organization",
      name: "Milkaaru",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/milkaaru1.svg`,
      },
    },
  };
}
