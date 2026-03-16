import {HomePage} from "../screens/HomePage";
import { generateSEOMetadata } from "../components/SEO";
import { siteUrl } from "../lib/seo";

export const metadata = generateSEOMetadata({
  title: "Gir Cow A2 Milk, Bilona Ghee & Dairy Delivery in Surat, Gujarat",
  description: "Milkaaru delivers farm-fresh Gir cow A2 milk, traditional bilona ghee, paneer, and curd in Surat, Gujarat. Pure, chemical-free dairy products from trusted farmers delivered fresh to your doorstep daily.",
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
    "fresh milk home delivery Surat",
    "chemical-free milk Gujarat",
    "traditional ghee Surat",
  ],
  canonical: siteUrl,
  type: "website",
});

export default function Page() {
  return <HomePage />;
}
