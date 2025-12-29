import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Product", href: "/product" },
  { label: "Contact Us", href: "/contact" },
];

const careerLinks = [
  { label: "Delivery & Logistics", href: "/careers/delivery-logistics" },
  { label: "Customer Support", href: "/careers/customer-support" },
  { label: "Farmhand", href: "/careers/farmhand" },
  { label: "FSSAI/ISO/GMP", href: "/careers/fssai-iso-gmp" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Delivery Policy", href: "/delivery-policy" },
  { label: "Return & Refund Policy", href: "/return-refund-policy" },
];

export function FooterHome() {
  return (
    <footer className="w-full bg-[#043e48] px-5 py-10 sm:px-8 md:px-12 lg:px-[100px] md:py-12 lg:py-14">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 md:gap-12">
        <div className="flex w-full flex-col gap-10 border-b border-[#ffffff66] pb-8 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col gap-6 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms] lg:max-w-[420px]">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Nunito',Helvetica] text-[32px] font-bold leading-[1.2] text-[#f8d651] sm:text-[36px]">
                Milkaaru
              </h2>
              <p className="font-['Nunito',Helvetica] text-base font-normal leading-6 text-white sm:text-lg">
                Subscribe to receive updates, exclusive offers, and fresh dairy
                news from Milkaaru.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Input
                placeholder="Enter your email"
                className="min-w-[220px] w-full bg-transparent px-4 py-3.5 text-base font-['Nunito',Helvetica] font-normal text-white placeholder:text-[#ffffff99] sm:w-auto"
              />
              <Button className="h-auto w-full bg-[#f8d651] px-6 py-3.5 text-base font-['Nunito',Helvetica] font-bold text-[#043e48] transition-all duration-300 hover:scale-105 hover:bg-[#f8d651]/90 hover:shadow-xl hover:shadow-[#f8d651]/50 sm:w-[170px]">
                Subscribe
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <img
                className="h-7 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
                alt="Social media icons"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-118.svg"
              />
            </div>
          </div>

          <nav className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:flex lg:items-start lg:gap-10">
            <div className="flex flex-col gap-4 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:400ms]">
              <h3 className="font-['Montserrat',Helvetica] text-lg font-semibold leading-6 text-[#f8d651]">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-['Nunito',Helvetica] text-base font-normal leading-6 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#f8d651]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:600ms]">
              <h3 className="font-['Montserrat',Helvetica] text-lg font-semibold leading-6 text-[#f8d651]">
                CAREERS
              </h3>
              <ul className="flex flex-col gap-3">
                {careerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-['Nunito',Helvetica] text-base font-normal leading-6 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#f8d651]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:800ms]">
              <h3 className="font-['Montserrat',Helvetica] text-lg font-semibold leading-6 text-[#f8d651]">
                LEGAL
              </h3>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-['Nunito',Helvetica] text-base font-normal leading-6 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#f8d651]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-['Nunito',Helvetica] text-sm font-medium leading-[normal] text-white sm:text-base">
            © 2025, Milkaaru All rights reserved
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="tel:18001201289"
              className="group inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:opacity-80"
            >
              <img
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 sm:h-6 sm:w-6"
                alt="Phone icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-12.svg"
              />
              <span className="font-['Nunito',Helvetica] text-sm font-medium leading-[normal] text-white underline sm:text-base">
                1800-1201289
              </span>
            </a>

            <a
              href="mailto:customercare@milkaaru.world"
              className="group inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:opacity-80"
            >
              <img
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 sm:h-6 sm:w-6"
                alt="Email icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-17.svg"
              />
              <span className="font-['Nunito',Helvetica] text-sm font-medium leading-[normal] text-white sm:text-base">
                customercare@milkaaru.world
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
