import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <main className="bg-[#faf8f3]">
    {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden sm:min-h-[580px] md:min-h-[650px]">
        <Image
          src="/BoysBeach.jpeg"
          alt="Top Dawg Pet Care"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent md:from-black/45 md:via-black/15" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-14 sm:min-h-[580px] sm:px-6 md:min-h-[650px] md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90 sm:text-base md:text-lg md:tracking-[0.25em]">
              Top Dawg Pet Care
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:mt-5 md:text-7xl">
              Build a bond.
              <br />
              Build better behavior.
            </h1>

            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8 md:mt-7 md:text-xl">
              Professional dog behavior support, training, and boarding designed
              to help dogs feel safe, comfortable, and understood.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-9">
              <Link
                href="/availability"
                className="w-full rounded-full bg-[#051030] px-7 py-3 text-center font-semibold !text-white sm:w-auto"
              >
                Check Availability
              </Link>

              <Link
                href="/services"
                className="w-full rounded-full border border-white/70 bg-white/15 px-7 py-3 text-center font-semibold !text-white backdrop-blur-sm transition hover:bg-white/25 sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Top Dawg */}
      <section className="bg-[#EFE8DD] px-5 py-16 sm:px-6 sm:py-20 md:py-28">
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
                <HeroCarousel group="one" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center">
              <div className="max-w-2xl">

                <p className="text-lg font-semibold leading-8 text-stone-700 sm:text-xl sm:leading-9">
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
      <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
           Personalized care built around your dog.
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black text-stone-950 md:text-5xl">
            My Services
          </h2>
          

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Boarding */}
            <article className="flex flex-col rounded-3xl border border-[#E2DDD4] bg-white p-6 sm:p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Boarding
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
            <article className="flex flex-col rounded-3xl border border-[#E2DDD4] bg-[#F6F1E9] p-6 sm:p-8 md:p-10">
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
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 md:py-32">

        {/* Background photo */}
        <div className="absolute inset-0">

          {/* Mobile crop */}
          <Image
            src="/murphy.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[65%_center] md:hidden"
          />

          {/* Desktop crop — ORIGINAL */}
          <Image
            src="/murphy.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="hidden object-cover object-center md:block"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#EFE8DD]/80 via-transparent to-[#EFE8DD]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            className="
              max-w-3xl
              rounded-2xl
              bg-[#EFE8DD]/75
              p-6
              shadow-xl
              backdrop-blur-md

              sm:rounded-3xl
              sm:bg-[#EFE8DD]/80
              sm:p-8

              md:bg-[#EFE8DD]/80
              md:p-12
              md:backdrop-blur-[3px]
            "
          >

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
              My Approach
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-stone-950 sm:text-4xl md:text-5xl">
              Understanding comes before behavior.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
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
                The goal isn't just to change your dog's behavior. It's to help
                you better understand each other so you can tackle challenges
                together.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[#4C6A58] pl-5">
              <p className="text-xl font-semibold italic leading-8 text-[#355C4B] sm:text-2xl sm:leading-9">
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

      {/* WHY PICK ME */}
      <section className="bg-[#f8f4ec] px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl">

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Why Top Dawg
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-5xl">
              Why Pick Me?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
              Experienced, personalized care focused on understanding your dog
              and building a relationship based on trust.
            </p>
          </div>

          <div className="space-y-10">

            <div className="flex gap-5">
              <span className="text-3xl" aria-hidden>
                🎓
              </span>

              <div>
                <h3 className="text-xl font-black text-stone-950">
                  Professional Training
                </h3>

                <p className="mt-2 leading-7 text-stone-600">
                  Graduate of Catch Canine Trainers Academy.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="text-3xl" aria-hidden>
                🐕
              </span>

              <div>
                <h3 className="text-xl font-black text-stone-950">
                  4+ Years Experience
                </h3>

                <p className="mt-2 leading-7 text-stone-600">
                  Experienced in boarding and caring for dogs with a wide variety
                  of personalities and needs.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="text-3xl" aria-hidden>
                🤝
              </span>

              <div>
                <h3 className="text-xl font-black text-stone-950">
                  Personalized Approach
                </h3>

                <p className="mt-2 leading-7 text-stone-600">
                  Training focused on trust, positive experiences, and building
                  better behavior together.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4C6A58] sm:text-sm sm:tracking-[0.22em]">
              Testimonials
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-stone-950 sm:mt-4 sm:text-4xl md:text-5xl">
              Trusted by dogs and their people.
            </h2>
          </div>

          <ReviewsSection />

        </div>
      </section>

      {/* Get Started */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div
          className="
            mx-auto
            max-w-7xl
            rounded-2xl
            bg-[#051030]
            px-6
            py-10
            text-center
            text-white
            sm:rounded-3xl
            sm:px-8
            sm:py-14
            md:px-14
            md:py-16
          "
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9E5DC] sm:text-sm sm:tracking-[0.22em]">
            Get Started
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Ready to find the right support for your dog?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Check boarding availability or tell me more about your dog and what
            you're looking for.
          </p>

          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link
              href="/availability"
              className="w-full rounded-full bg-white px-7 py-3 text-center font-semibold !text-[#355C4B] transition hover:bg-[#F4F0E8] sm:w-auto"
            >
              Check Availability
            </Link>

            <Link
              href="/contact?service=assessment"
              className="w-full rounded-full border border-white/40 px-7 py-3 text-center font-semibold !text-white transition hover:bg-white/10 sm:w-auto"
            >
              Contact Top Dawg
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}