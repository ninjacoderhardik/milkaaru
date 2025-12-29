export const metadata = {
  title: "Our Services",
  description:
    "See how Milkaaru delivers fresh dairy daily, with flexible subscriptions and attentive customer care.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-[#f8d651] tracking-[0.12em] uppercase">
          Services
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#043e48] leading-tight">
          Delivering pure, fresh dairy goodness to your home
        </h1>
        <p className="text-base sm:text-lg text-[#0b2e33]/80">
          Daily delivery, flexible plans, and customer-first support to keep your family
          stocked with fresh, chemical-free dairy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Daily Fresh Milk Delivery",
              desc: "Morning collections, chilled logistics, and doorstep drops.",
            },
            {
              title: "Flexible Subscription Plans",
              desc: "Customize quantities, schedules, and product combinations.",
            },
            {
              title: "Quality & Safety",
              desc: "Lab-tested batches, hygienic processing, and cold-chain handling.",
            },
            {
              title: "Support & Assistance",
              desc: "Responsive customer care to adjust orders or answer questions.",
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
