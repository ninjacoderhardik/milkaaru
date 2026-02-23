import Image from "next/image";
import { cn } from "../lib/utils";

export type Frame498Props = {
  className?: string;
  priority?: boolean;
};

export function Frame498({ className, priority }: Frame498Props) {
  return (
    <Image
      src="/Frame 498.svg"
      alt="Fresh milk hero"
      width={960}
      height={655}
      priority={priority}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
