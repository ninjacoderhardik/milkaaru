"use client";
import { Button } from "../../components/ui/button";
import { ProductCard } from "../../components/ProductCard";
import { GheeBottle } from "../../components/GheeBottle";
import { MilkBottle } from "../../components/MilkBottle";
import { Navbar } from "../../components/common/navbar";
import Image from "next/image";
import { Footer } from "../../components/Footer";

export default function HomePage() {
  const products = [
    {
      title: "Gir Cow Ghee",
      price: "₹680.00",
      compareAtPrice: "₹800.00",
      imageSrc: "/ghee.svg",
      media: <GheeBottle className="h-[140px] w-auto" />,
    },
    {
      title: "Premium Buffalo Ghee",
      price: "₹620.00",
      compareAtPrice: "₹750.00",
      imageSrc: "/ghee.svg",
      media: <GheeBottle className="h-[140px] w-auto" />,
    },
    {
      title: "A2 Gir Cow Milk",
      price: "₹70.00",
      compareAtPrice: "₹85.00",
      imageSrc: "/milk.svg",
      media: <MilkBottle className="h-[140px] w-auto" />,
    },
    {
      title: "Premium Buffalo Milk",
      price: "₹80.00",
      compareAtPrice: "₹95.00",
      imageSrc: "/milk.svg",
      media: <MilkBottle className="h-[140px] w-auto" />,
    },
  ];

  const services = [
    {
      icon: "/iconamoondelivery.svg",
      title: "Farm-Fresh Milk Delivery",
      description:
        "Fresh A2 milk from Gir cows, delivered daily to your doorstep — pure, hygienic, and unprocessed.",
    },
    {
      icon: "/animalcow.svg",
      title: "Gir Cow Based Dairy",
      description:
        "Our dairy is based on ethically raised Gir cows, ensuring natural nutrition and superior milk quality.",
    },
    {
      icon: "/contrastbutter.svg",
      title: "Traditional Desi Ghee",
      description:
        "Authentic A2 desi ghee made using the traditional bilona method for rich taste and health benefits.",
    },
    {
      icon: "/leaffill.svg",
      title: "Chemical-Free & Natural",
      description:
        "No hormones, no antibiotics, no preservatives — only clean, natural, farm-fresh dairy.",
    },
  ];

  const sources = [
    {
      name: "Gir Cow Farms",
      counts: "50",
    },
    {
      name: "Dairy Expert",
      counts: "25",
    },
    {
      name: "Natural Products",
      counts: "12",
    },
    {
      name: "Happy Families",
      counts: "500",
    },
  ];

  return (
    // <main className="w-full bg-[#fff8e8] overflow-hidden">
    <main className="w-full overflow-hidden bg-white">
      <section
        className="flex bg-[url('/11.svg')]
                    md:bg-[url('/11.svg')]
                    lg:bg-[url('/1.svg')]
                    bg-cover bg-center bg-no-repeat
                    h-full min-h-[800px] md:min-h-screen max-h-[900px] z-10 mx-auto w-full flex-col gap-10 px-6 pb-14 pt-8 sm:px-10 md:pt-10 lg:px-16 lg:pt-12"
      >
        <Navbar />

        <div className="flex min-h-[45vh] md:min-h-[70vh] w-full items-center justify-center md:justify-start lg:justify-start max-w-[1560px] mx-auto">
          <div className="md:max-w-2xl lg:max-w-3xl flex flex-col gap-5 items-center text-center md:items-start md:text-left lg:items-start lg:text-left">
            <span className="inline-flex items-center w-fit rounded-full bg-[#f3b457] px-5 py-2.5 text-xs md:text-sm font-medium md:font-semibold text-[#3e2a1c] shadow-sm">
              Fresh From Our Farms
            </span>
            <div className="md:max-w-2xl flex flex-col gap-5 items-center md:items-start text-center md:text-left">
              <h1 className="text-2xl font-bold leading-snug text-neutral-900 md:text-5xl lg:text-6xl">
                Pure Milk & Dairy,
                <br />
                Straight From Desi Cows
              </h1>
              <p className="text-base  text-neutral-700 md:text-xl">
                Milkaaru brings you farm-fresh Gir cow milk and authentic dairy
                products, sourced directly from trusted Indian farmers and
                delivered fresh to your doorstep.
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="rounded-full bg-[#f2a33b] px-7 py-3.5 text-base font-semibold text-neutral-900 shadow hover:bg-[#e59221]">
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-[#f2a33b] bg-white px-7 py-3.5 text-base font-semibold text-neutral-900 hover:bg-[#fff2e2]"
              >
                Know Our Farms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative band + products */}
      <section
        className="bg-[url('/Rectangle52.svg')]
                    md:bg-[url('/2.svg')]
                    bg-cover bg-center bg-no-repeat
                    relative z-0 min-h-[2000px] sm:min-h-[1100px] lg:min-h-screen h-fit md:max-h-[1200px] "
      >
        <div className="flex flex-col items-center gap-20 justify-between h-full px-6 pb-12 pt-12 sm:px-10 lg:px-16 lg:my-auto w-full max-w-[1560px] mx-auto">
          <div className="max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Best Products
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Pure Gir cow dairy products, crafted with care and delivered fresh
              from our farms.
            </p>
          </div>

          <div className=" grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                compareAtPrice={product.compareAtPrice}
                imageSrc={product.imageSrc}
                media={product.media}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className=" 
                    bg-cover bg-center bg-no-repeat
                    relative z-0  mx-auto flex w-full h-fit flex-col gap-8 overflow-hidden rounded-3xl pl-0 pr-6 pb-12 pt-10 sm:pl-0 sm:pr-10 lg:pl-0 lg:pr-16 lg:pt-14"
      >
        <div className="relative grid gap-10 lg:gap-16 md:grid-cols-2 items-center md:items-start justify-items-center md:justify-items-start w-full">
          <div className="relative flex justify-start items-start w-full">
            <Image
              src="/3.svg"
              alt="About Milkaaru"
              width={1080}
              height={1648}
              className="w-full"
              priority
            />
          </div>

          <div className="relative space-y-5 z-10 max-w-[700px] md:ml-auto flex flex-col items-center md:items-start text-center md:text-left mx-auto px-4 sm:px-6 md:px-0">
            <span className="inline-flex items-center rounded-full bg-[#f3b457] px-4 py-2 text-xs font-semibold text-[#3e2a1c] shadow-sm">
              About Milkaaru
            </span>
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Experience & Trust in
              <br />
              Pure Gir Cow Dairy
            </h2>
            <p className="text-base text-neutral-700 sm:text-lg">
              Milkaaru is built on the belief that pure food creates healthy
              families. We work closely with trusted Indian farmers to bring you
              farm-fresh Gir cow milk and authentic dairy products, prepared
              with care and delivered fresh to your doorstep.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#f6c580] px-5 py-4 text-[#2f1f14] shadow-sm">
                <div className="flex  flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3">
                  <span className="text-xl" aria-hidden>
                    ✦
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Dedicated Gir Cow Farmers
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-[#3e2a1c]">
                      Our farmers follow ethical and traditional practices to
                      ensure the health of Gir cows and the purity of the milk
                      they produce.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#f2a33b] bg-white px-5 py-4 text-[#2f1f14] shadow-sm">
                <div className="flex  flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3">
                  <span className="text-xl" aria-hidden>
                    ✦
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Traditional Dairy Experts
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-[#3e2a1c]">
                      From bilona ghee to fresh paneer and curd, our products
                      are made using time-tested methods without preservatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial over Svg4 background */}
      <section className="overflow-hidden   h-fit">
        {/* <Svg4 className="w-full" /> */}
        <div
          className="bg-[url('/Frame279second.svg')]                   
                    md:bg-[url('/Frame279second.svg')]
                    bg-cover bg-center bg-no-repeat
                    relative z-0 w-full min-h-[640px] rounded-4xl mx-auto max-w-[1560px] h-fit my-10 "
        >
          <div className="flex flex-col items-start justify-center gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 h-fit pb-0">
            <div className="w-full max-w-3xl flex flex-col gap-16 text-neutral-900 lg:mr-6">
              <p className="text-xl font-semibold leading-relaxed sm:text-2xl lg:text-3xl">
                "Milkaaru has changed the way we consume dairy. From milk to
                ghee, everything feels fresh, authentic, and made with care.
                Highly recommended for families."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/ghee.svg"
                  alt="Riya Mehta"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="w-full flex gap-4 justify-between">
                  <div>
                    <p className="text-2xl font-semibold">Riya Mehta</p>
                    <p className="text-xl text-neutral-600">
                      Homemaker & Mother of Two
                    </p>
                  </div>
                  <Image
                    src="/Frame278.svg"
                    alt="Riya Mehta"
                    width={100}
                    height={60}
                    className="object-cover hidden md:block"
                  />
                  <Image
                    src="/Frame278.svg"
                    alt="Riya Mehta"
                    width={42}
                    height={30}
                    className="object-contain md:hidden"
                  />
                </div>
              </div>
            </div>
            <Image
              src="/caneman.svg"
              alt="Riya Mehta"
              width={476}
              height={685}
              className="hidden md:block object-cover h-full"
            />
            <Image
              src="/caneman.svg"
              alt="Riya Mehta"
              width={476}
              height={685}
              className="md:hidden object-contain h-full max-h-[250px]"
            />
          </div>
        </div>
      </section>

      {/* Services section with SVG3 background */}
      <section
        className="
                    bg-[url('/5.svg')]
                    md:bg-[url('/5.svg')]
                    bg-cover bg-center bg-no-repeat
                    relative z-0  mx-auto flex w-full h-fit flex-col gap-10 overflow-hidden rounded-3xl bg-[#ffffff] md:bg-[#fff8e8] px-6 pb-16 pt-10 sm:px-10 lg:px-16 lg:pt-14 min-h-[740px] lg:min-h-[1240px]"
      >
        <div className="flex flex-col gap-8 w-full max-w-[1560px] mx-auto">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5 items-center">
              <span className="inline-flex items-center w-fit rounded-full bg-[#f3b457] px-5 py-2.5 text-lg md:text-lg font-medium text-[#3e2a1c] shadow-sm">
                Our services
              </span>
              <h1 className="text-2xl font-bold leading-snug text-center text-[#1f140c] md:text-4xl lg:text-5xl">
                Pure & Sustainable,
                <br />
                Dairy Services
              </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {services.map((service, index) => {
                const isFilled = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row w-full items-center md:items-start gap-3 px-4 py-7 border border-[#f6cd91] rounded-[20px] shadow-sm ${isFilled ? "bg-[#f6cd91]" : "bg-white"}`}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className={`h-8 w-8 ${isFilled ? "" : "opacity-60"}`}
                    />

                    <div className="flex flex-col gap-2 items-center md:items-start h-full">
                      <h2 className="text-[20px] font-semibold text-[#1f140c] text-center md:text-left">
                        {service.title}
                      </h2>
                      <p className="text-base text-[#5f4f41] mt-auto text-center md:text-left leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Image
            src="/Rectangle33.svg"
            alt="Riya Mehta"
            width={1560}
            height={460}
            className="object-contain md:hidden rounded-2xl mx-auto"
          />
          <Image
            src="/Rectangle23.svg"
            alt="Riya Mehta"
            width={1560}
            height={460}
            className="object-contain hidden md:block rounded-2xl mx-auto"
          />
        </div>
      </section>

      <section className="flex flex-col gap-16 max-w-[1560px] mx-auto my-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/productsimage.svg"
              alt="product"
              width={700}
              height={600}
              className="object-contain w-full max-w-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[640px] flex flex-col gap-7 text-center md:text-left">
              <div className="flex flex-col gap-6 items-center md:items-start">
                <span className="inline-flex w-fit items-center rounded-full bg-[#f3b457] px-4 py-2 text-xs font-semibold text-[#3e2a1c] shadow-sm">
                  Why Choose Us
                </span>
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                    Trusted Source for Pure
                    <br className="hidden sm:block" />& Traditional Dairy
                  </h2>
                  <p className="text-base text-neutral-700 sm:text-lg">
                    Milkaaru brings you farm-fresh dairy made with care,
                    tradition, and complete transparency — just the way nature
                    intended.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {[
                  {
                    icon: "/animalcow.svg",
                    title: "Gir Cow Based Dairy",
                    filled: true,
                  },
                  {
                    icon: "/contrastbutter.svg",
                    title: "Traditional Bilona Method",
                    filled: false,
                  },
                  {
                    icon: "/leaffill.svg",
                    title: "Chemical & Hormone Free",
                    filled: false,
                  },
                  {
                    icon: "/iconamoondelivery.svg",
                    title: "Fresh & Reliable Delivery",
                    filled: true,
                  },
                ].map((item) => {
                  const isFilled = item.filled;
                  return (
                    <div
                      key={item.title}
                      className={`flex items-center gap-3 rounded-2xl border border-[#f5b860] px-4 py-4 sm:px-5 sm:py-5 shadow-sm ${isFilled ? "bg-[#f6cd91]" : "bg-white"}`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <span className="flex-1 text-left text-[20px] font-semibold text-[#1f140c]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row  justify-between gap-5"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-5 w-full mx-auto px-3">
          {sources.map((source, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 max-w-[300px] w-full"
            >
              <div className="flex items-end gap-2">
                <span className="font-extrabold text-6xl text-[#1f140c] leading-none">
                  {source.counts}
                </span>
                <span className="text-xl font-semibold text-[#f3b457]">+</span>
              </div>
              <div className="h-px w-full bg-[#cfcfcf]" />
              <div className="pt-1">
                <p className="text-base text-[#1f140c] font-semibold">
                  {source.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-[url('/Frame277.svg')]
                    md:bg-[url('/Frame277.svg')]
                    bg-cover bg-center bg-no-repeat
                    relative z-0 w-full rounded-4xl mx-auto max-w-[1560px] h-fit mt-36 mb-12 px-4 sm:px-6 lg:px-10"
      >
        <div className="w-full flex flex-col items-center gap-8 py-10 lg:py-12">
          <p className="text-center text-3xl sm:text-4xl font-bold text-white">
            Fresh from Farm to
            <br className="hidden sm:block" />
            Your Home
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-end w-full gap-8 lg:gap-12 justify-between">
            <div className="flex flex-col gap-3 items-center text-center text-white max-w-xs lg:items-start lg:text-left">
              <Image
                src="/iconamoondeliveryyellow.svg"
                alt="Free Delivery"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold">Free Delivery</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Early morning fresh milk
                <br />
                No extra delivery charges
                <br />
                Direct farm se aapke ghar tak
              </p>
            </div>

            <div className="flex justify-center items-end">
              <Image
                src="/deliverytruck.svg"
                alt="delivery truck"
                width={900}
                height={260}
                className="w-full max-w-[1020px] object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 items-center text-center text-white max-w-xs lg:items-end lg:text-right">
              <Image
                src="/solarhomeyellow.svg"
                alt="Home Delivery"
                width={50}
                height={50}
              />
              <p className="text-lg font-semibold">Home Delivery</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Daily fresh Gir cow milk
                <br />
                Hygienic & safe packaging
                <br />
                Time-to-time doorstep delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col mt-32 gap-6 mx-auto max-w-[1560px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full mx-auto">
          <Image
            src="/rectangle28.svg"
            width={800}
            height={500}
            alt="Man pouring milk into bottles"
            className="lg:col-span-2  object-cover rounded-xl"
          />
          <Image
            src="/rectangle29.svg"
            width={850}
            height={500}
            alt="Two cows close-up"
            className="object-cover rounded-xl"
          />
          <Image
            src="/rectangle30.svg"
            width={850}
            height={500}
            alt="Man with milk pot"
            className="object-cover rounded-xl"
          />
          <Image
            src="/rectangle32.svg"
            width={850}
            height={500}
            alt="Cows eating fodder"
            className="object-cover rounded-xl"
          />
          <Image
            src="/rectangle31.svg"
            width={800}
            height={500}
            alt="Man milking cow"
            className="lg:col-span-2 object-cover rounded-xl"
          />
          <Image
            src="/rectangle33.svg"
            width={850}
            height={500}
            alt="Man petting cow"
            className="object-cover rounded-xl"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
