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
      <section className="bg-stone-950 px-6 py-24 text-white">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#66785A]">
            Services
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.02em] md:text-5xl">
            Personalized support for real life with your dog.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#D5D8D6] md:text-lg md:leading-8">
            Choose from private training, in-home boarding, or a more immersive
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
              Private Training
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
                  Josés approach
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
                    description="We look beyond commands to understand the behavior and needs behind them."
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
                    title="Assessment and meet-and-greet"
                    description="The process begins with an assessment of your dog, your routine, and your goals."
                  />

                  <TrainingStep
                    number="02"
                    title="Your first lesson"
                    description="José introduces the training methods and foundational exercises you will use together."
                  />

                  <TrainingStep
                    number="03"
                    title="One-hour follow-up sessions"
                    description="Additional lessons focus on progress, new challenges, and refining your technique."
                  />

                  <TrainingStep
                    number="04"
                    title="Practice at home"
                    description="You receive exercises and homework so training continues between lessons."
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

                <p className="mt-5 text-sm leading-6 text-stone-700">
                  Every new client begins with an Initial Assessment + First Lesson.
                  Afterward, José will help you choose the training plan that best fits your
                  goals, with all future sessions scheduled directly with him.
                </p>

                <Link
                  href="/contact?service=assessment"
                  className="mt-8 inline-block w-fit rounded-full bg-[#4C6A58] px-6 py-3 font-semibold text-white transition hover:bg-[#365243]"
                >
                  Book Your Assessment
                </Link>
              </article>
            </div>

            {/* Pricing cards */}
            <div className="mt-20">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
                  Pricing
                </p>

                <h3 className="mt-4 text-4xl font-black text-stone-950">
                  Choose the support that fits your goals.
                </h3>

                <p className="mt-5 text-lg leading-8 text-stone-700">
                  New clients must complete the initial assessment before booking an
                  individual follow-up session.
                </p>
              </div>

              <article className="rounded-3xl border border-stone-200 bg-white p-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                  Training Plans
                </p>

                <h3 className="mt-3 text-3xl font-black text-stone-950">
                  Start with the Initial Assessment
                </h3>

                <p className="mt-5 leading-7 text-stone-600">
                  Every new client begins with an Initial Assessment + First Lesson. During
                  this session, José will evaluate your dog's behavior, discuss your goals,
                  and create a personalized training plan.
                </p>

                <div className="mt-8 rounded-2xl bg-[#f8f4ec] p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-black text-stone-950">
                      Initial Assessment + First Lesson
                    </h4>

                    <span className="text-3xl font-black text-amber-700">$200</span>
                  </div>

                  <ul className="mt-6 space-y-3 text-stone-700">
                    <li>✓ Behavior and lifestyle assessment</li>
                    <li>✓ Goal setting</li>
                    <li>✓ Initial one-on-one lesson</li>
                    <li>✓ Personalized training recommendations</li>
                  </ul>
                </div>

                <div className="mt-8 rounded-3xl border border-[#ddd4c7] bg-[#fbf8f2] p-6 md:p-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4C6A58]">
                    Next Steps
                  </p>

                  <h4 className="mt-3 text-2xl font-black text-stone-950">
                    Continuing Your Training
                  </h4>

                  <p className="mt-4 leading-7 text-stone-600">
                    After your assessment, José will recommend the best path forward based on
                    your dogs progress, needs, and your training goals.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-stone-200 bg-white p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-stone-950">
                          Three-Lesson Package
                        </p>

                        <p className="mt-2 text-sm leading-6 text-stone-600">
                          Three one-hour lessons with a progressive training plan and
                          continued guidance.
                        </p>
                      </div>

                      <p className="shrink-0 text-2xl font-black text-[#4C6A58]">
                        $240
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-stone-200 bg-white p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-lg font-bold text-stone-950">
                            Five-Lesson Package
                          </p>

                          <span className="rounded-full bg-[#E7EEE8] px-3 py-1 text-xs font-bold text-[#4C6A58]">
                            Best Value
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-stone-600">
                          Five one-hour lessons for longer-term goals, progressive homework,
                          and continued support.
                        </p>
                      </div>

                      <p className="shrink-0 text-2xl font-black text-[#4C6A58]">
                        $375
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex gap-3 rounded-2xl bg-[#EFE8DD] p-4">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4C6A58] text-sm font-bold text-white"
                  >
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-stone-700">
                    Training packages are available after the Initial Assessment and are
                    scheduled directly with José.
                  </p>
                </div>
              </div>

                <Link
                  href="/contact?service=assessment"
                  className="mt-8 inline-block rounded-full bg-[#4C6A58] px-6 py-3 font-semibold text-white transition hover:bg-[#365243]"
                >
                  Book Your Initial Assessment
                </Link>
              </article>
            </div>
          </div>
        </section>

      <section id="boarding" className="scroll-mt-28 bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
              In-home boarding
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-4xl">
              Personalized care while you are away.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              Your dog’s stay is shaped around their unique needs and
              preferences. This may include open play, social time, individual
              attention, quiet space, or plenty of comfortable naps.
            </p>

            <p className="mt-5 text-stone-600">
              Boarding is subject to availability and compatibility.
            </p>
          </div>

          <div className="rounded-3xl bg-stone-950 p-8 text-white">
            <h3 className="text-2xl font-black">Boarding Pricing</h3>

            <div className="mt-8 border-b border-stone-700 pb-7">
              <p className="text-stone-400">First dog</p>
              <p className="mt-2 text-4xl font-black">$100/night</p>
            </div>

            <div className="py-7">
              <p className="text-stone-400">
                Additional dog from the same household
              </p>
              <p className="mt-2 text-4xl font-black">$60/night</p>
            </div>

            <Link
              href="/contact?service=boarding"
              className="mt-8 inline-block rounded-full bg-[#4C6A58] px-6 py-3 font-semibold text-white transition hover:bg-[#365243]"
            >
              Request Boarding
            </Link>
          </div>
        </div>
      </section>

      <section
        id="board-and-train"
        className="bg-[#EFE8DD] px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em]">
              Board and train
            </p>

            <h2 className="mt-4 text-4xl font-black text-stone-950 md:text-4xl">
              Daily structure, training, and personalized care.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-800">
              Board and train combines in-home boarding with focused daily
              training. Your dog receives personalized training, enrichment,
              exercise, and care throughout the stay.
            </p>
          </div>

          <div className="rounded-3xl bg-stone-950 p-8 text-white">
            <p className="text-stone-400">Board and train</p>

            <p className="mt-2 text-4xl font-black">$160/night</p>

            <ul className="mt-7 space-y-3 text-stone-300">
              <li>✓ Personalized daily training</li>
              <li>✓ Boarding and enrichment</li>
              <li>✓ Progress updates</li>
              <li>✓ One follow-up training session</li>
            </ul>

            <Link
              href="/contact?service=board-and-train"
              className="mt-8 inline-block rounded-full bg-[#4C6A58] px-6 py-3 font-semibold text-white transition hover:bg-[#365243]"
            >
              Ask About Board and Train
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