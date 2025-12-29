import { AboutUsSection } from "./sections/AboutUsSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export default function HomePage () {
  return (
    <main className="bg-[#fff8e8] w-full flex flex-col" data-model-id="116:24">
      <section className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
        <HeroSection />
      </section>
      <section className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <AboutUsSection />
      </section>
      <section className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <ServicesSection />
      </section>
      <section className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <WhyChooseUsSection />
      </section>
      <section className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
        <TestimonialsSection />
      </section>
      <section className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <FaqSection />
      </section>
      <footer className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <FooterSection />
      </footer>
    </main>
  );
};
