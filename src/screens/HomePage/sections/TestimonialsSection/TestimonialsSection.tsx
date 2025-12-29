"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

const starRatings = Array(5).fill(
  "https://c.animaapp.com/mj71wa7zCf2vzX/img/star-3.svg",
);

const reviews = [
  {
    quote:
      "We’ve been getting Milkaaru milk delivered to our home for months now. The freshness is unmatched — it tastes far better than the packet milk we used before. It feels pure, natural, and just like the milk we enjoyed at our village farms. Truly reliable quality every single day.",
    name: "Riya Mehta",
    title: "Homemaker & Mother of Two",
    avatar: "https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-17.png",
  },
  {
    quote:
      "As a nutritionist, I’m picky about sourcing. Milkaaru’s milk has a clean flavor and consistent quality my clients appreciate. The transparency from farm to home makes it an easy recommendation.",
    name: "Dr. Ananya Rao",
    title: "Nutritionist",
    avatar: "https://c.animaapp.com/mj71wa7zCf2vzX/img/ellipse-2.png",
  },
  {
    quote:
      "My café relies on great milk for coffee and desserts. Milkaaru delivers rich taste and dependable supply, which keeps our customers coming back.",
    name: "Karan Bhatt",
    title: "Cafe Owner",
    avatar: "https://c.animaapp.com/mj71wa7zCf2vzX/img/ellipse-3.png",
  },
  {
    quote:
      "Switching to Milkaaru reduced the additives we were worried about. The kids love the taste, and deliveries are always on time.",
    name: "Shweta Singh",
    title: "Parent of 3",
    avatar: "https://c.animaapp.com/mj71wa7zCf2vzX/img/ellipse-4.png",
  },
];

export default function TestimonialsSection() {
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

        <div className="flex w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Slider
            dots
            infinite
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={5500}
            arrows
            adaptiveHeight
            className="w-full"
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
          >
            {reviews.map((review, index) => (
              <div key={review.name} className="px-1 sm:px-2">
                <div className="flex flex-col items-start gap-6 sm:gap-8 self-stretch w-full">
                  <div className="flex items-center gap-1">
                    {starRatings.map((star, starIndex) => (
                      <img
                        key={`star-${index}-${starIndex}`}
                        className="w-4 h-4 sm:w-[18.67px] sm:h-[17.86px] transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                        alt="Star"
                        src={star}
                      />
                    ))}
                  </div>

                  <p className="self-stretch -mt-px font-['Nunito',Helvetica] font-medium text-white text-base sm:text-lg md:text-xl tracking-[0.32px] leading-7">
                    {review.quote}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 self-stretch w-full">
                    <div className="flex items-center gap-4 sm:gap-[21px]">
                      <Avatar className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-[#f8d651] cursor-pointer">
                        <AvatarImage src={review.avatar} alt={review.name} />
                      </Avatar>

                      <div className="flex flex-col items-start gap-1">
                        <div className="font-['Montserrat',Helvetica] font-bold text-[#f8d651] text-lg sm:text-xl tracking-[0.32px] leading-6">
                          {review.name}
                        </div>

                        <div className="font-['Montserrat',Helvetica] font-medium text-white text-sm sm:text-base tracking-[0.24px] leading-5">
                          {review.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
