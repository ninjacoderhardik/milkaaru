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

export default function FooterSection () {
  return (
    <footer className="w-full bg-[#043e48] px-5 sm:px-8 md:px-12 lg:px-[100px] py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px] flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 border-b border-[#ffffff66] pb-8">
          <div className="flex flex-col gap-6 w-full lg:max-w-[420px] opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Nunito',Helvetica] font-bold text-[#f8d651] text-[32px] sm:text-[36px] leading-[1.2]">
                Milkaaru
              </h2>
              <p className="font-['Nunito',Helvetica] font-normal text-white text-base sm:text-lg leading-6">
                Subscribe to receive updates, exclusive offers, and fresh dairy news from Milkaaru.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                placeholder="Enter your email"
                className="w-full sm:w-auto min-w-[220px] bg-transparent border-white text-white placeholder:text-[#ffffff99] font-['Nunito',Helvetica] font-normal text-base h-auto px-4 py-3.5"
              />
              <Button className="w-full sm:w-[170px] h-auto bg-[#f8d651] hover:bg-[#f8d651]/90 text-[#043e48] font-['Nunito',Helvetica] font-bold text-base px-6 py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50">
                Subscribe
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <img
                className="w-auto h-7 transition-transform duration-300 hover:scale-110 cursor-pointer"
                alt="Social media icons"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-118.svg"
              />
            </div>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 w-full lg:flex lg:items-start">
            <div className="flex flex-col gap-4 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:400ms]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg leading-6">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col gap-3">
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

            <div className="flex flex-col gap-4 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:600ms]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg leading-6">
                CAREERS
              </h3>
              <ul className="flex flex-col gap-3">
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

            <div className="flex flex-col gap-4 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:800ms]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg leading-6">
                LEGAL
              </h3>
              <ul className="flex flex-col gap-3">
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

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-['Nunito',Helvetica] font-medium text-white text-sm sm:text-base leading-[normal]">
            © 2025, Milkaaru All rights reserved
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="tel:18001201289"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            >
              <img
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12"
                alt="Phone icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-12.svg"
              />
              <span className="font-['Nunito',Helvetica] font-medium text-white text-sm sm:text-base leading-[normal] underline">
                1800-1201289
              </span>
            </a>

            <a
              href="mailto:customercare@milkaaru.world"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            >
              <img
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12"
                alt="Email icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-17.svg"
              />
              <span className="font-['Nunito',Helvetica] font-medium text-white text-sm sm:text-base leading-[normal]">
                customercare@milkaaru.world
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
