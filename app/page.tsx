import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <main className="bg-[#faf8f3]">
    {/* Hero */}
    <section className="relative min-h-[650px] overflow-hidden">
      {/* Full background photo */}
      <Image
        src="/BoysBeach.jpeg"
        alt="Top Dawg Pet Care"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* 
        Very light overlay.
        This keeps the PHOTO clearly visible while making the text readable.
      */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Slight gradient behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 md:px-8">
        <div className="max-w-2xl">
          
          <p className="text-lg font-bold uppercase tracking-[0.25em] text-white/90">
            Top Dawg Pet Care
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-7xl">
            Build a bond.
            <br />
            Build better behavior.
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-white/90 md:text-xl">
            Professional dog behavior support, training, and boarding designed
            to help dogs feel safe, comfortable, and understood.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/availability"
              className="rounded-full bg-[#051030] px-7 py-3 font-semibold !text-white"
            >
              Check Availability
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/70 bg-white/15 px-7 py-3 font-semibold !text-white backdrop-blur-sm transition hover:bg-white/25"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </div>
    </section>

      {/* What Is Top Dawg */}
      <section className="bg-[#EFE8DD] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Main two-column layout */}
          <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

            {/* LEFT */}
            <div>
              <h2 className="max-w-xl text-4xl font-black leading-[1.05] text-[#051030] md:text-5xl">
                What Is Top Dawg
                <br />
                Pet Care?
              </h2>

              <p className="mt-5 max-w-lg text-base font-bold uppercase leading-7 tracking-[0.18em] text-stone-600">
                Thoughtful support for dogs and the people who love them.
              </p>

              {/* Larger photo */}
              <div className="mt-8">
                <HeroCarousel group="one"/>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center">
              <div className="max-w-2xl">

                <p className="text-xl font-semibold leading-9 text-stone-700">
                  Top Dawg Pet Care provides professional dog behavior support,
                  training, and boarding services designed to help dogs feel safe,
                  comfortable, and understood.
                </p>

                <div className="my-8 h-px w-20 bg-[#4C6A58]/40" />

                <div className="space-y-6 text-lg leading-8 text-stone-700">
                  <p>
                    Owning a dog can come with its challenges, especially when
                    navigating the unpredictability of an urban environment like San
                    Francisco.
                  </p>

                  <p>
                    I started Top Dawg Pet Care because of my passion for dogs and my
                    desire to help owners build stronger, more trusting relationships
                    with their companions.
                  </p>

                  <p>
                    Whether your dog needs help with a specific behavior or simply a
                    comfortable place to stay while you're away, my goal is to provide
                    thoughtful, personalized care based on what each dog needs.
                  </p>
                </div>

                {/* Little finishing statement */}
                <p className="mt-8 text-xl font-semibold italic text-[#355C4B]">
                  Care built around the dog in front of me.
                </p>

              </div>
            </div>

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
      <section className="relative overflow-hidden px-6 py-24 md:py-32">

        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/murphy.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Fade at top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#EFE8DD]/80 via-transparent to-[#EFE8DD]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-3xl rounded-3xl bg-[#EFE8DD]/80 p-8 backdrop-blur-[3px] md:p-12">

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