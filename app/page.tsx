import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <main className="bg-[#faf8f3]">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <HeroCarousel />

          <div>
            <p className="text-xl font-bold uppercase tracking-[0.25em] text-[#051030]">
              Top Dawg Pet Care
            </p>

            <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-[#3f3d38] md:text-5xl">
              Build a bond.
              <br />
              Build better behavior.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6962]">
              Professional dog behavior support, training, and boarding designed
              to help dogs feel safe, comfortable, and understood.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/availability"
                className="rounded-full border border-[#355C4B] bg-[#355C4B] px-7 py-3 font-semibold !text-white transition hover:bg-[#3F5748]"
              >
                Check Availability
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#D7D3CC] bg-[#FAF8F3] px-7 py-3 font-semibold text-[#3F3F3F] transition hover:bg-[#F1ECE4]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-14 flex items-center justify-between gap-6 border-t border-[#ddd7cc] pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8b857c]">
                  Boarding • Training • Behavior Support
                </p>

                <p className="mt-4 text-2xl italic text-[#66715f]">
                  Build the relationship.
                  <br />
                  Build the understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Top Dawg */}
      <section className="bg-[#EFE8DD] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
          <p className="mt-4 max-w-3xl text-4xl font-black text-[#051030] md:text-5xl">
          What Is Top Dawg Pet Care?
        </p>

        <h2 className="mt-4 text-xl font-bold uppercase tracking-[0.18em] text-stone-700 md:text-xl">
          Thoughtful support for dogs and the people who love them.
        </h2>
            
          </div>

          <div className="space-y-5 font-bold text-lg leading-8 text-stone-700">
            <p>
              Top Dawg Pet Care provides professional dog behavior support,
              training, and boarding services designed to help dogs feel safe,
              comfortable, and understood.
            </p>

            <p>
              Owning a dog can come with its challenges, especially when
              navigating the unpredictability of an urban environment like San
              Francisco. I started Top Dawg Pet Care because of my passion for
              dogs and my desire to help owners build stronger, more trusting
              relationships with their companions.
            </p>

            <p>
              Whether your dog needs help with a specific behavior or simply a
              comfortable place to stay while you're away, my goal is to
              provide thoughtful, personalized care based on what each dog
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
           Personalized care built around your dog.
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black text-stone-950 md:text-5xl">
            My Services
          </h2>
          

          

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Boarding */}
            <article className="flex flex-col rounded-3xl border border-[#E2DDD4] bg-white p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                In-Home Boarding
              </p>

              <h3 className="mt-4 text-3xl font-black text-stone-950">
                A comfortable place to stay while you're away.
              </h3>

              <div className="mt-5 space-y-4 leading-7 text-stone-600">
                <p>
                  When your dog stays with me, they are treated like one of my
                  own. I provide personalized care and take the time to
                  understand what makes each dog comfortable and happy.
                </p>

                <p>
                  That might mean playing with their favorite toys, socializing
                  with other dogs, or taking long, relaxing walks where they can
                  slow down and sniff.
                </p>

                <p>
                  I also provide daily updates and photos during their stay, so
                  you can feel connected and know how your dog is doing while
                  you're away.
                </p>
              </div>

              <Link
                href="/availability"
                className="mt-8 inline-block w-fit rounded-full bg-[#4C6A58] px-6 py-3 font-semibold !text-white transition hover:bg-[#365243]"
              >
                Check Boarding Availability
              </Link>
            </article>

            {/* Training */}
            <article className="flex flex-col rounded-3xl border border-[#E2DDD4] bg-[#F6F1E9] p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Behavior Support & Training
              </p>

              <h3 className="mt-4 text-3xl font-black text-stone-950">
                Training built on communication and trust.
              </h3>

              <div className="mt-5 space-y-4 leading-7 text-stone-700">
                <p>
                  I provide behavior support and training to help you and your
                  dog develop the behaviors and skills you want to see.
                </p>

                <p>
                  I don't believe dogs necessarily need stricter training
                  or more control. They need understanding, communication, and
                  support.
                </p>

                <p>
                  Training should be a collaboration between you and your
                  dog—one where they can learn, gain confidence, and have fun
                  along the way.
                </p>
              </div>

              <p className="mt-7 text-xl font-semibold italic text-[#4C6A58]">
                Build a bond to build the behavior.
              </p>

              <Link
                href="/services#training"
                className="mt-8 inline-block w-fit rounded-full border border-[#4C6A58] px-6 py-3 font-semibold text-[#4C6A58] transition hover:bg-[#4C6A58] hover:!text-white"
              >
                Explore Training
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#EFE8DD] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[460px] overflow-hidden rounded-3xl">
            <Image
              src="/gallery/litoPics4.jpg"
              alt="Dog training with Top Dawg Pet Care"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
              My Approach
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-5xl">
              Understanding comes before behavior.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-700">
              <p>
                My approach is centered around positive reinforcement,
                understanding, and building trust.
              </p>

              <p>
                Rather than simply trying to stop unwanted behaviors, I focus on
                understanding <em>why</em> they are happening and helping your
                dog feel more comfortable in situations that may be stressful or
                challenging.
              </p>

              <p>
                Games, rewards, and positive experiences can make learning more
                engaging while helping your dog develop confidence.
              </p>

              <p>
                The goal isn't just to change your dog's behavior.
                It's to help you better understand each other so you can
                tackle challenges together.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[#4C6A58] pl-5">
              <p className="text-2xl font-semibold italic leading-9 text-[#355C4B]">
                Build the relationship.
                <br />
                Build the understanding.
                <br />
                Build the behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
              Testimonials
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-5xl">
              Trusted by dogs and their people.
            </h2>
          </div>

          <ReviewsSection />
        </div>
      </section>

      {/* Get Started */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#051030] px-8 py-14 text-center text-white md:px-14 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D9E5DC]">
            Get Started
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-5xl">
            Ready to find the right support for your dog?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Check boarding availability or tell me more about your dog and what
            you're looking for.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/availability"
              className="rounded-full bg-white px-7 py-3 font-semibold !text-[#355C4B] transition hover:bg-[#F4F0E8]"
            >
              Check Availability
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-7 py-3 font-semibold !text-white transition hover:bg-white/10"
            >
              Contact Top Dawg
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}