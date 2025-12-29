import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

const starRatings = [
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#043e48]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 md:gap-12 lg:gap-[80px] px-5 sm:px-8 md:px-12 lg:px-[100px] py-12 md:py-16">
        <div className="w-full max-w-[520px] lg:max-w-[540px] inline-flex items-center justify-center lg:justify-start gap-2.5 flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms] group cursor-pointer overflow-hidden rounded-[30px] shadow-2xl shadow-black/25">
          <img
            className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-[30px] object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Rectangle"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-18.png"
          />
        </div>

        <div className="flex flex-col w-full max-w-[600px] items-start gap-5 md:gap-7 lg:gap-9 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col items-start gap-3 self-stretch w-full">
            <div className="inline-flex items-center gap-1.5 flex-[0_0_auto]">
              <img
                className="w-[16.12px] h-[16.12px]"
                alt="Star"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
              />
              <div className="w-fit -mt-px font-['Nunito',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                Our Testimonial
              </div>
            </div>
          </div>

          <h2 className="self-stretch font-['Montserrat',Helvetica] font-normal text-transparent text-[32px] md:text-[40px] leading-tight md:leading-10">
            <span className="font-bold text-white tracking-[0.32px] leading-[1.3] md:leading-[54px]">
              Pure milk, happy families, honest{" "}
            </span>

            <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-white tracking-[0.32px] leading-[1.3] md:leading-[54px]">
              words shared
            </span>
          </h2>

          <div className="flex w-[140px] items-center gap-1">
            {starRatings.map((star, index) => (
              <img
                key={`star-${index}`}
                className="w-[18.67px] h-[17.86px] transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                alt="Star"
                src={star}
              />
            ))}
          </div>

          <p className="self-stretch font-['Nunito',Helvetica] font-medium text-white text-base md:text-lg tracking-[0.40px] leading-7">
            We&apos;ve been getting Milkaaru milk delivered to our home for
            months now. The freshness is unmatched — it tastes far better than
            the packet milk we used before. It feels pure, natural, and just
            like the milk we enjoyed at our village farms. Truly reliable
            quality every single day.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 w-full pt-2">
            <div className="flex items-center gap-3 md:gap-4">
              <Avatar className="w-[60px] h-[60px] transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-[#f8d651] cursor-pointer">
                <AvatarImage
                  src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-17.png"
                  alt="Riya Mehta"
                />
              </Avatar>

              <div className="flex flex-col items-start gap-1">
                <div className="font-['Montserrat',Helvetica] font-bold text-[#f8d651] text-base md:text-[18px] tracking-[0.44px] leading-6">
                  Riya Mehta
                </div>

                <div className="font-['Montserrat',Helvetica] font-medium text-white text-sm md:text-base tracking-[0.32px] leading-5">
                  Homemaker &amp; Mother of Two
                </div>
              </div>
            </div>

            <img
              className="transition-transform duration-300 hover:scale-110 cursor-pointer w-[120px] md:w-[140px]"
              alt="Frame"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-104.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
