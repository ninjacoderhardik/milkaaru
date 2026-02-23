import Image from "next/image";
import { cn } from "../lib/utils";

export type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function Logo({ className, width = 140, height = 60, priority }: LogoProps) {
  return (
    <Image
      src="/Milkaaru 1.svg"
      alt="Milkaaru logo"
      width={width}
      height={height}
      className={cn("h-auto w-auto", className)}
      priority={priority}
    />
  );
}
