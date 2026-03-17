import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, X, LucideTriangle } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const careers = [
  { href: "/careers/delivery", label: "Delivery & Logistics" },
  { href: "/careers/support", label: "Customer Support" },
  { href: "/careers/farmhand", label: "Farmhand" },
  { href: "/careers/certifications", label: "FSSAI/ISO/GMP" },
];

const legal = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/delivery-policy", label: "Delivery Policy" },
  { href: "/return-policy", label: "Return & Refund Policy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[url('/Frame276.svg')]                   
                    md:bg-[url('/Frame276.svg')]
                    bg-cover bg-center bg-no-repeat
                    relative z-0 w-full h-fit min-h-0 mt-10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Section - Logo and Subscription */}
          <div className="space-y-6 w-full max-w-[520px]">
            <div className="max-w-[420px]">
              <h3 className="text-5xl font-bold text-[#F5B860] mb-2">Milkaaru</h3>
              <p className="text-xl text-white/80">
                Subscribe to receive updates, exclusive offers, and fresh dairy news from Milkaaru.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="flex flex-col sm:flex-row gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/0 text-white placeholder-white/60 focus:outline-none"
              />
              <button className="w-full sm:w-fit min-w-[200px] shrink-0 px-4 py-3 bg-[#F5B860] hover:bg-[#E5A34A] text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-white hover:text-[#F5B860] transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-white hover:text-[#F5B860] transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white hover:text-[#F5B860] transition-colors cursor-pointer" />
              <X className="w-5 h-5 text-white hover:text-[#F5B860] transition-colors cursor-pointer" />
              <Youtube className="w-5 h-5 text-white hover:text-[#F5B860] transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Middle Section - Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#F5B860] mb-3">QUICK LINKS</h4>
              <div className="flex flex-col gap-4">
                {footerLinks.map((item) => (
                  <div key={item.href} className="flex items-center gap-2">
                    <LucideTriangle size={12} fill="#F5B860" className="text-[#F5B860] rotate-90" />
                    <Link
                      href={item.href}
                      className="text-xl text-white/80 hover:text-[#F5B860] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#F5B860] mb-3">CAREERS</h4>
              <div className="flex flex-col gap-4">
                {careers.map((item) => (
                  <div key={item.href} className="flex items-center gap-2">
                    <LucideTriangle size={12} fill="#F5B860" className="text-[#F5B860] rotate-90" />
                    <Link
                      href={item.href}
                      className="text-xl text-white/80 hover:text-[#F5B860] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#F5B860] mb-3">LEGAL</h4>
              <div className="flex flex-col gap-4">
                {legal.map((item) => (
                  <div key={item.href} className="flex items-center gap-2">
                    <LucideTriangle size={12} fill="#F5B860" className="text-[#F5B860] rotate-90" />
                    <Link
                      href={item.href}
                      className="text-xl text-white/80 hover:text-[#F5B860] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © {year} Milkaaru. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
              <span>1800-1201289</span>
              <span>customercare@milkaaru.world</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
