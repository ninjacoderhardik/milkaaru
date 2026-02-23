import Image from "next/image";

export function Svg4({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/4.svg"
        alt="Decorative graphic 4"
        width={1920}
        height={821}
        className="w-full h-auto"
      />
    </div>
  );
}
