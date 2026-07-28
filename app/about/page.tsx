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
      <section className="relative overflow-hidden bg-[#2A2F36] px-6 py-20 text-white">
        {/* Faded logo */}
        <img
            src="/logo.png"
            alt=""
            aria-hidden
            className="absolute left-1/2 top-1/2 w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.015]"
            />
      </section>

      <section className="bg-[#f8f4ec] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              What I do and why
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950">
              Build a bond to build the behavior.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              I offer personalized training plans that strengthen the
              relationship between you and your favorite companion.
            </p>

            <p>
              I believe the relationship between you and your dog should be a
              companionship before it becomes a codependent relationship.
              Training should create confidence, communication, and mutual
              understanding.
            </p>

            <p>
              Rather than expecting every dog to fit the same system, I adapt
              the plan to the dog, the owner, and the life they share together.
            </p>

            <Link
              href="/services#training"
              className="inline-block font-bold text-stone-950 underline decoration-amber-400 decoration-4 underline-offset-8"
            >
              Explore training services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-8 text-stone-700 md:order-2">
            <p>
              I grew up around dogs, but my path into professional care became
              personal when I rescued and trained a reactive dog.
            </p>

            <p>
              I began boarding dogs four years ago, starting with one dog at a
              time so I could offer a more attentive and individualized
              experience.
            </p>

            <p>
              Since then, I have worked with dogs with many different
              personalities, including numerous reactive pups who needed
              patience, structure, space, and thoughtful handling.
            </p>

            <p>
              Dogs are my passion. I find great fulfillment in helping owners
              connect with their dogs while developing the behaviors they want
              to see at home.
            </p>
          </div>

          <div className="md:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              How I got here
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950">
              Experience shaped by patience, observation, and real dogs.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE8DD] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66785A]">
            Mission
            </p>

            <h2 className="mt-6 text-3xl font-medium leading-relaxed text-[#3F372F] md:text-4xl">
            To provide personalized care and practical training that helps dogs feel
            secure, owners feel confident, and both enjoy a stronger life together.
            </h2>
        </div>
       </section>
       <ReviewsSection />
    </>

  );
}