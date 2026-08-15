import HeroCarousel from "@/components/HeroCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the philosophy and experience behind Top Dawg Pet Care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/gallery/litoPics3.jpeg"
          alt="Dogs walking in San Francisco"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        {/* Overall darkening */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Darker fade behind text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051030]/60 via-[#051030]/35 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3x1 translate-y-30">
          <p className="text-xl font-bold uppercase tracking-[0.22em] text-[#C2DCFF]">
            About Me
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black text-white leading-tight md:text-6xl">
            Care built around understanding the dog in front of me.
          </h1>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-white">
            Boarding and behavior support to help you navigate life with your
            dog in the unpredictability of an urban city.
          </p>
        </div>
        </div>
      </section>

      {/* HOW IT STARTED */}
      <section className="bg-[#f8f4ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
                How I started
              </p>
              <br></br>
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] md:h-[520px]">
              <Image
                src="/JoseWithMurphy.JPG"
                alt="José with his dog"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              My passion for working with dogs started in 2020, when I adopted
              a reactive Shepherd mix of my own. She presented challenges that
              I had never experienced before, and I quickly realized that
              understanding her behavior and learning how to communicate with
              her would be essential.
            </p>

            <p>
              Through patience, consistency, and training, I was able to help
              her become the best dog she could be. More importantly, I learned
              how to help her feel safe, comfortable, and confident in
              situations that once made her uncomfortable.
            </p>

            <p>
              Seeing her progress and knowing that I was able to give her the
              care and support she needed was incredibly fulfilling. That
              experience sparked my passion for helping other dogs and their
              owners build the same kind of relationship.
            </p>
          </div>
        </div>
      </section>

      {/* BOARDING */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">

          {/* LEFT: text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              The next step
            </p>

            <div className="mt-8 space-y-6 text-lg leading-8 text-stone-700">
              <p>
                I began boarding in 2023, where I've had the opportunity to
                care for dogs with all kinds of personalities and needs. When a
                dog is in my care, I treat them as if they were my own.
              </p>

              <p>
                Every dog is different, and I believe good care means
                understanding what each dog needs to feel comfortable and happy.
              </p>

              <p>
                For some, that might mean playing with their favorite toys,
                socializing with other dogs, or simply going on a long, slow walk
                where they can stop, sniff, and take in their surroundings.
              </p>
            </div>

            <Link
              href="/services#boarding"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#4C6A58] underline decoration-amber-400 decoration-4 underline-offset-8"
            >
              Explore boarding services
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* RIGHT: circle image + caption */}
          <div className="flex flex-col items-center">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full md:h-[550px] md:w-[550px]">
              <Image
                src="/LunaMooseAstraFloor.jpeg"
                alt="Dogs relaxing at Top Dawg Pet Care"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 340px, 420px"
              />
            </div>
          </div>

        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-[#f8f4ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <HeroCarousel group="two" />

          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Training
            </p>

            <p>
              As I began boarding more dogs, I found myself caring for many
              reactive and anxious dogs. That experience sparked my interest in
              dog training and showed me that this was something I was naturally
              good at and genuinely wanted to pursue.
            </p>

            <p>
              I offer personalized training plans designed to strengthen the
              relationship between you and your dog while developing behaviors
              that help you navigate the real world together.
            </p>

            <p>
              I don't believe every dog simply needs stricter training or
              more control. Often, what they really need is more understanding,
              support, and clear communication.
            </p>

            <Link
              href="/services#training"
              className="inline-flex items-center gap-2 font-bold text-[#4C6A58] underline decoration-amber-400 decoration-4 underline-offset-8"
            >
              Explore training services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SAN FRANCISCO / WHY */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20 md:items-center">

          {/* LEFT: TEXT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Why I do this
            </p>
            <br></br>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              Living and working with dogs in San Francisco has shown me just
              how unpredictable the world around them can be. Busy streets,
              unfamiliar people, other dogs, and new environments can all
              create challenges.
            </p>

            <p>
              My goal is to help owners better understand their dogs and give
              them practical tools to navigate those situations with more
              confidence and safety.
            </p>

            <p>
              For me, the most rewarding part of this work is seeing the
              relationship between a dog and their owner grow. I want to help
              you better understand your companion, build trust, and create a
              relationship where both you and your dog can feel more comfortable
              and confident together.
            </p>
          </div>
          </div>

          {/* RIGHT: PHOTO */}
          <div>

            <br />

            <div className="relative h-[420px] overflow-hidden rounded-[2rem] md:h-[520px]">
              <Image
                src="/walkKumaBoys.jpeg"
                alt="Dogs walking in San Francisco"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              {/* Caption fade */}
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              {/* Caption inside image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="max-w-md text-lg font-semibold italic leading-7 text-white/95 md:text-xl">
                  Helping dogs feel safer in an unpredictable city.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY STATEMENT */}
      <section className="bg-[#EFE8DD] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-md font-semibold uppercase tracking-[0.3em] text-[#051030]">
            My Approach
          </p>

          <h2 className="mt-6 text-3xl font-medium leading-relaxed text-[#3F372F] md:text-4xl">
            Whether I'm training your dog or caring for them while
            you're away, my goal is always the same:
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-relaxed text-[#051030] md:text-3xl">
            To give your dog the care, patience, and understanding I would want
            for my own.
          </p>
        </div>
      </section>
    </>
  );
}