
const leftFeatures = [
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/proicons-cheese.svg",
    title: "100% Farm-Fresh & Natural",
    description:
      "We deliver dairy that's untouched, unprocessed, and free from preservatives.",
    alt: "Proicons cheese",
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/icon-park-outline-measuring-cup.svg",
    title: "Rigorous Quality Testing",
    description:
      "Every batch is lab-tested to ensure purity, safety, and top-grade nutritional value.",
    alt: "Icon park outline",
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/streamline-water-glass.svg",
    title: "Daily Fresh Milk Delivery",
    description:
      "Milkaaru milk is collected each morning and delivered within hours — always fresh.",
    alt: "Streamline water",
  },
];

const rightFeatures = [
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/frame-18.svg",
    title: "Sustainable & Ethical Farming",
    description:
      "Our cows are pasture-fed, well-cared, and raised in a stress-free environment.",
    alt: "Frame",
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/healthicons-dairy-outline-1.svg",
    title: "Pure Dairy, No Chemicals",
    description:
      "No adulteration. No mixing. Just clean, natural dairy straight from our farms.",
    alt: "Healthicons dairy",
  },
  {
    icon: "https://c.animaapp.com/mj71wa7zCf2vzX/img/icon-park-outline-family.svg",
    title: "Trusted by Thousands of Families",
    description:
      "Milkaaru is a preferred choice for households seeking purity and honesty in milk.",
    alt: "Icon park outline",
  },
];

export default function WhyChooseUsSection  () {
  return (
    <section className="flex w-full flex-col items-center gap-[60px] px-4 py-12 md:px-8 lg:px-[100px]">
      <header className="flex flex-col items-center gap-3.5 max-w-[447px] -translate-y-4 animate-fade-in opacity-0">
        <div className="inline-flex items-center gap-1.5">
          <img
            className="w-[16.12px] h-[16.12px]"
            alt="Star"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/star-1.svg"
          />
          <p className="font-['Nunito',Helvetica] font-medium text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
            WHY CHOOSE US
          </p>
        </div>

        <h2 className="font-['Montserrat',Helvetica] font-normal text-transparent text-[40px] text-center leading-10">
          <span className="font-bold text-black tracking-[0.32px] leading-[54px]">
            Reliable dairy purity <br />
          </span>
          <span className="font-['Montserrat_Alternates',Helvetica] font-bold text-black tracking-[0.32px] leading-[54px]">
            you can trust
          </span>
        </h2>
      </header>

      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-[30px] w-full max-w-[1242px]">
        <div className="flex flex-col w-full lg:w-[416px] gap-20 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          {leftFeatures.map((feature, index) => (
            <article key={index} className="flex items-center gap-[18px] group cursor-pointer transition-all duration-300 hover:translate-x-4">
              <img
                className="w-[50px] h-[50px] shrink-0 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                alt={feature.alt}
                src={feature.icon}
              />
              <div className="flex flex-col gap-2.5 flex-1">
                <h3 className="font-['Montserrat',Helvetica] font-bold text-black text-lg tracking-[0] leading-5 group-hover:text-[#043e48] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-['Nunito',Helvetica] font-normal text-[#000000b2] text-base tracking-[0] leading-5">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="w-full lg:w-[350px] h-[441px] shrink-0 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms] overflow-hidden rounded-[20px] group cursor-pointer">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
            alt="Rectangle"
            src="https://c.animaapp.com/mj71wa7zCf2vzX/img/rectangle-10.png"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[416px] gap-20 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
          {rightFeatures.map((feature, index) => (
            <article key={index} className="flex items-center gap-[18px] group cursor-pointer transition-all duration-300 hover:translate-x-[-16px]">
              <img
                className="w-[50px] h-[50px] shrink-0"
                alt={feature.alt}
                src={feature.icon}
              />
              <div className="flex flex-col gap-2.5 flex-1">
                <h3 className="font-['Montserrat',Helvetica] font-bold text-black text-lg tracking-[0] leading-5">
                  {feature.title}
                </h3>
                <p className="font-['Nunito',Helvetica] font-normal text-[#000000b2] text-base tracking-[0] leading-5">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
