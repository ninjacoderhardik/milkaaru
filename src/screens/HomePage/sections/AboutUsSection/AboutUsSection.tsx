import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const missionItems = [
  "Ensure the health & welfare of our cows",
  "Provide Fresh, High-Quality Dairy with Care",
  "Deliver Pure, Wholesome Dairy Products You Can Trust",
];

const features = [
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-1.svg",
    title: "Driven by Tradition,\nGuided by Innovation",
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/frame.svg",
    title: "Committed to Ethical &\nSustainable Farming",
  },
];

export default function AboutUsSection () {
  return (
    <section className="flex w-full self-center flex-col items-center justify-center gap-8 px-5 sm:px-8 md:px-12 lg:px-[80px] xl:px-[120px] py-16 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[62px] w-full max-w-[1266px]">
        <img
          className="w-full max-w-[420px] md:max-w-[500px] lg:max-w-[520px] shrink-0 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms] transition-transform duration-500 hover:scale-105"
          alt="Farm imagery"
          src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-42.svg"
        />

        <div className="flex flex-col w-full lg:w-[674px] items-end gap-[38px]">
          <div className="flex flex-col items-start gap-[32px] md:gap-[50px] w-full">
            <div className="flex flex-col items-start gap-[18px] w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="inline-flex items-center gap-1.5">
                <img
                  className="w-[16.12px] h-[16.12px]"
                  alt="Star"
                  src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
                />
                <p className="font-medium text-black text-sm leading-5 whitespace-nowrap font-['Nunito',Helvetica] tracking-[0]">
                  ABOUT US
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <h2 className="font-['Montserrat',Helvetica] font-normal text-transparent text-[32px] md:text-[40px] leading-tight md:leading-10">
                  <span className="font-bold text-black tracking-[0.32px] leading-[1.3] md:leading-[54px]">
                    Fresh, Pure Milk Straight From Our Farms to{" "}
                  </span>
                  <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-black tracking-[0.32px] leading-[1.3] md:leading-[54px]">
                    Your Home
                  </span>
                </h2>

                <p className="w-full md:w-[655px] font-['Nunito',Helvetica] font-normal text-[#000000b2] text-base tracking-[0] leading-6">
                  Our milk is sourced from healthy, well-cared-for cows and
                  processed using hygienic, modern methods—without preservatives
                  or additives. We ensure fast, temperature-controlled delivery
                  so you enjoy fresh, natural milk straight from our farms to
                  your home.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[29px] pt-0 pb-[40px] md:pb-[50px] px-0 w-full border-b border-[#0000004c] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex flex-col w-full md:w-[476px] items-start gap-[24px] md:gap-[35px]">
                <h3 className="font-['Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-6">
                  Our Mission :
                </h3>

                <div className="flex flex-col items-start gap-[14px] md:gap-[18px] w-full">
                  {missionItems.map((item, index) => (
                    <div key={index} className="inline-flex gap-2 items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                      <img
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                        alt="Checkmark"
                        src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-3.svg"
                      />
                      <p className="font-['Nunito',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[0] leading-6 whitespace-pre-wrap group-hover:text-[#043e48] transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="w-[168px] h-[168px] bg-[#043e48] rounded-[20px] border-0 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-[#043e48]/50 cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center gap-3.5 p-5 h-full">
                  <p className="font-['Montserrat',Helvetica] font-semibold text-white text-[28px] md:text-[32px] text-center tracking-[0] leading-6">
                    20+
                  </p>
                  <p className="font-['Montserrat',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-6">
                    Years Of Experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 md:gap-10 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] md:gap-[32px] w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-4 md:gap-[17px]"
                >
                  <img
                    className="w-[54px] h-[54px] md:w-[60px] md:h-[60px]"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <p className="font-['Montserrat',Helvetica] font-bold text-black text-base md:text-lg tracking-[0] leading-7 whitespace-pre-line">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            <Button className="w-full sm:w-auto h-auto bg-[#f8d651] hover:bg-[#f8d651]/90 rounded-[10px] px-5 py-3 gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50 group">
              <span className="font-['Montserrat',Helvetica] font-semibold text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                Learn More About
              </span>
              <img
                className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] transition-transform duration-300 group-hover:translate-x-2"
                alt="Arrow"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-9.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
