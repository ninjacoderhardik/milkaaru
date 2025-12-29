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
    <section className="w-full bg-[#043e48]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:flex-row items-start lg:items-stretch gap-10 lg:gap-14 px-5 md:px-10 lg:px-[80px] py-12 lg:py-16">
        <div className="flex w-full lg:max-w-[640px] flex-col gap-8 md:gap-12">
          <header className="flex flex-col items-start gap-4 md:gap-6 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="inline-flex items-center gap-1.5">
              <img
                className="w-[16.12px] h-[16.12px]"
                alt="Star"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
              />
              <p className="font-['Nunito',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                WHAT WE DO
              </p>
            </div>

            <h2 className="font-['Montserrat',Helvetica] font-normal text-transparent text-[32px] md:text-[40px] leading-tight md:leading-10">
              <span className="font-bold text-white tracking-[0.32px] leading-[1.3] md:leading-[54px]">
                Delivering pure, fresh dairy goodness to{" "}
              </span>
              <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-white tracking-[0.32px] leading-[1.3] md:leading-[54px]">
                your home
              </span>
            </h2>
          </header>

          <div className="flex flex-col w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] md:gap-[22px] lg:gap-[26px]">
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className={`min-h-[190px] border-0 ${
                    card.filled
                      ? "bg-[#ffffff26] backdrop-blur-[2px]"
                      : "bg-transparent border border-solid border-[#ffffff66]"
                  } rounded-[18px] opacity-0 -translate-y-4 animate-fade-in transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:bg-[#ffffff33] cursor-pointer group`}
                  style={
                    {
                      "--animation-delay": `${300 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="flex flex-col items-start justify-center gap-4 p-5 md:p-6 h-full">
                    <img
                      className="w-[52px] h-[52px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      alt={card.title}
                      src={card.icon}
                    />
                    <div className="flex flex-col items-start justify-center gap-2 w-full">
                      <h3 className="font-['Nunito',Helvetica] font-bold text-white text-base md:text-lg tracking-[0] leading-6">
                        {card.title}
                      </h3>
                      <p className="font-['Nunito',Helvetica] font-normal text-[#ffffffcc] text-sm md:text-base tracking-[0] leading-5">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="font-['Nunito',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-6 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:800ms]">
              Pure dairy, delivered daily. Need help?{" "}
              <span className="font-bold text-[#f8d651] underline cursor-pointer hover:text-white transition-all duration-300">
                Contact Us Now.
              </span>
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-[520px] xl:w-[560px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <img
            className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[640px] object-cover rounded-[24px] shadow-2xl shadow-black/30"
            alt="Dairy products"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-92.svg"
          />
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 text-white">
            <div className="h-12 w-12 rounded-full border-2 border-white/40 bg-[#043e48]/80 backdrop-blur flex items-center justify-center shadow-lg">
              <img alt="milk drop" src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-15.svg" className="w-6 h-6" />
            </div>
            <div className="w-px h-12 bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
