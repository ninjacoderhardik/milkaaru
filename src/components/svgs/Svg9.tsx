import Image from "next/image";

export function Svg9({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/9.svg"
        alt="Decorative graphic 9"
        width={1920}
        height={714}
        className="w-full h-auto"
      />
    </div>
  );
}
