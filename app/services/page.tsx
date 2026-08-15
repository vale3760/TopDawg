import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Private dog training, boarding, and board-and-train services.",
};
export default function ServicesPage() {
  return (
    <>
    <section className="relative min-h-[560px] overflow-hidden">
      <Image
        src="/LunaMoose.jpeg"
        alt="Top Dawg Pet Care services"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center]"
      />

      {/* Slight overall darkening */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Dark glow ONLY around center content */}
      <div className="absolute inset-y-0 left-[30%] w-[45%] bg-gradient-to-r from-transparent via-black/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 md:px-8">

        <div className="mx-auto w-full max-w-[600px]">
          <p className="text-lg font-bold uppercase tracking-[0.25em] text-white">
            Services
          </p>

          <h1 className="mt-4 text-5xl font-black leading-[1.05] text-white md:text-6xl">
            Personalized support
            <br />
            for real life with
            <br />
            your dog.
          </h1>

          <p className="mt-6 max-w-lg text-lg font-medium leading-8 text-white">
            Choose from private training, boarding, or a more immersive
            board-and-train experience.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#training"
              className="rounded-full bg-[#051030] px-7 py-3 font-semibold !text-white"
            >
              Explore Training
            </Link>

            <Link
              href="#boarding"
              className="rounded-full border border-white/70 bg-black/20 px-7 py-3 font-semibold !text-white backdrop-blur-sm"
            >
              View Boarding
            </Link>
          </div>
        </div>

      </div>
    </section>

      {/* Choose Your Service */}
<section className="bg-[#faf8f3] px-6 py-20 md:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-lg font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        Choose Your Service
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#051030] md:text-5xl">
        Find the right support for your dog.
      </h2>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        Whether you're looking for private training, a comfortable place
        for your dog to stay, or a more immersive training experience,
        there's an option designed around your dog's needs.
      </p>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      <ServiceCard
        label="Training"
        title="Build skills together."
        price="Starts at $200"
        description="Personalized training focused on communication, trust, and the behaviors you want to build."
        href="#training"
        gradient="from-white via-[#F4F7FB] to-[#DCE8F7]"
      />

      <ServiceCard
        label="Boarding"
        title="A home away from home."
        price="$100 / night"
        description="In-home boarding with personalized care, daily updates, walks, play, and plenty of downtime."
        href="#boarding"
        gradient="from-white via-[#F8F6F2] to-[#E8E1D8]"
      />

      <ServiceCard
        label="Board & Train"
        title="Training built into everyday life."
        price="$160 / night"
        description="A one-on-one training stay where learning is incorporated naturally throughout your dog's day."
        href="#board-and-train"
        gradient="from-white via-[#F5F5F7] to-[#DDE2EA]"
      />
    </div>
  </div>
</section>

{/* Training */}
<section
  id="training"
  className="scroll-mt-28 bg-[#f8f4ec] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <p className="text-lg font-bold uppercase tracking-[0.18em] text-[#051030]">
      Training
    </p>

    <h2 className="mt-3 max-w-3xl text-4xl font-black text-stone-950 md:text-5xl">
      Make training part of everyday life.
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
      I don't believe getting the behaviors we want from our dogs requires
      stricter training or more control. I focus on creating an environment
      where your dog feels safe, comfortable, and motivated to learn.
    </p>

    {/* Training overview */}
    <div className="mt-14 grid gap-6 lg:grid-cols-2">
      <div className="relative min-h-[440px] overflow-hidden rounded-3xl">
        <HeroCarousel group="three"/>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24 text-white">
          <p className="text-2xl font-black">
            Personalized guidance for you and your dog.
          </p>
        </div>
      </div>

      <article className="rounded-3xl bg-[#EFE8DD] p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
          My Approach
        </p>

        <h3 className="mt-4 text-3xl font-black text-stone-950">
          Training should work in real life.
        </h3>

        <div className="mt-8 space-y-6">
          <TrainingPrinciple
            title="Fun + Play"
            description="Training should be engaging and rewarding for both you and your dog."
          />

          <TrainingPrinciple
            title="Understanding Behavior"
            description="I look beyond commands to understand the behavior and needs behind them."
          />

          <TrainingPrinciple
            title="Collaboration"
            description="Lasting progress comes from working together with your dog—not against them."
          />
        </div>
      </article>
    </div>

    {/* Training goals */}
    <div className="mt-20">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        Training Goals
      </p>

      <h3 className="mt-4 text-3xl font-black text-stone-950 md:text-4xl">
        What can we work on?
      </h3>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
        Your dog's training plan is based on their individual needs and the
        goals we discuss together.
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

    {/* How training works */}
    <div className="mt-20">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        How It Works
      </p>

      <h3 className="mt-4 text-3xl font-black text-stone-950 md:text-4xl">
        A personalized plan from the beginning.
      </h3>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProcessCard
          number="01"
          title="Initial Inquiry"
          description="Tell me about you, your dog, and what you'd like help with."
        />

        <ProcessCard
          number="02"
          title="Consultation"
          description="We'll talk through your dog's needs, your goals, and any questions."
        />

        <ProcessCard
          number="03"
          title="Confirm & Prepare"
          description="If we're a good fit, I'll send the intake form and Terms of Service."
        />

        <ProcessCard
          number="04"
          title="Get Started"
          description="We'll schedule your first training session and begin working together."
        />
      </div>
    </div>

    {/* Training pricing */}
    <div className="mt-20">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        Training Pricing
      </p>

      <h3 className="mt-4 text-4xl font-black text-stone-950">
        Start here. Then build from there.
      </h3>

      <div className="mt-10 overflow-hidden rounded-3xl bg-[#051030] text-white">
        <div className="grid md:grid-cols-[1fr_auto] md:items-center">
          <div className="p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2DCFF]">
              Initial Training Package
            </p>

            <h4 className="mt-3 text-3xl font-black">
              Assessment + Follow-Up Session
            </h4>

            <p className="mt-4 max-w-2xl leading-7 text-white/80">
              Every training relationship begins with an initial assessment
              so I can understand your goals, evaluate your dog's needs, and
              build a personalized approach.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <p>✓ 1-hour meet & greet and assessment</p>
              <p>✓ Discussion of training goals</p>
              <p>✓ Individual assessment of your dog</p>
              <p>✓ 1-hour follow-up training session</p>
            </div>
          </div>

          <div className="border-t border-white/20 p-8 md:min-w-[260px] md:border-l md:border-t-0 md:p-10">
            <p className="text-sm text-white/60">Initial investment</p>
            <p className="mt-2 text-5xl font-black">$200</p>

            <Link
              href="/contact?service=assessment"
              className="mt-7 inline-block rounded-full bg-[#C2DCFF] px-6 py-3 font-semibold !text-black transition hover:bg-[#051030]"
            >
              Book Training
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <PricingCard
          label="Single Session"
          price="$90"
          subtext="/ session"
          description="One hour focused on your current goals and progress."
        />

        <PricingCard
          label="3 Sessions"
          price="$240"
          subtext="$80 per session"
          description="Continued practice, progress, and guidance."
        />

        <PricingCard
          label="5 Sessions"
          price="$375"
          subtext="$75 per session"
          description="Best for longer-term goals and continued support."
          featured
        />
      </div>
    </div>
  </div>
</section>

{/* Boarding */}
<section
  id="boarding"
  className="scroll-mt-28 bg-white px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div>
        <p className="text-lg font-bold uppercase tracking-[0.18em] text-[#051030]">
          Boarding
        </p>

        <h2 className="mt-3 text-4xl font-black text-stone-950 md:text-5xl">
          A home away from home.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          When your dog stays with me, they'll receive the same care,
          attention, and patience I would give my own dog. My goal is to
          make their stay comfortable, enjoyable, and tailored to their
          individual needs.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
          Every dog is different, so I adjust their routine based on what
          they enjoy and what helps them feel most comfortable.
        </p>
      </div>

      <div className="rounded-3xl bg-[#051030] p-8 text-white md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2DCFF]">
          Boarding Pricing
        </p>

        {/* Regular Rate */}
        <div className="mt-6 border-b border-white/20 pb-7">
          <p className="text-white/60">First dog</p>

          <div className="mt-2 flex items-end gap-2">
            <p className="text-5xl font-black">$100</p>
            <p className="pb-1 text-white/60">per night</p>
          </div>
        </div>

        {/* Holiday Rate */}
        <div className="border-b border-white/20 py-7">
          <div className="flex items-center gap-3">
            <p className="text-white/60">Holiday rate</p>

            <span className="rounded-full bg-[#C2DCFF] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#051030]">
              Holidays
            </span>
          </div>

          <div className="mt-2 flex items-end gap-2">
            <p className="text-4xl font-black">$120</p>
            <p className="pb-1 text-white/60">per night</p>
          </div>
        </div>

        {/* Additional Dog */}
        <div className="py-7">
          <p className="text-white/60">
            Additional dog from the same household
          </p>

          <div className="mt-2 flex items-end gap-2">
            <p className="text-4xl font-black">$60</p>
            <p className="pb-1 text-white/60">per night</p>
          </div>

          <p className="mt-2 text-sm text-white/50">
            Same rate during holidays
          </p>
        </div>

        <Link
          href="/availability"
          className="mt-4 inline-block rounded-full bg-[#C2DCFF] px-7 py-3 font-semibold !text-black transition hover:bg-gray-100"
        >
          Check Availability
        </Link>
      </div>
    </div>

    {/* Typical day */}
    <div className="mt-20">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        During Their Stay
      </p>

      <h3 className="mt-4 text-3xl font-black text-stone-950 md:text-4xl">
        A day built around your dog.
      </h3>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BoardingRoutine icon="🌅" title="Morning Walk" description="An early morning walk to start the day." />
        <BoardingRoutine icon="🍽️" title="Breakfast" description="Their regular food and feeding routine." />
        <BoardingRoutine icon="🐾" title="Lunchtime Walk" description="A midday break for movement and fresh air." />
        <BoardingRoutine icon="🌳" title="Longer Walk" description="A longer afternoon or evening walk tailored to your dog." />
        <BoardingRoutine icon="🍽️" title="Dinner" description="Dinner following the routine you provide." />
        <BoardingRoutine icon="🧸" title="Play + Downtime" description="Play, attention, enrichment, and rest throughout the day." />
      </div>
    </div>

    {/* Care details */}
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <article className="rounded-3xl bg-[#f8f4ec] p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
          Personalized Care
        </p>

        <h3 className="mt-4 text-3xl font-black text-stone-950">
          Their stay should feel like their stay.
        </h3>

        <p className="mt-5 leading-7 text-stone-700">
          That might mean slow walks with plenty of time to sniff, a trip to
          the park, socializing with other dogs, or relaxing at home with
          their favorite toys.
        </p>
      </article>

      <article className="rounded-3xl bg-[#EFE8DD] p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
          Daily Updates
        </p>

        <h3 className="mt-4 text-3xl font-black text-stone-950">
          You won't be left wondering how they're doing.
        </h3>

        <p className="mt-5 leading-7 text-stone-700">
          I'll send you a daily update and pictures so you can see how your
          dog is doing and get a glimpse into their day.
        </p>

        <p className="mt-6 text-xl font-black text-[#4C6A58]">
          I want your dog to feel like they're on their own little vacation.
        </p>
      </article>
    </div>

    {/* Requirements */}
    <div className="mt-12 rounded-3xl border border-stone-200 p-8 md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
        Boarding Requirements
      </p>

      <h3 className="mt-4 text-2xl font-black text-stone-950">
        Before your dog's stay
      </h3>

      <ul className="mt-6 space-y-4 text-stone-700">
        <li className="flex gap-3">
          <span className="font-bold text-[#4C6A58]">✓</span>
          Dogs must be house trained.
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-[#4C6A58]">✓</span>
          Dogs may spend approximately 4–5 hours home alone during the day,
          depending on their needs.
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-[#4C6A58]">✓</span>
          Please provide enough regular food for the entire stay.
        </li>
      </ul>
    </div>

    {/* Boarding process */}
    <div className="mt-20">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        How Boarding Works
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProcessCard
          number="01"
          title="Initial Inquiry"
          description="Tell me about your dog and the dates you're interested in."
        />

        <ProcessCard
          number="02"
          title="Consultation"
          description="We'll talk through your dog's needs, routines, and your questions."
        />

        <ProcessCard
          number="03"
          title="Meet & Greet"
          description="We'll meet in person and make sure everyone feels comfortable."
        />

        <ProcessCard
          number="04"
          title="Confirm Stay"
          description="Once confirmed, I'll send the intake form and Terms of Service."
        />
      </div>

      <Link
        href="/availability"
        className="mt-10 inline-block rounded-full bg-[#C2DCFF] px-8 py-4 font-semibold text-black transition hover:bg-[#051030]"
      >
        Book Boarding
      </Link>
    </div>
  </div>
</section>

{/* Board & Train */}
<section
  id="board-and-train"
  className="scroll-mt-28 bg-[#EFE8DD] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div>
        <p className="text-lg font-bold uppercase tracking-[0.18em] text-[#051030]">
          Board & Train
        </p>

        <h2 className="mt-3 text-4xl font-black text-stone-950 md:text-5xl">
          Training built into everyday life.
        </h2>

        <p className="mt-6 text-lg leading-8 text-stone-800">
          Board & Train combines personalized training with the comfort of
          staying in my home. While your dog is with me, I'll work with them
          throughout the day to begin building the behaviors and skills you
          want to see.
        </p>

        <p className="mt-5 text-lg leading-8 text-stone-800">
          There is no minimum stay, although I recommend at least{" "}
          <strong>5 nights</strong> to give your dog time to settle in,
          build a routine, and make meaningful progress.
        </p>
      </div>

      <div className="rounded-3xl bg-[#051030] p-8 text-white md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2DCFF]">
          Board & Train
        </p>

        <div className="mt-5 flex items-end gap-2">
          <p className="text-5xl font-black">$160</p>
          <p className="pb-1 text-white/60">per night</p>
        </div>

        <ul className="mt-7 space-y-3 border-t border-white/20 pt-7 text-white/80">
          <li>✓ Personalized daily training</li>
          <li>✓ In-home boarding and enrichment</li>
          <li>✓ Daily progress updates</li>
          <li>✓ Your dog is the only boarding dog</li>
          <li>✓ One follow-up training session</li>
          <li>✓ Homework for continued progress</li>
        </ul>

        <Link
          href="/contact?service=board-and-train"
          className="mt-8 inline-block rounded-full bg-[#4C6A58] px-7 py-3 font-semibold text-white"
        >
          Inquire About Board & Train
        </Link>
      </div>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <article className="rounded-3xl bg-white p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
          Real-Life Training
        </p>

        <h3 className="mt-4 text-3xl font-black text-stone-950">
          Training doesn't stop when the lesson ends.
        </h3>

        <p className="mt-5 leading-7 text-stone-700">
          There are opportunities throughout the day to practice and
          reinforce behaviors naturally, helping your dog build skills in
          everyday situations.
        </p>
      </article>

      <article className="rounded-3xl bg-[#4C6A58] p-8 text-white md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
          Personalized One-on-One Care
        </p>

        <h3 className="mt-4 text-3xl font-black">
          Your dog gets my full attention.
        </h3>

        <p className="mt-5 leading-7 text-white/90">
          During Board & Train, your dog will be the only dog boarding with
          me so I can create a plan specifically around their needs.
        </p>
      </article>
    </div>

    <div className="mt-10 rounded-3xl bg-white p-8 md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4C6A58]">
        Follow-Up Session
      </p>

      <h3 className="mt-4 text-3xl font-black text-stone-950">
        The work continues when your dog comes home.
      </h3>

      <div className="mt-5 max-w-4xl space-y-5 leading-7 text-stone-700">
        <p>
          When the stay is complete, we'll have a session where I show you
          the exercises and techniques we worked on and how to continue
          practicing them at home.
        </p>

        <p>
          You'll also receive homework so you can keep building the behaviors
          we worked on together.
        </p>

        <p className="font-semibold text-stone-950">
          The goal isn't for your dog to only behave differently while
          they're with me. It's to give you the tools to continue that
          progress together at home.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Pricing At A Glance */}
<section className="bg-[#faf8f3] px-6 py-20 md:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4C6A58]">
        Pricing At A Glance
      </p>

      <h2 className="mt-4 text-4xl font-black text-[#051030] md:text-5xl">
        Simple pricing. Personalized care.
      </h2>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      <SummaryCard
        title="Training"
        lines={[
          "Initial Package — $200",
          "Single Session — $90",
          "3 Sessions — $240",
          "5 Sessions — $375",
        ]}
        href="/contact?service=assessment"
        button="Training Inquiry"
      />

      <SummaryCard
        title="Boarding"
        lines={[
          "$100 per night",
          "Additional dog — $60 per night",
        ]}
        href="/availability"
        button="Check Availability"
      />

      <SummaryCard
        title="Board & Train"
        lines={[
          "$160 per night",
          "Follow-up session included",
          "5+ nights recommended",
        ]}
        href="/contact?service=board-and-train"
        button="Learn More"
      />
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


function ServiceCard({
  label,
  title,
  price,
  description,
  href,
  gradient,
}: {
  label: string;
  title: string;
  price: string;
  description: string;
  href: string;
  gradient: string;
}) {
  return (
    <article
      className={`
        flex flex-col rounded-3xl
        border border-[#051030]/10
        bg-gradient-to-br ${gradient}
        p-8
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4C6A58]">
        {label}
      </p>

      <h3 className="mt-4 text-2xl font-black text-stone-950">
        {title}
      </h3>

      <p className="mt-4 text-3xl font-black text-[#051030]">
        {price}
      </p>

      <p className="mt-5 flex-1 leading-7 text-stone-600">
        {description}
      </p>

      <Link
        href={href}
        className="mt-7 inline-block w-fit rounded-full bg-[#051030] px-6 py-3 font-semibold !text-white transition hover:bg-[#0B1D4A]"
      >
        Learn More
      </Link>
    </article>
  );
}

function ProcessCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#051030] text-sm font-bold text-white">
        {number}
      </span>

      <h4 className="mt-5 text-xl font-black text-stone-950">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-stone-600">
        {description}
      </p>
    </div>
  );
}

function PricingCard({
  label,
  price,
  subtext,
  description,
  featured = false,
}: {
  label: string;
  price: string;
  subtext: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-7 ${
        featured
          ? "border-2 border-[#4C6A58] bg-[#F3F6F1]"
          : "border border-stone-200 bg-white"
      }`}
    >
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#4C6A58]">
        {label}
      </p>

      <p className="mt-4 text-4xl font-black text-stone-950">
        {price}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#4C6A58]">
        {subtext}
      </p>

      <p className="mt-5 leading-7 text-stone-600">
        {description}
      </p>
    </div>
  );
}

function SummaryCard({
  title,
  lines,
  href,
  button,
}: {
  title: string;
  lines: string[];
  href: string;
  button: string;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-stone-200 bg-white p-8">
      <h3 className="text-2xl font-black text-[#051030]">
        {title}
      </h3>

      <div className="mt-6 flex-1 space-y-3 text-stone-700">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <Link
        href={href}
        className="mt-8 inline-block w-fit rounded-full bg-[#C2DCFF] px-6 py-3 font-semibold text-white"
      >
        {button}
      </Link>
    </div>
  );
}

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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#051030] font-bold text-white">
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