import Link from "next/link";
import { FaInstagram, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 md:grid md:grid-cols-3 md:gap-10 md:py-14">

        {/* BRAND */}
        <div>
          <h2 className="text-lg font-black uppercase tracking-wide text-white sm:text-xl">
            Top Dawg Pet Care
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400 sm:mt-4 sm:text-base sm:leading-7">
            Personalized boarding and behavior support for dogs navigating life
            in an unpredictable urban environment.
          </p>
        </div>

        {/* MOBILE LINKS AREA */}
          <div className="mt-8 grid grid-cols-2 gap-8 md:contents">

            {/* EXPLORE */}
            <div>
              <h3 className="font-bold text-white">
                Explore
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-stone-400 sm:text-base">
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>

                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>

                <Link
                  href="/contact?service=assessment"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>

                <Link href="/terms" className="transition hover:text-white">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-bold text-white">
                Services
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-stone-400 sm:text-base">
                <Link
                  href="/services#boarding"
                  className="transition hover:text-white"
                >
                  Boarding
                </Link>

                <Link
                  href="/services#training"
                  className="transition hover:text-white"
                >
                  Training
                </Link>

                <Link
                  href="/services#board-and-train"
                  className="transition hover:text-white"
                >
                  Board & Train
                </Link>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS — centered under both columns */}
          <div className="mt-10 flex items-center justify-center gap-16 md:col-span-3">
            <a
              href="https://www.instagram.com/top.dawg.pet.care?igsi=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone-400 transition hover:text-white"
            >
              <FaInstagram className="h-11 w-11 md:h-12 md:w-12" />
            </a>

            <a
              href="https://maps.app.goo.gl/eAGTDKmELJVsiXjf7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="text-stone-400 transition hover:text-white"
            >
              <FaGoogle className="h-11 w-11 md:h-12 md:w-12" />
            </a>
          </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-stone-800 px-5 py-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-xs text-stone-500 sm:text-sm md:flex-row md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()} Top Dawg Pet Care. All rights reserved.
          </p>

          <Link
            href="/terms"
            className="transition hover:text-white"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}