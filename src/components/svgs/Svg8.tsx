import Image from "next/image";

export function Svg8({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/8.svg"
        alt="Decorative graphic 8"
        width={1920}
        height={1030}
        className="w-full h-auto"
      />
    </div>
  );
}
