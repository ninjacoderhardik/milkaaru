export const metadata = {
  title: "Customer Support Careers",
  description: "Join Milkaaru’s support team to assist customers with orders and subscriptions.",
};

export default function CustomerSupportPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Careers
          </p>
          <h1 className="text-3xl font-bold text-[#043e48]">Customer Support</h1>
          <p className="text-base text-[#0b2e33]/80">
            Guide customers through deliveries, subscriptions, and quality queries.
          </p>
        </header>

        <section className="space-y-4">
          {[
            {
              title: "Role Overview",
              body: "Assist customers via phone, chat, and email to resolve order and delivery questions.",
            },
            {
              title: "What You’ll Do",
              body: "Handle inquiries, escalate quality issues, and help customers adjust their plans.",
            },
            {
              title: "What We Look For",
              body: "Clear communication, empathy, problem-solving, and comfort with support tools.",
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
