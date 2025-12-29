import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

const starRatings = [
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
];

export default function TestimonialsSection  () {
  return (
    <section className="flex w-full flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-5 sm:px-8 md:px-12 lg:px-[100px] py-12 bg-[#043e48]">
      <div className="w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[520px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms] group cursor-pointer overflow-hidden rounded-[24px] shadow-2xl shadow-black/30">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Rectangle"
          src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-18.png"
        />
      </div>

      <div className="flex flex-col w-full max-w-[620px] items-start gap-8 lg:gap-10">
        <div className="flex flex-col items-start gap-3 self-stretch w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
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

          <h2 className="self-stretch font-['Montserrat',Helvetica] font-normal text-transparent text-[28px] sm:text-[32px] md:text-[38px] lg:text-[40px] leading-tight md:leading-[48px]">
            <span className="font-bold text-white tracking-[0.32px] leading-[1.3]">
              Pure milk, happy families, honest{" "}
            </span>

            <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-white tracking-[0.32px] leading-[1.3]">
              words shared
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="flex items-center gap-1">
            {starRatings.map((star, index) => (
              <img
                key={`star-${index}`}
                className="w-4 h-4 sm:w-[18.67px] sm:h-[17.86px] transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                alt="Star"
                src={star}
              />
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 sm:gap-10 self-stretch w-full">
            <p className="self-stretch -mt-px font-['Nunito',Helvetica] font-medium text-white text-base sm:text-lg md:text-xl tracking-[0.32px] leading-7">
              We&apos;ve been getting Milkaaru milk delivered to our home for
              months now. The freshness is unmatched — it tastes far better than
              the packet milk we used before. It feels pure, natural, and just
              like the milk we enjoyed at our village farms. Truly reliable
              quality every single day.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 self-stretch w-full">
              <div className="flex items-center gap-4 sm:gap-[21px]">
                <Avatar className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-[#f8d651] cursor-pointer">
                  <AvatarImage
                    src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-17.png"
                    alt="Riya Mehta"
                  />
                </Avatar>

                <div className="flex flex-col items-start gap-1">
                  <div className="font-['Montserrat',Helvetica] font-bold text-[#f8d651] text-lg sm:text-xl tracking-[0.32px] leading-6">
                    Riya Mehta
                  </div>

                  <div className="font-['Montserrat',Helvetica] font-medium text-white text-sm sm:text-base tracking-[0.24px] leading-5">
                    Homemaker &amp; Mother of Two
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <button className="w-10 h-10 sm:w-[44px] sm:h-[44px] rounded-md bg-[#f8d651] text-[#043e48] font-bold text-lg transition-transform duration-300 hover:scale-110">
                  ←
                </button>
                <button className="w-10 h-10 sm:w-[44px] sm:h-[44px] rounded-md bg-[#f8d651] text-[#043e48] font-bold text-lg transition-transform duration-300 hover:scale-110">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
