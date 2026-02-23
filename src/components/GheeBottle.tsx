import Image from "next/image";
import { cn } from "../lib/utils";

export type GheeBottleProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function GheeBottle({ className, width = 160, height = 240, priority }: GheeBottleProps) {
  return (
    <Image
      src="/ghee.svg"
      alt="Gir Cow Ghee"
      width={width}
      height={height}
      className={cn("h-auto w-auto", className)}
      priority={priority}
    />
  );
}
