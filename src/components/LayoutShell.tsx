"use client";

import { usePathname } from "next/navigation";
import { NavbarHome } from "./NavbarHome";

type Props = {
  children: React.ReactNode;
};

export function LayoutShell({ children }: Props) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/";

  return (
    <div className="flex min-h-screen flex-col">
      {showNavbar && <NavbarHome />}
      <main className="flex-1">{children}</main>
      {/* <FooterHome /> */}
    </div>
  );
}
