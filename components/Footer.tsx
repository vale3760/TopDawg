import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
        {/* MOBILE:
            Brand on top
            Explore + Services side by side

            DESKTOP:
            3 columns
        */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h2 className="text-lg font-black uppercase tracking-wide text-white sm:text-xl">
              Top Dawg Pet Care
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400 sm:mt-4 sm:text-base sm:leading-7">
              Personalized boarding and behavior support for dogs navigating
              life in an unpredictable urban environment.
            </p>
          </div>

          {/* EXPLORE + SERVICES */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2 md:gap-10">
            {/* EXPLORE */}
            <div>
              <h3 className="font-bold text-white">
                Explore
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-stone-400 sm:text-base">
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="transition hover:text-white"
                >
                  Services
                </Link>

                <Link
                  href="/contact?service=assessment"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>

                <Link
                  href="/terms"
                  className="transition hover:text-white"
                >
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
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex w-full items-center justify-center gap-12 sm:gap-16">
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/top.dawg.pet.care?igsi=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="block text-stone-300 transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-11 sm:w-11"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* GOOGLE */}
          <a
            href="https://maps.app.goo.gl/eAGTDKmELJVsiXjf7?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
            className="block text-stone-300 transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-11 sm:w-11"
              fill="currentColor"
            >
              <path d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.02v2.52h3.24c1.9-1.75 2.98-4.33 2.98-7.38Z" />

              <path d="M12 22c2.7 0 4.97-.9 6.62-2.39l-3.24-2.52c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.13H3.06v2.6A10 10 0 0 0 12 22Z" />

              <path d="M6.41 13.92A6 6 0 0 1 6.1 12c0-.67.11-1.32.31-1.92v-2.6H3.06A10 10 0 0 0 2 12c0 1.61.39 3.13 1.06 4.52l3.35-2.6Z" />

              <path d="M12 5.95c1.47 0 2.79.51 3.83 1.5l2.87-2.87A9.64 9.64 0 0 0 12 2 10 10 0 0 0 3.06 7.48l3.35 2.6C7.2 7.71 9.4 5.95 12 5.95Z" />
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