"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#043e48] text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col px-4 sm:px-8 md:px-12 lg:px-[98px]">
        <nav className="relative z-30 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap md:gap-8 px-0 py-5 md:py-6 border-b border-[#ffffff4c]">
          <Link href="/">
            <img
              className="h-[66px] w-[86px] sm:h-[77px] sm:w-[100px]"
              alt="Milkaaru logo"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/untitled-design--17--1.png"
            />
          </Link>

          <div className="hidden md:flex flex-wrap items-center gap-3 sm:gap-5 md:gap-[45px]">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-['Montserrat_Alternates',Helvetica] font-semibold text-base sm:text-lg tracking-[0] leading-[normal] transition-all duration-300 hover:text-[#f8d651] hover:scale-110 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#f8d651] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex h-auto items-center justify-center gap-2.5 sm:gap-4 rounded-[60px] border border-white bg-transparent px-3 py-2.5 sm:px-4 text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#043e48] hover:shadow-lg hover:shadow-white/20"
            >
              <Link href="/contact">
                <span className="font-['Montserrat_Alternates',Helvetica] font-semibold text-base sm:text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                  Contact us
                </span>
                <img
                  className="h-5 w-5 sm:h-[30px] sm:w-[30px]"
                  alt="Arrow icon"
                  src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-11.svg"
                />
              </Link>
            </Button>

            <button
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10 md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="relative block h-5 w-7">
                <span
                  className={`absolute left-0 h-[2px] w-7 bg-current transition-transform duration-200 ${
                    isMenuOpen ? "translate-y-[10px] rotate-45" : "translate-y-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-7 translate-y-[10px] bg-current transition-opacity duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-7 bg-current transition-transform duration-200 ${
                    isMenuOpen
                      ? "translate-y-[10px] -rotate-45"
                      : "translate-y-[20px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="z-40 flex w-full flex-col gap-3 rounded-xl border border-white/10 bg-[#043e48]/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-md md:hidden">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 font-['Montserrat',Helvetica] text-base font-semibold leading-[normal] tracking-[0] text-white transition hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="flex h-auto w-full items-center justify-center gap-3 rounded-[12px] border border-white bg-transparent px-3 py-2.5 text-white transition-all duration-300 hover:bg-white hover:text-[#043e48]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
