import Image from "next/image";

export function Svg6({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/6.svg"
        alt="Decorative graphic 6"
        width={1920}
        height={654}
        className="w-full h-auto"
      />
    </div>
  );
}
