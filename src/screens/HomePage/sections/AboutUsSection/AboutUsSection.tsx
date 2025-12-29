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
    <section className="w-full bg-[#fff8e8] px-5 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            className="w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[520px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms] transition-transform duration-500 hover:scale-105"
            alt="Farm imagery"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-42.svg"
          />
        </div>

        <div className="w-full lg:w-[55%] flex flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="inline-flex items-center gap-1.5">
              <img
                className="w-[16.12px] h-[16.12px]"
                alt="Star"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
              />
              <p className="font-['Nunito',Helvetica] font-medium text-black text-sm leading-5 whitespace-nowrap tracking-[0]">
                ABOUT US
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="font-['Montserrat',Helvetica] font-normal text-transparent text-[28px] sm:text-[32px] md:text-[38px] lg:text-[40px] leading-tight md:leading-[50px]">
                <span className="font-bold text-black tracking-[0.32px] leading-[1.3]">
                  Fresh, Pure Milk Straight From Our Farms to{" "}
                </span>
                <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-black tracking-[0.32px] leading-[1.3]">
                  Your Home
                </span>
              </h2>

              <p className="w-full max-w-[660px] font-['Nunito',Helvetica] font-normal text-[#000000b2] text-base sm:text-lg tracking-[0] leading-6">
                Our milk is sourced from healthy, well-cared-for cows and
                processed using hygienic, modern methods—without preservatives
                or additives. We ensure fast, temperature-controlled delivery
                so you enjoy fresh, natural milk straight from our farms to
                your home.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full pb-8 border-b border-[#0000001f] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col w-full md:w-auto items-start gap-4">
              <h3 className="font-['Nunito',Helvetica] font-bold text-black text-lg sm:text-xl tracking-[0] leading-6">
                Our Mission :
              </h3>

              <div className="flex flex-col items-start gap-4 w-full">
                {missionItems.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex gap-2 items-center group cursor-pointer transition-all duration-300 hover:translate-x-2"
                  >
                    <img
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                      alt="Checkmark"
                      src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-3.svg"
                    />
                    <p className="font-['Nunito',Helvetica] font-normal text-black text-base sm:text-lg tracking-[0] leading-6 group-hover:text-[#043e48] transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="w-[160px] h-[160px] sm:w-[168px] sm:h-[168px] bg-[#043e48] rounded-[20px] border-0 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-[#043e48]/50 cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center gap-3 p-5 h-full">
                <p className="font-['Montserrat',Helvetica] font-semibold text-white text-[30px] sm:text-[32px] text-center tracking-[0] leading-6">
                  20+
                </p>
                <p className="font-['Montserrat',Helvetica] font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-6">
                  Years Of Experience
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-start gap-6 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-3 sm:gap-[17px]"
                >
                  <img
                    className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px]"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <p className="font-['Montserrat',Helvetica] font-bold text-black text-base sm:text-lg tracking-[0] leading-6 whitespace-pre-line">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            <Button className="w-full sm:w-[231px] h-auto bg-[#f8d651] hover:bg-[#f8d651]/90 rounded-[10px] px-5 py-3 gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50 group">
              <span className="font-['Montserrat',Helvetica] font-semibold text-black text-base sm:text-lg tracking-[0] leading-5 whitespace-nowrap">
                Learn More About
              </span>
              <img
                className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] transition-transform duration-300 group-hover:translate-x-2"
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
