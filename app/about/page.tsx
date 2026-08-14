import ReviewsSection from "@/components/ReviewsSection";
import type { Metadata } from "next";
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
      <section className="relative overflow-hidden bg-[#2A2F36] px-6 py-20 text-white">
        <img
          src="/logo.png"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.015]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#A9B89F]">
            About Me
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Care built around understanding the dog in front of me.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Boarding and behavior support to help you navigate life with your
            dog in the unpredictability of an urban city.
          </p>
        </div>
      </section>

      {/* HOW IT STARTED */}
      <section className="bg-[#f8f4ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              How it started
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-950 md:text-5xl">
              I trained my own dog.
            </h2>

            <p className="mt-3 text-xl font-semibold text-[#4C6A58]">
              2020
            </p>
          </div>

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
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-6 text-lg leading-8 text-stone-700 md:order-2">
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

            <Link
              href="/services#boarding"
              className="inline-flex items-center gap-2 font-bold text-[#4C6A58] underline decoration-amber-400 decoration-4 underline-offset-8"
            >
              Explore boarding services
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              The next step
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-950 md:text-5xl">
              From caring for dogs to understanding behavior.
            </h2>

            <p className="mt-3 text-xl font-semibold text-[#4C6A58]">
              2023
            </p>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-[#f8f4ec] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Training
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-950 md:text-5xl">
              Build a bond to build the behavior.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-700">
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
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div className="md:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Why I do this
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-stone-950 md:text-5xl">
              Helping dogs feel safer in an unpredictable city.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-700 md:order-1">
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
      </section>

      {/* PHILOSOPHY STATEMENT */}
      <section className="bg-[#EFE8DD] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66785A]">
            My Approach
          </p>

          <h2 className="mt-6 text-3xl font-medium leading-relaxed text-[#3F372F] md:text-4xl">
            Whether I'm training your dog or caring for them while
            you're away, my goal is always the same:
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-relaxed text-[#4C6A58] md:text-3xl">
            To give your dog the care, patience, and understanding I would want
            for my own.
          </p>
        </div>
      </section>

      {/* TBD SECTIONS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              What I Believe
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950">
              [TBD]
            </h2>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Mission
            </p>

            <p className="mt-4 text-lg leading-8 text-stone-700">
              [TBD]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}