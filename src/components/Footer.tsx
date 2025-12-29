import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/product", label: "Products" },
  { href: "/services", label: "Services" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Milkaaru</p>
            <p className="text-sm text-neutral-600">
              Farm-fresh dairy, delivered daily.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-neutral-700">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 text-xs text-neutral-500">
          © {year} Milkaaru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
