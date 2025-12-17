import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const faqItems = [
  {
    question: "Is your milk 100% natural and preservative-free?",
  },
  {
    question: "How does Milkaaru deliver milk fresh every morning?",
  },
  {
    question: "Can I customize my delivery schedule?",
  },
  {
    question: "How do you ensure milk quality and hygiene?",
  },
  {
    question: "What should I do with empty bottles?",
  },
];

export default function FaqSection () {
  return (
    <section className="flex flex-col items-start gap-[60px] w-full max-w-[1440px] mx-auto px-[98px] py-[80px]">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-5 flex-1 max-w-[753px]">
          <div className="inline-flex items-center gap-1.5">
            <img
              className="w-[16.12px] h-[16.12px]"
              alt="Star"
              src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
            />
            <span className="font-['Nunito',Helvetica] font-medium text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
              FAQS
            </span>
          </div>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-black text-[40px] tracking-[0.80px] leading-[54px]">
            Frequently asked questions about our Milkaaru dairy service
          </h2>
        </div>
          <Button className="flex items-center justify-center gap-3 px-5 py-3 bg-[#f8d651] hover:bg-[#f8d651]/90 rounded-[10px] h-auto transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f8d651]/50 group">
          <span className="font-['Montserrat',Helvetica] font-semibold text-black text-base tracking-[0] leading-5 whitespace-nowrap">
            View All FAQS
          </span>
          <img
            className="w-[30px] h-[30px] transition-transform duration-300 group-hover:translate-x-2"
            alt="Arrow"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-9.svg"
          />
        </Button>
      </header>

      <div className="flex flex-col lg:flex-row items-stretch gap-[73px] w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col items-start gap-0 flex-1 w-full">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-0 py-10 w-full ${
                index < faqItems.length - 1 ? "border-b border-[#00000033]" : ""
              } cursor-pointer group transition-all duration-300 hover:bg-gray-50/50 hover:px-4 hover:rounded-lg`}
            >
              <h3 className="font-['Nunito',Helvetica] font-bold text-black text-xl tracking-[0] leading-5 flex-1 group-hover:text-[#043e48] transition-colors duration-300">
                {item.question}
              </h3>
              <ChevronDownIcon className="w-6 h-6 shrink-0 ml-4 transition-all duration-300 group-hover:translate-y-1 group-hover:text-[#043e48] group-hover:scale-125" />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[493px] h-auto lg:h-[666px] rounded-[26px] overflow-hidden group cursor-pointer">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Dairy farm with cows"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-19.png"
          />
        </div>
      </div>
    </section>
  );
};
