import Image from "next/image";
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/tdpcLogo.png"
            alt="Top Dawg Pet Care logo"
            width={220}
            height={140}
            priority
            className="h-auto w-[150px] object-contain md:w-[185px]"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-bold tracking-wide text-[#4f514c] transition hover:text-[#355C4B]"
            >
              {link.label}
            </Link>
          ))}
          <Link
          href="/availability"
          className="rounded-full bg-[#051030] px-6 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-[#2d4d40]"
          >
            Get In Touch
          </Link>
        </nav>

        
      </div>
    </header>
  );
}