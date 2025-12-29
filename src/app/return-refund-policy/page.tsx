export default function ReturnRefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#043e48]">Return &amp; Refund Policy</h1>
          <p className="mt-3 text-[#0b2e33]/80">
            How Milkaaru handles quality issues, returns, and refunds for your orders.
          </p>
        </header>

        <section className="space-y-5 text-[#0b2e33] leading-7">
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Quality Concerns</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              If you receive a product that is damaged, spoiled, or incorrect, please report it within
              24 hours of delivery with your order details and photos so we can assist promptly.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Eligibility</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Perishable items are eligible for replacement or refund only when quality or delivery
              issues are validated. Opened or partially consumed items may be reviewed on a
              case-by-case basis.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Process</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Contact support with your order ID, issue description, and photos. Approved cases may be
              resolved via replacement delivery or refund to your original payment method within
              standard processing timelines.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Cancellations</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Orders can be cancelled before the daily cut-off. Post cut-off, cancellations may be
              declined if products are already dispatched or prepared.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Subscriptions</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              For recurring plans, you can pause or skip deliveries before cut-off. Refunds are not
              issued for skips requested after cut-off but will apply to future cycles.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
