export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#043e48] relative overflow-hidden text-white flex items-center justify-center px-6 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,214,81,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-2xl w-full">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/30 px-6 sm:px-10 py-10 flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#f8d651] text-[#043e48] flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#f8d651]/40">
            404
          </div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#f8d651] uppercase">
            Page not found
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            The page you’re looking for isn’t here.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl">
            It may have moved or no longer exists. Let’s guide you back to fresh dairy goodness.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/"
              className="px-5 sm:px-6 py-3 rounded-md bg-[#f8d651] text-[#043e48] font-semibold shadow-lg shadow-[#f8d651]/50 hover:scale-105 transition-transform"
            >
              Go to Home
            </a>
            <a
              href="mailto:customercare@milkaaru.world"
              className="px-5 sm:px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
