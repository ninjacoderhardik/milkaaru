import { generateSEOMetadata } from "../../components/SEO";
import { siteUrl } from "../../lib/seo";

export const metadata = generateSEOMetadata({
  title: "Gir Cow Dairy Products - A2 Milk, Ghee, Paneer & Curd in Surat",
  description: "Explore Milkaaru's range of farm-fresh Gir cow dairy products in Surat, Gujarat. A2 milk, traditional bilona ghee, fresh paneer, and curd - pure, chemical-free, and delivered daily.",
  keywords: [
    "Gir cow products Surat",
    "A2 milk Surat",
    "bilona ghee Gujarat",
    "fresh paneer Surat",
    "A2 curd Gujarat",
    "dairy products Surat",
    "organic dairy Gujarat",
  ],
  canonical: `${siteUrl}/product`,
});

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-[#f8d651] tracking-[0.12em] uppercase">
          Products
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#043e48] leading-tight">
          Discover our farm-fresh milk, ghee, and dairy essentials
        </h1>
        <p className="text-base sm:text-lg text-[#0b2e33]/80">
          We deliver fresh, chemical-free dairy straight from healthy, pasture-raised cows.
          Daily milk, premium ghee, and authentic dairy staples crafted with care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["A2 Milk", "Ghee", "Paneer", "Curd"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#043e48]/10 bg-white shadow-sm p-4"
            >
              <h2 className="text-lg font-semibold text-[#043e48]">{item}</h2>
              <p className="text-sm text-[#0b2e33]/80">
                Fresh, wholesome, and crafted to keep your family nourished.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
