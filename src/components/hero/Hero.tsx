import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroProps = {
  badgeText?: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export function Hero({
  badgeText,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate px-4 pb-12 pt-10 sm:px-8 lg:px-16",
        "grid grid-cols-1 items-center gap-10 lg:grid-cols-2",
        className,
      )}
    >

      {/* content */}
      <div className="relative z-10 space-y-6">
        {badgeText ? (
          <span className="inline-flex items-center rounded-full bg-[#f3b457] px-4 py-2 text-xs font-semibold text-[#3e2a1c] shadow-sm">
            {badgeText}
          </span>
        ) : null}

        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-snug text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-base text-neutral-700 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href={primaryCta.href}>
            <Button
              className="rounded-full bg-[#f2a33b] px-6 py-3 text-sm font-semibold text-neutral-900 shadow hover:bg-[#e59221]"
            >
              {primaryCta.label}
            </Button>
          </Link>
          {secondaryCta ? (
            <Link href={secondaryCta.href}>
              <Button
                variant="outline"
                className="rounded-full border-2 border-[#f2a33b] px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-[#fff2e2]"
              >
                {secondaryCta.label}
              </Button>
            </Link>
          ) : null}
        </div>
      </div>

      {/* image */}
      <div className="relative z-10 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[540px] drop-shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1080}
            height={1120}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
