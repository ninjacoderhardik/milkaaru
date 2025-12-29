export const metadata = {
  title: "Delivery & Logistics Careers",
  description: "Join Milkaaru’s delivery and logistics team to bring fresh dairy to our customers.",
};

export default function DeliveryLogisticsPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Careers
          </p>
          <h1 className="text-3xl font-bold text-[#043e48]">Delivery & Logistics</h1>
          <p className="text-base text-[#0b2e33]/80">
            Help us deliver fresh, chemical-free dairy on time, every day.
          </p>
        </header>

        <section className="space-y-4">
          {[
            {
              title: "Role Overview",
              body: "Coordinate routes, manage cold-chain handling, and ensure timely doorstep delivery.",
            },
            {
              title: "What You’ll Do",
              body: "Plan efficient delivery runs, maintain temperature control, and communicate status updates to customers.",
            },
            {
              title: "What We Look For",
              body: "Reliability, attention to detail, comfort with early-morning runs, and a customer-first mindset.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#043e48]">{item.title}</h2>
              <p className="mt-2 text-sm text-[#0b2e33]/80">{item.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
