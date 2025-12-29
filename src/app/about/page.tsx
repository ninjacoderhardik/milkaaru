export const metadata = {
  title: "About Milkaaru",
  description:
    "Learn how Milkaaru brings farm-fresh, chemical-free dairy from well-cared-for cows to your home.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-[#f8d651] tracking-[0.12em] uppercase">
          About Us
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#043e48] leading-tight">
          Fresh, pure milk straight from our farms to your home
        </h1>
        <p className="text-base sm:text-lg text-[#0b2e33]/80 space-y-2">
          Milkaaru sources milk from healthy, well-cared-for cows raised in a
          stress-free environment. We use hygienic, modern methods and avoid
          preservatives or additives to keep your dairy pure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Sustainable & Ethical Farming",
              desc: "Pasture-fed cows, humane care, and mindful stewardship of the land.",
            },
            {
              title: "Quality You Can Trust",
              desc: "Rigorous testing and cold-chain delivery to preserve freshness.",
            },
            {
              title: "Local & Fresh",
              desc: "Collected each morning and delivered quickly to keep it farm-fresh.",
            },
            {
              title: "Community First",
              desc: "Supporting local farmers and transparent sourcing practices.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#043e48]/10 bg-white shadow-sm p-4"
            >
              <h2 className="text-lg font-semibold text-[#043e48]">
                {item.title}
              </h2>
              <p className="text-sm text-[#0b2e33]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
