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
    <footer className="flex w-full relative flex-col items-center justify-center px-[100px] py-[30px] bg-[#043e48]">
      <div className="flex items-start gap-[191px] pt-0 pb-[60px] px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ffffff66]">
        <div className="flex flex-col w-[405px] items-start gap-9 relative opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
          <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[365px] items-start gap-[7px] relative flex-[0_0_auto]">
              <h2 className="relative self-stretch -mt-px font-['Nunito',Helvetica] font-bold text-[#f8d651] text-[40px] tracking-[0] leading-[44px]">
                Milkaaru
              </h2>

              <p className="relative self-stretch font-['Nunito',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                Subscribe to receive updates, exclusive offers, and fresh dairy
                news from Milkaaru.
              </p>
            </div>

            <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
              <Input
                placeholder="Enter your email"
                className="w-[214px] bg-transparent border-white text-white placeholder:text-[#ffffff99] font-['Nunito',Helvetica] font-normal text-base h-auto px-5 py-3.5"
              />

              <Button className="w-[178px] h-auto bg-[#f8d651] hover:bg-[#f8d651]/90 text-[#043e48] font-['Nunito',Helvetica] font-bold text-base px-10 py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50">
                Subscribe
              </Button>
            </div>
          </div>

          <img
            className="relative flex-[0_0_auto] transition-transform duration-300 hover:scale-110 cursor-pointer"
            alt="Social media icons"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-118.svg"
          />
        </div>

        <nav className="inline-flex items-start gap-[100px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-[129px] items-start gap-6 relative opacity-0 -translate-y-4 animate-fade-in [--animation-delay:400ms]">
            <h3 className="relative self-stretch -mt-px font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg tracking-[0] leading-6">
              QUICK LINKS
            </h3>

            <ul className="flex flex-col w-[92px] items-start gap-3.5 relative flex-[0_0_auto]">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative self-stretch font-['Nunito',Helvetica] font-normal text-white text-base tracking-[0] leading-6 cursor-pointer hover:text-[#f8d651] transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-36 items-start gap-6 relative opacity-0 -translate-y-4 animate-fade-in [--animation-delay:600ms]">
            <h3 className="relative self-stretch -mt-px font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg tracking-[0] leading-6">
              CAREERS
            </h3>

            <ul className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
              {careerLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative self-stretch font-['Nunito',Helvetica] font-normal text-white text-base tracking-[0] leading-6 cursor-pointer hover:text-[#f8d651] transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-[171px] items-start gap-6 relative opacity-0 -translate-y-4 animate-fade-in [--animation-delay:800ms]">
            <h3 className="relative self-stretch -mt-px font-['Montserrat',Helvetica] font-semibold text-[#f8d651] text-lg tracking-[0] leading-6">
              LEGAL
            </h3>

            <ul className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
              {legalLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative self-stretch font-['Nunito',Helvetica] font-normal text-white text-base tracking-[0] leading-6 cursor-pointer hover:text-[#f8d651] transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-between pt-5 pb-10 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative w-fit -mt-px font-['Nunito',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          © 2025, Milkaaru All rights reserved
        </p>

        <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
          <a
            href="tel:18001201289"
            className="inline-flex items-end gap-2.5 relative flex-[0_0_auto] hover:opacity-80 transition-all duration-300 hover:scale-105 group"
          >
            <img
              className="relative w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
              alt="Phone icon"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-12.svg"
            />

            <span className="relative w-fit -mt-px font-['Nunito',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] underline">
              1800-1201289
            </span>
          </a>

          <a
            href="mailto:customercare@milkaaru.world"
            className="inline-flex items-end gap-2.5 relative flex-[0_0_auto] hover:opacity-80 transition-all duration-300 hover:scale-105 group"
          >
            <img
              className="relative w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
              alt="Email icon"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-17.svg"
            />

            <span className="relative w-fit -mt-px font-['Nunito',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
              customercare@milkaaru.world
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
