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
    <section className="flex w-full min-h-[840px] items-center justify-center gap-[82px] px-[100px] py-5 bg-[#043e48]">
      <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms] group cursor-pointer overflow-hidden rounded-[30px]">
        <img
          className="w-[556px] h-[718px] rounded-[30px] object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Rectangle"
          src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-18.png"
        />
      </div>

      <div className="flex flex-col w-[606px] items-end gap-11">
        <div className="flex flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
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

          <h2 className="self-stretch font-['Montserrat',Helvetica] font-normal text-transparent text-[40px] leading-10">
            <span className="font-bold text-white tracking-[0.32px] leading-[54px]">
              Pure milk, happy families, honest{" "}
            </span>

            <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-white tracking-[0.32px] leading-[54px]">
              words shared
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="flex w-[140px] items-center gap-1 flex-[0_0_auto]">
            {starRatings.map((star, index) => (
              <img
                key={`star-${index}`}
                className="w-[18.67px] h-[17.86px] transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                alt="Star"
                src={star}
              />
            ))}
          </div>

          <div className="flex flex-col items-start gap-[100px] self-stretch w-full flex-[0_0_auto]">
            <p className="self-stretch -mt-px font-['Nunito',Helvetica] font-medium text-white text-xl tracking-[0.40px] leading-7">
              We&apos;ve been getting Milkaaru milk delivered to our home for
              months now. The freshness is unmatched — it tastes far better than
              the packet milk we used before. It feels pure, natural, and just
              like the milk we enjoyed at our village farms. Truly reliable
              quality every single day.
            </p>

            <div className="flex items-center gap-[122px] self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-[341px] items-center gap-[21px]">
                <Avatar className="w-[60px] h-[60px] transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-[#f8d651] cursor-pointer">
                  <AvatarImage
                    src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-17.png"
                    alt="Riya Mehta"
                  />
                </Avatar>

                <div className="flex flex-col w-[260px] items-start gap-2">
                  <div className="self-stretch -mt-px font-['Montserrat',Helvetica] font-bold text-[#f8d651] text-[22px] tracking-[0.44px] leading-7">
                    Riya Mehta
                  </div>

                  <div className="w-[260px] font-['Montserrat',Helvetica] font-medium text-white text-base tracking-[0.32px] leading-5">
                    Homemaker &amp; Mother of Two
                  </div>
                </div>
              </div>

              <img
                className="flex-[0_0_auto] transition-transform duration-300 hover:scale-110 cursor-pointer"
                alt="Frame"
                src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-104.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
