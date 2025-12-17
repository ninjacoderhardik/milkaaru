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
    <section className="flex w-full items-center gap-[17px] px-5 lg:px-20 lg:pl-[100px] py-12 lg:py-0 bg-[#043e48] min-h-[958px]">
      <div className="flex w-full max-w-[590px] items-center gap-2.5">
        <div className="flex flex-col w-full items-start gap-[88px]">
          <div className="flex flex-col items-start gap-10 w-full opacity-0 -translate-y-4 animate-fade-in [--animation-delay:200ms]">
            <header className="flex flex-col items-start gap-3 w-full">
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

              <h2 className="font-['Montserrat',Helvetica] font-normal text-transparent text-[40px] leading-10">
                <span className="font-bold text-white tracking-[0.32px] leading-[54px]">
                  Delivering pure, fresh dairy goodness to{" "}
                </span>
                <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-white tracking-[0.32px] leading-[54px]">
                  your home
                </span>
              </h2>
            </header>

            <div className="flex flex-col w-full max-w-[590px] items-start gap-[30px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] w-full">
                {serviceCards.map((card, index) => (
                  <Card
                    key={index}
                    className={`h-[225px] border-0 ${
                      card.filled
                        ? "bg-[#ffffff33] backdrop-blur-[2px] backdrop-brightness-100 [-webkit-backdrop-filter:blur(2px)_brightness(100%)]"
                        : "bg-transparent border border-solid border-[#ffffffb2]"
                    } rounded-[18px] opacity-0 -translate-y-4 animate-fade-in transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 hover:bg-[#ffffff4d] cursor-pointer group`}
                    style={
                      {
                        "--animation-delay": `${400 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="flex flex-col items-start justify-center gap-[26px] p-5 h-full">
                      <img
                        className="w-[60px] h-[60px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        alt={card.title}
                        src={card.icon}
                      />
                      <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                        <h3 className="font-['Nunito',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                          {card.title}
                        </h3>
                        <p className="font-['Nunito',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-5">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <p className="font-['Nunito',Helvetica] font-normal text-transparent text-lg tracking-[0] leading-5 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:800ms]">
            <span className="font-medium text-white">
              Pure dairy, delivered daily. Need help? Just
            </span>
            <span className="text-white">&nbsp;</span>
            <span className="font-bold text-[#f8d651] underline cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block">
              Contact Us Now.
            </span>
          </p>
        </div>
      </div>

      <img
        className="hidden lg:block shrink-0 opacity-0 -translate-y-4 animate-fade-in [--animation-delay:400ms]"
        alt="Dairy products"
        src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-92.svg"
      />
    </section>
  );
};
