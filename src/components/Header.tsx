import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Milkaaru
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/product"
          className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}
