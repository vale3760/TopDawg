import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/availability", label: "Availability" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e4ded4] bg-[#faf8f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.14em] text-[#5f665b]"
        >
          TOP DAWG
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6e6a63] transition hover:text-[#52624f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/availability"
          className="rounded-full border border-[#355C4B] bg-[#355C4B] px-7 py-3 !text-white transition hover:bg-[#3F5748]"
        >
          Check Availability
        </Link>
      </div>
    </header>
  );
}