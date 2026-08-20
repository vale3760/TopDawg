"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/availability", label: "Availability" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b border-[#e4ded4]
        bg-[#faf8f3]/95
        backdrop-blur-md
        transition-all duration-300
        ${scrolled ? "shadow-sm" : ""}
      `}
    >
      {/* MAIN NAVBAR */}
      <div
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          px-5 transition-all duration-300 md:px-8

          ${
            scrolled
              ? "h-[65px] md:h-[70px]"
              : "h-[105px] md:h-[145px]"
          }
        `}
      >

        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/tdpcLogo.png"
            alt="Top Dawg Pet Care logo"
            width={500}
            height={500}
            priority
            className={`
              object-contain
              transition-all duration-300

              ${
                scrolled
                  ? "h-[78px] w-[140px] md:h-[90px] md:w-[175px] lg:h-[95px] lg:w-[190px]"
                  : "h-[115px] w-[200px] md:h-[145px] md:w-[260px] lg:h-[155px] lg:w-[285px]"
              }
            `}
          />
        </Link>         

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                font-bold text-stone-900
                transition-all duration-300
                hover:text-[#4C6A58]

                ${scrolled ? "text-sm" : "text-base"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact?service=assessment"
          className={`
            hidden rounded-full
            bg-[#051030]
            font-semibold !text-white
            transition-all duration-300
            hover:bg-[#0B1D4A]
            lg:inline-flex

            ${
              scrolled
                ? "px-5 py-2 text-sm"
                : "px-7 py-3 text-sm"
            }
          `}
        >
          Get In Touch
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            flex h-11 w-11
            items-center justify-center
            lg:hidden
          "
        >
          <div className="relative h-5 w-7">
            {/* TOP LINE */}
            <span
              className={`
                absolute left-0 top-0
                h-[2px] w-7
                bg-[#051030]
                transition-all duration-300

                ${
                  menuOpen
                    ? "top-[9px] rotate-45"
                    : ""
                }
              `}
            />

            {/* MIDDLE LINE */}
            <span
              className={`
                absolute left-0 top-[9px]
                h-[2px] w-7
                bg-[#051030]
                transition-all duration-300

                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            {/* BOTTOM LINE */}
            <span
              className={`
                absolute bottom-0 left-0
                h-[2px] w-7
                bg-[#051030]
                transition-all duration-300

                ${
                  menuOpen
                    ? "bottom-[9px] -rotate-45"
                    : ""
                }
              `}
            />
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`
          overflow-hidden
          bg-[#faf8f3]
          transition-all duration-300 ease-in-out
          lg:hidden

          ${
            menuOpen
              ? "max-h-[500px] border-t border-[#e4ded4] opacity-100"
              : "max-h-0 border-t border-transparent opacity-0"
          }
        `}
      >
        <nav className="px-6 pb-7 pt-3">

          {/* MOBILE LINKS */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                border-b border-stone-200
                py-4
                text-lg font-bold
                text-stone-900
                transition
                hover:pl-2
                hover:text-[#4C6A58]
              "
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <Link
            href="/contact?service=assessment"
            onClick={() => setMenuOpen(false)}
            className="
              mt-6 block
              rounded-full
              bg-[#051030]
              px-6 py-3
              text-center
              font-semibold
              !text-white
              transition
              hover:bg-[#0B1D4A]
            "
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}