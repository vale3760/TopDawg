import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <main className="bg-[#faf8f3]">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          
          {/* Left - Hero Photo (will become carousel) */}
          <HeroCarousel />

          {/* Right */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#7d8778]">
              TOP DAWG PET CARE
            </p>

            <h1 className="mt-3 text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-[#3f3d38] md:text-4xl">
              Thoughtful care for happier,
              <br />
              more confident dogs.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6962]">
              Personalized boarding, training, and behavior support designed to
              help your dog thrive while giving you peace of mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/availability"
                className="rounded-full border border-[#355C4B] bg-[#355C4B] px-7 py-3 !text-white transition hover:bg-[#3F5748]"
              >
                Check Availability
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#D7D3CC] bg-[#FAF8F3] px-7 py-3 text-[#3F3F3F] transition hover:bg-[#F1ECE4]"
              >
                Services
              </Link>
            </div>

            {/* Bottom Row */}
            <div className="mt-14 flex items-center justify-between border-t border-[#ddd7cc] pt-8">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8b857c]">
                  Boarding • Training • Behavior Support
                </p>

                <p className="mt-4 text-2xl italic text-[#66715f]">
                  Build the bond.
                  <br />
                  Build the behavior.
                </p>
              </div>

              <Image
                src="/logo.png"
                alt="Top Dawg Logo"
                width={140}
                height={140}
                className="object-contain opacity-80"
              />

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}