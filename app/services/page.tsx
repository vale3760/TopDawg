import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private dog training, boarding, and board-and-train services.",
};

const trainingOptions = [
  {
    value: "assessment",
    name: "Initial Assessment + First Lesson",
    price: "$200",
    description:
      "Every new client begins here. We'll assess your dog's behavior, discuss your goals, and begin training with your first personalized lesson.",
    features: [
      "Behavior and lifestyle assessment",
      "Goal setting",
      "Initial one-on-one lesson",
      "Personalized training recommendations",
    ],
    buttonText: "Book Assessment",
    bookableOnline: true,
  },
  {
    value: "three-lesson-package",
    name: "Three-Lesson Package",
    price: "$240",
    description:
      "Recommended after the initial assessment for dogs ready to continue training.",
    features: [
      "Three one-hour lessons",
      "Progressive training plan",
      "Homework and continued guidance",
    ],
    buttonText: "Available After Assessment",
    bookableOnline: false,
  },
  {
    value: "five-lesson-package",
    name: "Five-Lesson Package",
    price: "$375",
    description:
      "Ideal for long-term goals and continued progress after the initial assessment.",
    features: [
      "Five one-hour lessons",
      "Long-term personalized plan",
      "Progressive homework",
      "Best overall value",
    ],
    buttonText: "Available After Assessment",
    bookableOnline: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#051030] px-6 py-24 text-white">
        <div className="relative z-10 mx-auto max-w-7xl">
          
          <p className="mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
            Services
          </p>
          <br></br>
          <h1 className="text-medium font-bold uppercase tracking-[0.22em] text-[#C2DCFF]">
            Personalized support for real life with your dog.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-7 text-[#D5D8D6] md:text-lg md:leading-8">
            Choose from private training, boarding, or a more immersive
            board-and-train experience.
          </p>
        </div>
      </section>

      <section
          id="training"
          className="scroll-mt-28 bg-[#f8f4ec] px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              Training
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black text-stone-950 md:text-5xl">
              Make training part of everyday life.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
              Training is built around your dog, your lifestyle, and the relationship
              you want to create together.
            </p>

            {/* Four-square overview */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {/* Beliefs */}
              <article className="rounded-3xl border border-[#d9cdbb] bg-[#EFE8DD] p-8 md:p-10">
                <p className="mt-4 text-3xl font-black text-stone-950">
                  My approach
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Training should work in real life.
                </h3>

                <div className="mt-8 space-y-6">
                  <TrainingPrinciple
                    title="Fun and Play"
                    description="Training should be engaging and rewarding for both you and your dog."
                  />

                  <TrainingPrinciple
                    title="Behavior"
                    description="I look beyond commands to understand the behavior and needs behind them."
                  />

                  <TrainingPrinciple
                    title="Collaboration"
                    description="Lasting progress comes from working together with your dog—not against them."
                  />
                </div>
              </article>

              {/* How it works */}
              <article className="rounded-3xl border border-stone-200 bg-white p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                  How it works
                </p>

                <h3 className="mt-4 text-3xl font-black text-stone-950">
                  A personalized plan from the beginning.
                </h3>

                <ol className="mt-8 space-y-6">
                  <TrainingStep
                    number="01"
                    title="Submit an Initial Inquiry"
                    description="Start by submitting an initial inquiry with some basic information about you, your dog, and what you'd like help with."
                  />

                  <TrainingStep
                    number="02"
                    title="Consultation Call"
                    description="We'll schedule a phone consultation to discuss your dog's needs, your training goals, and any questions you may have. This also gives us an opportunity to determine whether we're a good fit to work together."
                  />

                  <TrainingStep
                    number="03"
                    title="Confirm & Prepare"
                    description="After our consultation, I'll confirm whether we'll be moving forward together. If we decide to work together, I'll send you the appropriate intake form and Terms of Service to complete."
                  />

                  <TrainingStep
                    number="04"
                    title="Get Started"
                    description="Once the required forms are completed, we'll schedule your first training session and get started!"
                  />
                </ol>
              </article>

              {/* Photo */}
              <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-stone-200">
                <Image
                  src="/kiko.JPG"
                  alt="José working with a dog during a private training session"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 to-transparent p-8 pt-24 text-white">
                  <p className="text-2xl font-black">
                    Personalized guidance for you and your dog.
                  </p>
                </div>
              </div>

              {/* Pricing introduction */}
              <article className="flex flex-col justify-between rounded-3xl bg-[#EFE8DD] p-8 md:p-10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
                    Training options
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-stone-950">
                    Start with the initial assessment.
                  </h3>

                  <p className="mt-5 leading-7 text-stone-700">
                    Every new client begins with an initial assessment and first
                    lesson. Afterward, individual sessions can be scheduled directly
                    with José based on your training plan.
                  </p>

                  <div className="mt-8 rounded-2xl bg-white/70 p-5">
                    <p className="font-bold text-stone-950">
                      Initial Assessment + First Lesson
                    </p>

                    <p className="mt-2 text-4xl font-black text-amber-800">
                      $200
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact?service=assessment"
                  className="mt-8 inline-block w-fit rounded-full bg-[#4C6A58] px-6 py-3 font-semibold text-white transition hover:bg-[#365243]"
                >
                  Book Your Assessment
                </Link>
              </article>
            </div>

            {/* Training Pricing */}
            <div className="mt-20">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
                  Training Pricing
                </p>

                <h3 className="mt-4 text-4xl font-black text-stone-950">
                  Start here. Then build from there.
                </h3>

                <p className="mt-5 text-lg leading-8 text-stone-700">
                  Every new client begins with an initial assessment so I can get to
                  know you, your dog, and the goals you want to work toward.
                </p>
              </div>

              {/* Initial assessment */}
              <div className="mt-10 overflow-hidden rounded-3xl bg-stone-950 text-white">
                <div className="grid md:grid-cols-[1fr_auto] md:items-center">
                  <div className="p-8 md:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9B89F]">
                      Start Here
                    </p>

                    <h4 className="mt-3 text-3xl font-black">
                      Initial Training Package
                    </h4>

                    <p className="mt-4 max-w-2xl leading-7 text-stone-300">
                      Your first step includes an initial meet & greet and assessment,
                      followed by a one-hour training session.
                    </p>

                    <div className="mt-7 grid gap-3 text-sm text-stone-200 sm:grid-cols-2">
                      <p>✓ 1-hour meet & greet and assessment</p>
                      <p>✓ Discussion of your training goals</p>
                      <p>✓ Individual assessment of your dog</p>
                      <p>✓ 1-hour follow-up training session</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-700 p-8 md:min-w-[260px] md:border-l md:border-t-0 md:p-10">
                    <p className="text-sm text-stone-400">
                      Initial investment
                    </p>

                    <p className="mt-2 text-5xl font-black">
                      $200
                    </p>

                    <Link
                      href="/contact?service=assessment"
                      className="mt-7 inline-block rounded-full bg-[#4C6A58] px-6 py-3 font-semibold text-white transition hover:bg-[#365243]"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              {/* Continuing training */}
              <div className="mt-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
                  After Your Initial Package
                </p>

                <h4 className="mt-3 text-2xl font-black text-stone-950">
                  Continue your training
                </h4>

                <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                  From there, choose the amount of continued support that works best
                  for you and your dog.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {/* Single */}
                  <div className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-stone-500">
                      Single Session
                    </p>

                    <div className="mt-4 flex items-end gap-2">
                      <p className="text-4xl font-black text-stone-950">$90</p>
                      <p className="pb-1 text-sm text-stone-500">/ session</p>
                    </div>

                    <p className="mt-5 leading-7 text-stone-600">
                      A one-hour training session focused on your current goals and
                      progress.
                    </p>
                  </div>

                  {/* 3 sessions */}
                  <div className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-stone-500">
                      3 Sessions
                    </p>

                    <div className="mt-4 flex items-end gap-2">
                      <p className="text-4xl font-black text-stone-950">$240</p>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-[#4C6A58]">
                      $80 per session
                    </p>

                    <p className="mt-5 leading-7 text-stone-600">
                      Three one-hour sessions for continued practice, progress, and
                      guidance.
                    </p>
                  </div>

                  {/* 5 sessions */}
                  <div className="relative flex flex-col rounded-3xl border-2 border-[#4C6A58] bg-[#F3F6F1] p-7">
                    <span className="absolute right-5 top-5 rounded-full bg-[#4C6A58] px-3 py-1 text-xs font-bold text-white">
                      BEST VALUE
                    </span>

                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#4C6A58]">
                      5 Sessions
                    </p>

                    <div className="mt-4 flex items-end gap-2">
                      <p className="text-4xl font-black text-stone-950">$375</p>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-[#4C6A58]">
                      $75 per session
                    </p>

                    <p className="mt-5 leading-7 text-stone-600">
                      Five one-hour sessions for longer-term goals and continued
                      support.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-stone-500">
                  Training sessions and packages are available after completing the
                  initial training package.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="boarding"
          className="scroll-mt-28 bg-white px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            {/* Boarding heading */}
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-medium font-bold uppercase tracking-[0.22em] text-amber-700">
                  Boarding
                </p>

                <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-5xl">
                  A home away from home.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                  When your dog stays with me, they'll receive the same care,
                  attention, and patience I would give my own dog. My goal is to make
                  their stay comfortable, enjoyable, and tailored to their individual
                  needs.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                  Every dog is different, so I adjust their routine based on what they
                  enjoy and what helps them feel most comfortable.
                </p>
              </div>

              {/* Price card */}
              <div className="rounded-3xl bg-stone-950 p-8 text-white md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9B89F]">
                  Boarding
                </p>

                <div className="mt-6 border-b border-stone-700 pb-7">
                  <p className="text-stone-400">First dog</p>

                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-5xl font-black">$100</p>
                    <p className="pb-1 text-stone-400">per night</p>
                  </div>
                </div>

                <div className="py-7">
                  <p className="text-stone-400">
                    Additional dog from the same household
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-4xl font-black">$60</p>
                    <p className="pb-1 text-stone-400">per night</p>
                  </div>
                </div>

                <Link
                  href="/contact?service=boarding"
                  className="mt-4 inline-block rounded-full bg-[#4C6A58] px-7 py-3 font-semibold text-white transition hover:bg-[#365243]"
                >
                  Book Boarding
                </Link>
              </div>
            </div>

            {/* Typical day */}
            <div className="mt-20">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
                  During their stay
                </p>

                <h3 className="mt-4 text-3xl font-black text-stone-950 md:text-4xl">
                  A day built around your dog.
                </h3>

                <p className="mt-5 text-lg leading-8 text-stone-700">
                  A typical day provides plenty of opportunities for exercise,
                  enrichment, rest, and attention.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <BoardingRoutine
                  icon="🌅"
                  title="Morning Walk"
                  description="An early morning walk to start the day."
                />

                <BoardingRoutine
                  icon="🍽️"
                  title="Breakfast"
                  description="Your dog's regular food and normal feeding routine."
                />

                <BoardingRoutine
                  icon="🐾"
                  title="Lunchtime Walk"
                  description="A midday break for movement, sniffing, and fresh air."
                />

                <BoardingRoutine
                  icon="🌳"
                  title="Longer Walk"
                  description="A longer afternoon or evening walk tailored to your dog."
                />

                <BoardingRoutine
                  icon="🍽️"
                  title="Dinner"
                  description="Dinner following the feeding routine you provide."
                />

                <BoardingRoutine
                  icon="🧸"
                  title="Play + Downtime"
                  description="Plenty of play, individual attention, enrichment, and rest."
                />
              </div>
            </div>

            {/* Personalized care + updates */}
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl bg-[#f8f4ec] p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
                  Personalized care
                </p>

                <h3 className="mt-4 text-3xl font-black text-stone-950">
                  Their stay should feel like their stay.
                </h3>

                <p className="mt-5 leading-7 text-stone-700">
                  That might mean slow walks with plenty of time to sniff, a trip to
                  the park to run around, socializing with other dogs, or relaxing at
                  home with their favorite toys.
                </p>

                <p className="mt-5 leading-7 text-stone-700">
                  I adjust the routine based on your dog's personality,
                  preferences, energy level, and what helps them feel comfortable.
                </p>
              </article>

              <article className="rounded-3xl bg-[#EFE8DD] p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
                  Daily updates
                </p>

                <h3 className="mt-4 text-3xl font-black text-stone-950">
                  You won't be left wondering how they're doing.
                </h3>

                <p className="mt-5 leading-7 text-stone-700">
                  While your dog is staying with me, I'll send you a daily update
                  along with pictures so you can see how they're doing and get a
                  glimpse into their day.
                </p>

                <p className="mt-5 leading-7 text-stone-700">
                  My goal is to give you peace of mind while you're away and let
                  you know that your dog is happy, comfortable, and well cared for.
                </p>

                <p className="mt-6 text-xl font-black text-[#4C6A58]">
                  I want your dog to feel like they're on their own little
                  vacation while you're away.
                </p>
              </article>
            </div>

            {/* Requirements */}
            <div className="mt-10 rounded-3xl border border-stone-200 p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Boarding Requirements
              </p>

              <h3 className="mt-4 text-2xl font-black text-stone-950">
                Before your dog's stay
              </h3>

              <ul className="mt-6 space-y-4 text-stone-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#4C6A58]">✓</span>
                  <span>Dogs must be house trained.</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#4C6A58]">✓</span>
                  <span>
                    Dogs may spend approximately 4–5 hours home alone during the day,
                    depending on the individual dog and their needs.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-[#4C6A58]">✓</span>
                  <span>
                    Please provide enough of your dog's regular food for their
                    entire stay so I can keep them on their normal diet and routine.
                  </span>
                </li>
              </ul>

              <Link
                href="/contact?service=boarding"
                className="mt-8 inline-block rounded-full bg-[#4C6A58] px-7 py-3 font-semibold text-white transition hover:bg-[#365243]"
              >
                Book Boarding
              </Link>
            </div>
          </div>
        </section>

        <section
          id="board-and-train"
          className="scroll-mt-28 bg-[#EFE8DD] px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-800">
                  Board & Train
                </p>

                <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-5xl">
                  Training built into everyday life.
                </h2>

                <p className="mt-6 text-lg leading-8 text-stone-800">
                  Board & Train combines personalized training with the comfort of
                  staying in my home. While your dog is with me, I'll work with
                  them throughout the day to begin building the behaviors and skills
                  you want to see.
                </p>

                <p className="mt-5 text-lg leading-8 text-stone-800">
                  There is no minimum stay, although I recommend a stay of{" "}
                  <strong>at least 5 nights</strong> to give your dog enough time to
                  settle in, build a routine, and make meaningful progress.
                </p>
              </div>

              {/* Price card */}
              <div className="rounded-3xl bg-stone-950 p-8 text-white md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9B89F]">
                  Board & Train
                </p>

                <div className="mt-5 flex items-end gap-2">
                  <p className="text-5xl font-black">$160</p>
                  <p className="pb-1 text-stone-400">per night</p>
                </div>

                <div className="mt-7 border-t border-stone-700 pt-7">
                  <p className="font-semibold text-white">
                    Your stay includes:
                  </p>

                  <ul className="mt-5 space-y-3 text-stone-300">
                    <li>✓ Personalized daily training</li>
                    <li>✓ In-home boarding and enrichment</li>
                    <li>✓ Daily progress updates</li>
                    <li>✓ Personalized one-on-one care</li>
                    <li>✓ One follow-up training session</li>
                    <li>✓ Homework to continue progress at home</li>
                  </ul>
                </div>

                <Link
                  href="/contact?service=board-and-train"
                  className="mt-8 inline-block rounded-full bg-[#4C6A58] px-7 py-3 font-semibold text-white transition hover:bg-[#365243]"
                >
                  Inquire About Board & Train
                </Link>
              </div>
            </div>

            {/* What we can work on */}
            <div className="mt-20">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-800">
                Training goals
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-black text-stone-950 md:text-4xl">
                What can we work on?
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                Your dog's training plan is based on their individual needs and
                the goals we discuss together.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <TrainingGoal title="Impulse control" />
                <TrainingGoal title="Leash manners & walking skills" />
                <TrainingGoal title="Reactivity toward people or dogs" />
                <TrainingGoal title="Confidence in new situations" />
                <TrainingGoal title="General manners" />
                <TrainingGoal title="Everyday behaviors" />
              </div>
            </div>

            {/* Why board and train */}
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl bg-white p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
                  Real-life training
                </p>

                <h3 className="mt-4 text-3xl font-black text-stone-950">
                  Training doesn't stop when the lesson ends.
                </h3>

                <p className="mt-5 leading-7 text-stone-700">
                  One of the benefits of Board & Train is that training doesn't
                  only happen during a scheduled lesson. There are opportunities
                  throughout the day to practice and reinforce behaviors naturally.
                </p>

                <p className="mt-5 leading-7 text-stone-700">
                  This allows your dog to learn in real-life situations and build those
                  skills as part of their everyday routine.
                </p>
              </article>

              <article className="rounded-3xl bg-[#4C6A58] p-8 text-white md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E4EBE1]">
                  Personalized One-on-One Care
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Your dog gets my full attention.
                </h3>

                <p className="mt-5 leading-7 text-[#F2F5F1]">
                  When your dog is with me for Board & Train,{" "}
                  <strong>they will be the only dog boarding with me during their stay.</strong>
                </p>

                <p className="mt-5 leading-7 text-[#F2F5F1]">
                  This allows me to give your dog my full attention and create a
                  training plan based specifically on their needs.
                </p>
              </article>
            </div>

            {/* Follow up */}
            <div className="mt-10 rounded-3xl bg-white p-8 md:p-10">
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                    Follow-Up Session
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-stone-950">
                    The work continues when your dog comes home.
                  </h3>
                </div>

                <div className="space-y-5 leading-7 text-stone-700">
                  <p>
                    When the Board & Train is complete, we'll have a session when
                    I return your dog. During this session, I'll go over the
                    exercises and techniques we worked on and show you how to continue
                    practicing them at home.
                  </p>

                  <p>
                    I'll also provide you with a{" "}
                    <strong>homework assignment</strong> to help continue building the
                    behaviors we worked on.
                  </p>

                  <p>
                    From there, I'll follow up with you at a later date to see how
                    things are progressing and help make adjustments if needed.
                  </p>

                  <p className="font-semibold text-stone-950">
                    The goal isn't for your dog to simply behave differently while
                    they're with me. It's to give you the tools and
                    understanding to continue that progress together once they're
                    back home.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact?service=board-and-train"
                className="inline-block rounded-full bg-[#4C6A58] px-8 py-4 font-semibold text-white transition hover:bg-[#365243]"
              >
                Inquire About Board & Train
              </Link>
            </div>
          </div>
        </section>


    </>
  );
}

type TrainingPrincipleProps = {
  title: string;
  description: string;
};

function TrainingPrinciple({
  title,
  description,
}: TrainingPrincipleProps) {
  return (
    <div className="border-t border-stone-300 pt-5">
      <h4 className="text-xl font-black text-[#4C6A58]">{title}</h4>

      <p className="mt-2 leading-7 text-stone-700">{description}</p>
    </div>
  );
}

type TrainingStepProps = {
  number: string;
  title: string;
  description: string;
};

function TrainingStep({
  number,
  title,
  description,
}: TrainingStepProps) {
  return (
    <li className="flex gap-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4C6A58] text-sm font-bold text-white">
        {number}
      </span>

      <div>
        <h4 className="text-lg font-black text-stone-950">{title}</h4>

        <p className="mt-2 leading-7 text-stone-600">{description}</p>
      </div>
    </li>
  );
}

type BoardingRoutineProps = {
  icon: string;
  title: string;
  description: string;
};

function BoardingRoutine({
  icon,
  title,
  description,
}: BoardingRoutineProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-[#f8f4ec] p-6">
      <span className="text-3xl" aria-hidden>
        {icon}
      </span>

      <h4 className="mt-4 text-xl font-black text-stone-950">
        {title}
      </h4>

      <p className="mt-2 leading-7 text-stone-600">
        {description}
      </p>
    </div>
  );
}

function TrainingGoal({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4C6A58] font-bold text-white">
        ✓
      </span>

      <p className="font-semibold text-stone-950">
        {title}
      </p>
    </div>
  );
}

type PricingRowProps = {
  service: string;
  price: string;
  last?: boolean;
};