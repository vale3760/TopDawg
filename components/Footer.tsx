import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-black uppercase tracking-wide text-white">
            Top Dawg Pet Care
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-stone-400">
            Personalized boarding and behavior support for dogs navigating life
            in an unpredictable urban environment.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Explore</h3>

          <div className="mt-4 flex flex-col gap-3 text-stone-400">
            <Link href="/about" className="hover:text-white">
              About
            </Link>

            <Link href="/services" className="hover:text-white">
              Services
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Services</h3>

          <div className="mt-4 space-y-3 text-stone-400">
            <p>In-home boarding</p>
            <p>Private dog training</p>
            <p>Board and train</p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-stone-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Top Dawg Pet Care. All rights reserved.
          </p>

          <Link
            href="/terms" 
            scroll={true}
            className="transition hover:text-white"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}