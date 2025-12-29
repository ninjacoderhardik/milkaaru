export const metadata = {
  title: "Contact Us",
  description: "Reach Milkaaru for support, inquiries, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Contact
          </p>
          <h1 className="text-3xl font-bold text-[#043e48]">We’re here to help</h1>
          <p className="text-base text-[#0b2e33]/80">
            Reach out for orders, subscriptions, partnerships, or any questions. We’ll get back to you
            as soon as possible.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#043e48]">Support</h2>
              <p className="mt-2 text-sm text-[#0b2e33]/80">
                For order help, delivery concerns, or subscription changes.
              </p>
            </div>
            <div className="space-y-2 text-sm text-[#0b2e33]">
              <a
                className="flex items-center gap-2 text-[#043e48] hover:text-[#f8d651] transition"
                href="tel:18001201289"
              >
                <span>📞</span> 1800-1201289
              </a>
              <a
                className="flex items-center gap-2 text-[#043e48] hover:text-[#f8d651] transition"
                href="mailto:customercare@milkaaru.world"
              >
                <span>✉️</span> customercare@milkaaru.world
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#043e48]">Partnerships</h2>
              <p className="mt-2 text-sm text-[#0b2e33]/80">
                Collaborations, wholesale, or farm visits.
              </p>
            </div>
            <div className="space-y-2 text-sm text-[#0b2e33]">
              <a
                className="flex items-center gap-2 text-[#043e48] hover:text-[#f8d651] transition"
                href="mailto:partners@milkaaru.world"
              >
                <span>🤝</span> partners@milkaaru.world
              </a>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Milkaaru Farms, Green Pastures Road, Bengaluru, India</span>
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#043e48]/10 bg-white p-5 shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-[#043e48]">Message Us</h2>
          <p className="text-sm text-[#0b2e33]/80">
            Share your query and we’ll respond soon.
          </p>
          <form className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm text-[#0b2e33]">
                Name
                <input
                  className="rounded-lg border border-[#043e48]/15 bg-white px-3 py-2 text-sm text-[#0b2e33] shadow-sm focus:border-[#043e48] focus:outline-none focus:ring-2 focus:ring-[#f8d651]/60"
                  placeholder="Your name"
                  type="text"
                  name="name"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm text-[#0b2e33]">
                Email
                <input
                  className="rounded-lg border border-[#043e48]/15 bg-white px-3 py-2 text-sm text-[#0b2e33] shadow-sm focus:border-[#043e48] focus:outline-none focus:ring-2 focus:ring-[#f8d651]/60"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-sm text-[#0b2e33]">
              Message
              <textarea
                className="rounded-lg border border-[#043e48]/15 bg-white px-3 py-2 text-sm text-[#0b2e33] shadow-sm focus:border-[#043e48] focus:outline-none focus:ring-2 focus:ring-[#f8d651]/60"
                rows={4}
                name="message"
                placeholder="Tell us how we can help"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#043e48] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#032f38]"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
