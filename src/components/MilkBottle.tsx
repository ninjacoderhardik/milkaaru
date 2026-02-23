import Image from "next/image";
import { cn } from "../lib/utils";

export type MilkBottleProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function MilkBottle({ className, width = 160, height = 240, priority }: MilkBottleProps) {
  return (
    <Image
      src="/milk.svg"
      alt="Milk bottle"
      width={width}
      height={height}
      className={cn("h-auto w-auto", className)}
      priority={priority}
    />
  );
}
