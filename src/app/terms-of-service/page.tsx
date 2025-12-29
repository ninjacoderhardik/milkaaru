export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#043e48]">Terms of Service</h1>
          <p className="mt-3 text-[#0b2e33]/80">
            These terms govern the use of Milkaaru’s services, deliveries, and products.
          </p>
        </header>

        <section className="space-y-5 text-[#0b2e33] leading-7">
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Use of Service</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              By placing orders or creating an account, you agree to provide accurate information
              and comply with applicable laws. Misuse, fraud, or unauthorized access is prohibited.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Orders & Availability</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Product availability may vary. We may limit quantities or cancel orders if inventory
              is constrained or if we suspect misuse. You will be notified of any changes.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Pricing & Payments</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Prices are shown in INR and may change without prior notice. Payments must be completed
              through the accepted methods at checkout. Failed payments may result in order cancellation.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Subscriptions</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              For recurring deliveries, you can modify or cancel your subscription per the notice window
              stated at checkout. Changes after cut-off may apply to the next cycle.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Liability</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              To the fullest extent permitted by law, Milkaaru is not liable for indirect or consequential
              damages arising from use of our services. Nothing limits liability where prohibited by law.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
