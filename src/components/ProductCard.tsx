import Image from "next/image";
import { cn } from "../lib/utils";

export type ProductCardProps = {
  title: string;
  price: string;
  compareAtPrice?: string;
  imageSrc: string;
  rating?: number;
  className?: string;
  media?: React.ReactNode;
};

export function ProductCard({
  title,
  price,
  compareAtPrice,
  imageSrc,
  rating = 5,
  className,
  media,
}: ProductCardProps) {
  return (
    <div className={cn("flex w-full max-w-[260px] flex-col items-center gap-5 rounded-3xl bg-white px-8 pb-10 pt-10 shadow-md", className)}>
      <div className="relative h-[200px] w-[200px] flex items-center justify-center">
        {media ? (
          media
        ) : (
          <Image src={imageSrc} alt={title} fill className="object-contain" sizes="200px" />
        )}
      </div>

      <div className="flex items-center gap-1 text-amber-400" aria-hidden>
        {Array.from({ length: rating }).map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <div className="mt-1 flex items-center justify-center gap-2 text-sm">
          <span className="font-semibold text-[#f2a33b]">{price}</span>
          {compareAtPrice ? (
            <span className="text-neutral-400 line-through">{compareAtPrice}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
