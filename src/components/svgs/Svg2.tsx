import Image from "next/image";

export function Svg2({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/2.svg"
        alt="Decorative graphic 2"
        width={1920}
        height={1009}
        className="w-full h-auto"
      />
    </div>
  );
}
