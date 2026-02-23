import Image from "next/image";

export function Svg5({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/5.svg"
        alt="Decorative graphic 5"
        width={1920}
        height={1281}
        className="w-full h-auto"
      />
    </div>
  );
}
