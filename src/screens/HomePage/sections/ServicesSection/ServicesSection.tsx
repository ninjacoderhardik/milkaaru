import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const serviceCards = [
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-15.svg",
    title: "Daily Fresh Milk Delivery",
    description:
      "Straight from our farm to your home — always fresh, pure, and chilled for your family.",
    filled: true,
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/healthicons-dairy-outline.svg",
    title: "Authentic Dairy Products",
    description:
      "A2 ghee, butter, paneer, and curd — all prepared from fresh, high-quality milk.",
    filled: false,
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/fluent-leaf-two-20-regular.svg",
    title: "Healthy Cow Nutrition",
    description:
      "Our cows are naturally fed and professionally cared for to ensure premium-quality milk.",
    filled: false,
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-2.svg",
    title: "Flexible Subscription Plans",
    description:
      "Choose delivery timings & product combinations that perfectly fit your family's daily needs.",
    filled: true,
  },
];

export default function ServicesSection  () {
  return (
    <section className="w-full bg-[#043e48] px-5 sm:px-8 lg:px-16 xl:px-20 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:flex-row items-center gap-10 lg:gap-14">
        <div className="flex w-full lg:w-[55%] flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-6 w-full opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
            <header className="flex flex-col items-start gap-3 w-full">
              <div className="inline-flex items-center gap-1.5">
                <img
                  className="w-[16.12px] h-[16.12px]"
                  alt="Star"
                  src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
                />
                <p className="font-['Nunito',Helvetica] font-medium text-[#f8d651] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  WHAT WE DO
                </p>
              </div>

              <h2 className="font-['Montserrat',Helvetica] font-semibold text-white text-[28px] sm:text-[32px] md:text-[40px] leading-tight md:leading-[46px]">
                Delivering pure, fresh dairy goodness to your home
              </h2>
            </header>

            <div className="flex flex-col w-full max-w-[720px] items-start gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                {serviceCards.map((card, index) => (
                  <Card
                    key={index}
                    className={`h-full min-h-[180px] sm:min-h-[200px] lg:min-h-[210px] border border-[#ffffff33] ${
                      card.filled
                        ? "bg-[#dfe7e7]/80 text-black"
                        : "bg-transparent text-white"
                    } rounded-[16px] opacity-0 -translate-y-4 animate-fade-in transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 hover:bg-white/5 cursor-pointer group`}
                    style={
                      {
                        "--animation-delay": `${400 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="flex flex-col items-start justify-center gap-3 sm:gap-4 p-5 sm:p-6 h-full">
                      <img
                        className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        alt={card.title}
                        src={card.icon}
                      />
                      <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <h3 className="font-['Nunito',Helvetica] font-bold text-current text-base sm:text-lg tracking-[0] leading-6">
                          {card.title}
                        </h3>
                        <p className="font-['Nunito',Helvetica] font-normal text-current/90 text-sm sm:text-base tracking-[0] leading-5">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <p className="font-['Nunito',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-6 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:800ms]">
            Pure dairy, delivered daily. Need help?{" "}
            <span className="font-bold text-[#f8d651] underline cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block">
              Contact Us Now.
            </span>
          </p>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] opacity-0 -translate-y-4 animate-fade-in [--animation-delay:400ms]">
            <img
              className="w-full h-full object-cover rounded-[20px] shadow-2xl shadow-black/30"
              alt="Dairy products"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-92.svg"
            />
            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full border-4 border-white bg-[#f8d651] items-center justify-center shadow-2xl shadow-black/30">
              <img
                className="w-10 h-10"
                alt="Badge icon"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-15.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

