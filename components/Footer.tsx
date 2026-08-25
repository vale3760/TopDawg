import Link from "next/link";
import Image from "next/image";

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

          {/* SOCIAL ICONS */}
          <div className="mt-10 flex items-center justify-center gap-12 md:col-span-3">
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/top.dawg.pet.care?igsi=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone-400 transition hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-11 w-11"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* GOOGLE */}
            <a
              href="https://maps.app.goo.gl/eAGTDKmELJVsiXjf7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="text-stone-400 transition hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-11 w-11"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M21.35 12.18c0-.67-.06-1.17-.19-1.69H12v3.33h5.38c-.11.83-.69 2.08-1.99 2.92l-.02.11 2.89 2.24.2.02c1.84-1.7 2.89-4.2 2.89-6.93Z"
                />
                <path
                  fill="currentColor"
                  d="M12 21.72c2.63 0 4.83-.87 6.44-2.37l-3.07-2.38c-.82.55-1.91.94-3.37.94-2.57 0-4.75-1.74-5.53-4.14l-.11.01-3 2.32-.04.11A9.72 9.72 0 0 0 12 21.72Z"
                />
                <path
                  fill="currentColor"
                  d="M6.47 13.77A5.85 5.85 0 0 1 6.15 12c0-.62.11-1.21.3-1.77v-.12L3.42 7.75l-.1.05A9.72 9.72 0 0 0 2.28 12c0 1.51.36 2.94 1.04 4.2l3.15-2.43Z"
                />
                <path
                  fill="currentColor"
                  d="M12 6.09c1.83 0 3.07.79 3.78 1.45l2.72-2.66C16.83 3.33 14.63 2.28 12 2.28A9.72 9.72 0 0 0 3.32 7.8l3.13 2.43C7.24 7.83 9.42 6.09 12 6.09Z"
                />
              </svg>
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