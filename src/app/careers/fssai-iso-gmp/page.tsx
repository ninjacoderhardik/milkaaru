export const metadata = {
  title: "FSSAI / ISO / GMP Careers",
  description: "Join Milkaaru’s quality and compliance team to uphold food safety standards.",
};

export default function FssaiIsoGmpPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#0b2e33] px-5 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f8d651]">
            Careers
          </p>
          <h1 className="text-3xl font-bold text-[#043e48]">FSSAI / ISO / GMP</h1>
          <p className="text-base text-[#0b2e33]/80">
            Ensure Milkaaru’s dairy meets stringent safety, hygiene, and compliance standards.
          </p>
        </header>

        <section className="space-y-4">
          {[
            {
              title: "Role Overview",
              body: "Lead food safety protocols, audits, and certifications across production and logistics.",
            },
            {
              title: "What You’ll Do",
              body: "Maintain SOPs, conduct inspections, train teams on hygiene, and prepare for regulatory audits.",
            },
            {
              title: "What We Look For",
              body: "Experience with FSSAI/ISO/GMP standards, documentation rigor, and a quality-first mindset.",
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
