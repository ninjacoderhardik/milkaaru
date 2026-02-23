import Image from "next/image";

export function Svg1({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/1.svg"
        alt="Decorative graphic 1"
        width={1920}
        height={1051}
        className="w-full h-auto"
      />
    </div>
  );
}
