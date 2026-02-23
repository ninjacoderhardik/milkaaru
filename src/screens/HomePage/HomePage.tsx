"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/ui/button";
import { ProductCard } from "../../components/ProductCard";
import { GheeBottle } from "../../components/GheeBottle";
import { MilkBottle } from "../../components/MilkBottle";
import { RightModal } from "../../components/RightModal";
import { Frame498 } from "../../components/Frame498";
import { Svg1, Svg2, Svg3, Svg4 } from "../../components/svgs";

export default function HomePage () {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-[#fff8e8] overflow-hidden">
      <section className="relative z-10 mx-auto flex w-full flex-col gap-10 px-6 pb-14 pt-8 sm:px-10 md:pt-10 lg:px-16 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-base font-semibold text-[#3e2a1c] sm:text-lg">
          <Link href="/">
            <Logo className="h-16 w-auto sm:h-20" priority />
          </Link>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link href="/" className="hover:text-[#f2a33b]">Home</Link>
            <Link href="/product" className="hover:text-[#f2a33b]">Products</Link>
            <Link href="/about" className="hover:text-[#f2a33b]">About Us</Link>
            <Link href="/contact" className="hover:text-[#f2a33b]">Contact Us</Link>
          </div>
          <Button
            variant="outline"
            className="h-auto rounded-full border-2 border-[#f2a33b] bg-white px-5 py-2 text-sm font-semibold text-[#3e2a1c] shadow-sm transition hover:bg-[#fff2e2] hover:shadow"
            onClick={() => setLoginOpen(true)}
          >
            <span className="inline-flex items-center gap-2">
              <span>Log In</span>
              <span aria-hidden>→</span>
            </span>
          </Button>
        </div>

        <div className="flex min-h-[75vh] w-full items-center">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#f3b457] px-5 py-2.5 text-sm font-semibold text-[#3e2a1c] shadow-sm">
              Fresh From Our Farms
            </span>
            <h1 className="text-4xl font-bold leading-snug text-neutral-900 sm:text-5xl lg:text-6xl">
              Pure Milk & Dairy,
              <br />
              Straight From Desi Cows
            </h1>
            <p className="text-lg text-neutral-700 sm:text-xl">
              Milkaaru brings you farm-fresh Gir cow milk and authentic dairy products, sourced directly from trusted Indian farmers and delivered fresh to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-[#f2a33b] px-7 py-3.5 text-base font-semibold text-neutral-900 shadow hover:bg-[#e59221]">
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-[#f2a33b] bg-white px-7 py-3.5 text-base font-semibold text-neutral-900 hover:bg-[#fff2e2]"
              >
                Know Our Farms
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RightModal open={loginOpen} onClose={() => setLoginOpen(false)} widthClassName="w-1/2 max-w-[720px]">
        <div className="flex h-full flex-col">
          <div className="relative">
            <Frame498 className="w-full" priority />
          </div>
          <div className="flex-1 space-y-4 px-6 py-6 sm:px-8 sm:py-8 overflow-auto">
            <h3 className="text-xl font-bold text-neutral-900">Start Your Fresh Milk Journey</h3>
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-800">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your registered mobile number"
                className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#f2a33b] focus:outline-none"
              />
            </div>
            <Button className="w-full rounded-full bg-[#f2a33b] text-neutral-900 hover:bg-[#e59221]">Send OTP</Button>
            <p className="text-xs text-neutral-600">
              By continuing, you agree to Milkaaru's <a className="underline" href="#">Terms</a> & <a className="underline" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </RightModal>

      {/* Background SVG layer */}
      <div className="pointer-events-none absolute inset-0">
        <Svg1 />
      </div>

      {/* Decorative band + products */}
      <section className="relative z-0 -mt-10">
        <Svg2 className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-12 pt-12 sm:px-10 lg:px-16">
          <div className="max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Best Products</h2>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Pure Gir cow dairy products, crafted with care and delivered fresh from our farms.
            </p>
          </div>

          <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              title="Gir Cow Ghee"
              price="₹680.00"
              compareAtPrice="₹800.00"
              imageSrc="/ghee.svg"
              media={<GheeBottle className="h-[140px] w-auto" />}
            />
            <ProductCard
              title="Premium Buffalo Ghee"
              price="₹620.00"
              compareAtPrice="₹750.00"
              imageSrc="/ghee.svg"
              media={<GheeBottle className="h-[140px] w-auto" />}
            />
            <ProductCard
              title="A2 Gir Cow Milk"
              price="₹70.00"
              compareAtPrice="₹85.00"
              imageSrc="/milk.svg"
              media={<MilkBottle className="h-[140px] w-auto" />}
            />
            <ProductCard
              title="Premium Buffalo Milk"
              price="₹80.00"
              compareAtPrice="₹95.00"
              imageSrc="/milk.svg"
              media={<MilkBottle className="h-[140px] w-auto" />}
            />
          </div>
        </div>
      </section>
      {/* About section with SVG3 background */}
      <section className="relative z-10 mx-auto flex w-full flex-col gap-10 overflow-hidden rounded-3xl bg-[#fff8e8] px-6 pb-16 pt-10 sm:px-10 lg:px-16 lg:pt-14 min-h-[640px]">
        <div className="pointer-events-none absolute inset-0">
          <Svg3 className="h-full w-full max-w-none" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-full" />

          <div className="relative space-y-5 z-10">
            <span className="inline-flex items-center rounded-full bg-[#f3b457] px-4 py-2 text-xs font-semibold text-[#3e2a1c] shadow-sm">
              About Milkaaru
            </span>
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Experience & Trust in
              <br />
              Pure Gir Cow Dairy
            </h2>
            <p className="text-base text-neutral-700 sm:text-lg">
              Milkaaru is built on the belief that pure food creates healthy families. We work closely with trusted Indian farmers to bring you farm-fresh Gir cow milk and authentic dairy products, prepared with care and delivered fresh to your doorstep.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#f6c580] px-5 py-4 text-[#2f1f14] shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden>✦</span>
                  <div>
                    <h3 className="text-lg font-semibold">Dedicated Gir Cow Farmers</h3>
                    <p className="mt-1 text-sm sm:text-base text-[#3e2a1c]">
                      Our farmers follow ethical and traditional practices to ensure the health of Gir cows and the purity of the milk they produce.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#f2a33b] bg-white px-5 py-4 text-[#2f1f14] shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden>✦</span>
                  <div>
                    <h3 className="text-lg font-semibold">Traditional Dairy Experts</h3>
                    <p className="mt-1 text-sm sm:text-base text-[#3e2a1c]">
                      From bilona ghee to fresh paneer and curd, our products are made using time-tested methods without preservatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial over Svg4 background */}
      <section className="relative z-0 -mt-12 overflow-hidden">
        <Svg4 className="w-full" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="w-full max-w-3xl space-y-6 text-neutral-900 lg:mr-6">
            <p className="text-xl font-semibold leading-relaxed sm:text-2xl lg:text-3xl">
              "Milkaaru has changed the way we consume dairy. From milk to ghee, everything feels fresh, authentic, and made with care. Highly recommended for families."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/ghee.svg"
                alt="Riya Mehta"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-semibold">Riya Mehta</p>
                <p className="text-sm text-neutral-600">Homemaker & Mother of Two</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
