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
      {/* HERO */}
      <section className="relative min-h-[500px] overflow-hidden sm:min-h-[550px] md:min-h-[600px]">
        <Image
          src="/gallery/litoPics3.jpeg"
          alt="Dogs walking in San Francisco"
          fill
          priority
          className="object-cover object-[60%_center] md:object-[center_35%]"
          sizes="100vw"
        />

        {/* Overall darkening */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/25" />

        {/* Darker fade behind text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051030]/75 via-[#051030]/45 to-transparent md:from-[#051030]/60 md:via-[#051030]/35" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-5 sm:min-h-[550px] sm:px-6 md:min-h-[600px] md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#C2DCFF] sm:text-base md:text-xl">
              About Me
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:mt-5 md:text-6xl">
              Care built around understanding the dog in front of me.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8 md:mt-7 md:max-w-5xl">
              Boarding and behavior support to help you navigate life with your
              dog in the unpredictability of an urban city.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT STARTED */}
      <section className="bg-[#f8f4ec] px-5 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-20">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              How I started
            </p>

            <div className="relative mt-5 h-[380px] overflow-hidden rounded-[1.5rem] sm:h-[450px] sm:rounded-[2rem] md:mt-6 md:h-[520px]">
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
          <div className="space-y-5 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8 md:space-y-6">
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
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-20">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              The next step
            </p>

            <div className="mt-6 space-y-5 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8 md:mt-8 md:space-y-6">
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
                socializing with other dogs, or simply going on a long, slow
                walk where they can stop, sniff, and take in their surroundings.
              </p>
            </div>

            <Link
              href="/services#boarding"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#4C6A58] underline decoration-amber-400 decoration-4 underline-offset-8 md:mt-8"
            >
              Explore boarding services
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-start">
            <div
              className="
                relative
                h-[320px] w-[320px]
                max-w-full
                overflow-hidden
                rounded-full
                sm:h-[400px] sm:w-[400px]
                md:h-[550px] md:w-[550px]
              "
            >
              <Image
                src="/LunaMooseAstraFloor.jpeg"
                alt="Dogs relaxing at Top Dawg Pet Care"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 550px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-[#f8f4ec] px-5 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20">
          <div className="min-w-0">
            <HeroCarousel group="two" />
          </div>

          <div className="space-y-5 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8 md:space-y-6">
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
              I don't believe every dog simply needs stricter training or more
              control. Often, what they really need is more understanding,
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
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-20">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Why I do this
            </p>

            <div className="mt-5 space-y-5 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8 md:mt-6 md:space-y-6">
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
                relationship where both you and your dog can feel more
                comfortable and confident together.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] sm:h-[460px] sm:rounded-[2rem] md:h-[520px]">
              <Image
                src="/walkKumaBoys.jpeg"
                alt="Dogs walking in San Francisco"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 via-black/25 to-transparent md:h-[40%] md:from-black/65 md:via-black/20" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
                <p className="max-w-md text-base font-semibold italic leading-6 text-white/95 sm:text-lg sm:leading-7 md:text-xl">
                  Helping dogs feel safer in an unpredictable city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#EFE8DD] px-5 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#051030] sm:tracking-[0.3em] md:text-base">
            My Approach
          </p>

          <h2 className="mt-5 text-2xl font-medium leading-relaxed text-[#3F372F] sm:text-3xl md:mt-6 md:text-4xl">
            Whether I'm training your dog or caring for them while you're away,
            my goal is always the same:
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl font-black leading-relaxed text-[#051030] sm:text-2xl md:text-3xl">
            To give your dog the care, patience, and understanding I would want
            for my own.
          </p>
        </div>
      </section>
    </>
  );
}