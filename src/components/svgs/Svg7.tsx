import Image from "next/image";

export function Svg7({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/7.svg"
        alt="Decorative graphic 7"
        width={1920}
        height={654}
        className="w-full h-auto"
      />
    </div>
  );
}
