import Image from "next/image";

export function Svg3({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/3.svg"
        alt="Decorative graphic 3"
        width={1920}
        height={1055}
        className="w-full h-auto"
      />
    </div>
  );
}
