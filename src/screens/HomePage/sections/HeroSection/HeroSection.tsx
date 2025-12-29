import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
];

const customerAvatars = [
  {
    src: "https://c.animaapp.com/mj71wa7zCf2vzX/img/ellipse-2.png",
    alt: "Customer 1",
  },
  {
    src: "https://c.animaapp.com/mj71wa7zCf2vzX/img/ellipse-3.png",
    alt: "Customer 2",
  },
  {
    src: "https://c.animaapp.com/mj71wa7zCf2vzX/img/ellipse-4.png",
    alt: "Customer 3",
  },
];

export default function HeroSection () {
  return (
    <section className="relative w-full min-h-[853px] flex flex-col">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          alt="Farm background with cows grazing"
          src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-3.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(26,38,51,0)_0%,rgba(2,69,81,0.8)_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[98px] py-0">
        <div className="flex flex-col w-full">
          <nav className="flex items-center justify-between gap-8 px-0 py-6 border-b border-[#ffffff4c] opacity-0 -translate-y-4 animate-fade-in [--animation-delay:0ms]">
            <img
              className="w-[100px] h-[77px]"
              alt="Farm logo"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/untitled-design--17--1.png"
            />

            <div className="flex items-center gap-[45px]">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-['Montserrat_Alternates',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[normal] transition-all duration-300 hover:text-[#f8d651] hover:scale-110 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f8d651] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              className="h-auto flex items-center justify-center gap-4 px-4 py-2.5 rounded-[60px] border border-white bg-transparent text-white hover:bg-white hover:text-[#043e48] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <span className="font-['Montserrat_Alternates',Helvetica] font-semibold text-lg tracking-[0] leading-[normal]">
                Contact us
              </span>
              <img
                className="w-[30px] h-[30px]"
                alt="Arrow icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-11.svg"
              />
            </Button>
          </nav>

          <div className="flex flex-col w-full max-w-[554px] items-start gap-[70px] mt-[158px]">
            <div className="flex flex-col items-start gap-[38px] w-full opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
              <div className="flex flex-col items-start gap-2 w-full">
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-1.5 bg-transparent border-none px-0 h-auto"
                >
                  <img
                    className="w-[16.12px] h-[16.12px]"
                    alt="StarIcon icon"
                    src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
                  />
                  <span className="font-nunito font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                    PURE FARM FRESH GOODNESS
                  </span>
                </Badge>

                <div className="flex flex-col items-start gap-1 w-full">
                  <h1 className="font-['Montserrat',Helvetica] font-normal text-transparent text-[40px] leading-10">
                    <span className="font-bold text-white tracking-[0.32px] leading-[54px]">
                      Nourishing Families with <br />
                      Farm-Fresh{" "}
                    </span>
                    <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-white tracking-[0.32px] leading-[54px]">
                      Milk &amp; Ghee
                    </span>
                  </h1>

                  <p className="w-[545px] font-nunito font-normal text-[#ffffffb2] text-sm tracking-[0] leading-5">
                    Enjoy farm-fresh, chemical-free milk delivered daily —
                    directly from our healthy cows and natural pastures. Fresh,
                    pure, and full of nourishment.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-[19px] opacity-0 -translate-y-4 animate-fade-in [--animation-delay:400ms]">
                <Button className="h-auto inline-flex items-center justify-center gap-3 px-3.5 py-3 bg-[#f8d651] hover:bg-[#f8d651]/90 text-black rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50 group">
                  <span className="font-['Montserrat',Helvetica] font-semibold text-base tracking-[0] leading-5 whitespace-nowrap">
                    Visit Our Farm
                  </span>
                  <img
                    className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                    alt="Arrow icon"
                    src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-7.svg"
                  />
                </Button>

                <Button
                  variant="outline"
                  className="h-auto inline-flex items-center justify-center gap-3 px-3.5 py-3 bg-transparent border border-[#f8d651] text-white hover:bg-[#f8d651] hover:text-black rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50 group"
                >
                  <span className="font-['Montserrat',Helvetica] font-semibold text-base tracking-[0] leading-5 whitespace-nowrap">
                    Subscribe Now
                  </span>
                  <img
                    className="w-6 h-6"
                    alt="Arrow icon"
                    src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-7.svg"
                  />
                </Button>
              </div>
            </div>

            <div className="inline-flex items-center gap-[9px] opacity-0 -translate-y-4 animate-fade-in [--animation-delay:600ms]">
              <div className="inline-flex items-center">
                {customerAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    className={`relative w-[50px] h-[50px] ${index > 0 ? "ml-[-13px]" : ""}`}
                    alt={avatar.alt}
                    src={avatar.src}
                  />
                ))}
              </div>

              <div className="flex flex-col w-[277px] items-start gap-[5px]">
                <p className="font-nunito font-semibold text-white text-base tracking-[0] leading-[normal]">
                  Our Happy Client
                </p>

                <div className="flex items-center gap-1 w-full">
                  <img
                    className="w-[18.67px] h-[17.86px]"
                    alt="StarIcon rating"
                    src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg"
                  />
                  <span className="font-nunito font-semibold text-white text-base tracking-[0] leading-[normal]">
                    4.8 Rating (10k+ Families Served)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
