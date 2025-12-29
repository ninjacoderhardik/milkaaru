import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const quickLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Our Services" },
  { label: "Product" },
  { label: "Contact Us" },
];

const careerLinks = [
  { label: "Delivery & Logistics" },
  { label: "Customer Support" },
  { label: "Farmhand" },
  { label: "FSSAI/ISO/GMP" },
];

const legalLinks = [
  { label: "Terms of Service" },
  { label: "Privacy Policy" },
  { label: "Delivery Policy" },
  { label: "Return & Refund Policy" },
];

export default function FooterSection() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#043e48] px-5 sm:px-8 md:px-12 lg:px-[100px] py-10 md:py-12">
      <div className="w-full max-w-[1240px] flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] w-full border-b border-[#ffffff33] pb-10">
          <div className="flex flex-col w-full lg:w-[360px] items-start gap-6 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="font-['Nunito',Helvetica] font-bold text-[#f8d651] text-[28px] md:text-[34px] leading-[38px]">
                Milkaaru
              </h2>
              <p className="font-['Nunito',Helvetica] font-normal text-white text-base leading-6">
                Subscribe to receive updates, exclusive offers, and fresh dairy
                news from Milkaaru.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <Input
                placeholder="Enter your email"
                className="w-full sm:w-auto sm:flex-1 bg-transparent border-white text-white placeholder:text-[#ffffff99] font-['Nunito',Helvetica] font-normal text-base h-auto px-4 py-3"
              />
              <Button className="w-full sm:w-auto h-auto bg-[#f8d651] hover:bg-[#f8d651]/90 text-[#043e48] font-['Nunito',Helvetica] font-bold text-base px-6 sm:px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50">
                Subscribe
              </Button>
            </div>

            <img
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              alt="Social media icons"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-118.svg"
            />
          </div>

          <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full opacity-0 -translate-y-4 animate-fade-in [--animation-delay:350ms]">
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg leading-6">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col items-start gap-3">
                {quickLinks.map((link, index) => (
                  <li
                    key={index}
                    className="font-['Nunito',Helvetica] font-normal text-white text-base leading-6 cursor-pointer hover:text-[#f8d651] transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg leading-6">
                CAREERS
              </h3>
              <ul className="flex flex-col items-start gap-3">
                {careerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="font-['Nunito',Helvetica] font-normal text-white text-base leading-6 cursor-pointer hover:text-[#f8d651] transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg leading-6">
                LEGAL
              </h3>
              <ul className="flex flex-col items-start gap-3">
                {legalLinks.map((link, index) => (
                  <li
                    key={index}
                    className="font-['Nunito',Helvetica] font-normal text-white text-base leading-6 cursor-pointer hover:text-[#f8d651] transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between w-full opacity-0 -translate-y-4 animate-fade-in [--animation-delay:500ms]">
          <p className="font-['Nunito',Helvetica] font-medium text-white text-sm md:text-base">
            2025, Milkaaru. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="tel:18001201289"
              className="inline-flex items-center gap-2.5 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12"
                alt="Phone icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-12.svg"
              />
              <span className="font-['Nunito',Helvetica] font-medium text-white text-sm md:text-base underline">
                1800-1201289
              </span>
            </a>

            <a
              href="mailto:customercare@milkaaru.world"
              className="inline-flex items-center gap-2.5 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12"
                alt="Email icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-17.svg"
              />
              <span className="font-['Nunito',Helvetica] font-medium text-white text-sm md:text-base">
                customercare@milkaaru.world
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
