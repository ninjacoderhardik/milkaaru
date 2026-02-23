"use client";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export type RightModalProps = {
  open: boolean;
  onClose: () => void;
  widthClassName?: string;
  children: React.ReactNode;
};

export function RightModal({ open, onClose, widthClassName, children }: RightModalProps) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-label="Close modal"
      />
      <div
        className={cn(
          "relative ml-auto flex h-full w-1/2 min-w-[320px] max-w-[640px] flex-col bg-white shadow-2xl transition-all duration-300",
          animateIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
          widthClassName,
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 shadow hover:bg-neutral-200"
          aria-label="Close"
        >
          ×
        </button>
        <div className="h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
