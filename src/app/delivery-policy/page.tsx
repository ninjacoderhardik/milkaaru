export default function DeliveryPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#043e48]">Delivery Policy</h1>
          <p className="mt-3 text-[#0b2e33]/80">
            How Milkaaru schedules, handles, and supports deliveries.
          </p>
        </header>

        <section className="space-y-5 text-[#0b2e33] leading-7">
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Service Areas</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              We deliver to supported pin codes listed at checkout. If your address falls outside
              our current coverage, we’ll notify you and won’t charge for the order.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Delivery Windows</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Standard deliveries occur in designated morning slots. Subscription customers can
              manage pause/skip options before the daily cut-off time shown at checkout.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Handling & Quality</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Products are packed to maintain freshness. Please refrigerate dairy items immediately
              on receipt. Report any quality issues within 24 hours for resolution.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Delays</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Weather, traffic, or operational issues may cause delays. We will communicate updates
              via your registered contact details whenever possible.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Failed Delivery</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              If we cannot deliver due to incorrect address or unavailability, we may attempt a
              re-delivery or issue a refund per our return/refund policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
