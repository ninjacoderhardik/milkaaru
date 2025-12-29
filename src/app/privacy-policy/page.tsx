export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#043e48]">Privacy Policy</h1>
          <p className="mt-3 text-[#0b2e33]/80">
            How Milkaaru collects, uses, and protects your personal information.
          </p>
        </header>

        <section className="space-y-5 text-[#0b2e33] leading-7">
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Data We Collect</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              We collect contact details, delivery addresses, order history, and limited device data
              for analytics and security. Payment details are processed securely by our payment
              partners and are not stored by us.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">How We Use Data</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              Data is used to fulfill orders, manage subscriptions, improve our services, and communicate
              updates or offers. We do not sell your personal information.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Sharing</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              We may share data with logistics, payment, and analytics partners to deliver the service.
              All partners are obligated to protect your information.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Security</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              We employ industry-standard safeguards. No system is fully secure; please use strong
              passwords and keep account details confidential.
            </p>
          </div>
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-[#043e48]">Your Choices</h2>
            <p className="mt-2 text-[#0b2e33]/80">
              You can update or delete your account data, opt out of marketing emails, and request
              copies of your information by contacting support.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
