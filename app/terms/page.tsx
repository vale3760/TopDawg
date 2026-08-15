import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for boarding, training, and Board & Train services provided by Top Dawg Pet Care.",
};

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#071033] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xl font-bold uppercase tracking-[0.22em] text-[#C2DCFF]">
            Top Dawg Pet Care LLC
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 text-base text-white/70">
            Last Updated: August 14, 2026
          </p>
        </div>
      </section>

      {/* TERMS */}
      <main className="bg-[#f8f4ec] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* INTRO */}
          <p className="text-lg leading-8 text-stone-700">
            These Terms & Conditions apply to services provided by{" "}
            <strong className="font-bold text-stone-950">
              Top Dawg Pet Care
            </strong>
            , owned and operated by Jose Torres. By booking or using my
            services, you agree to the following terms.
          </p>

          <div className="mt-14 space-y-14">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                1. Services
              </h2>

              <p className="mt-4 text-lg leading-8 text-stone-700">
                Top Dawg Pet Care provides dog boarding, private training,
                behavior consulting, and Board & Train services. Specific
                pricing, scheduling, and service details will be discussed and
                agreed upon before booking.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                2. Your Dog&apos;s Health & Behavior
              </h2>

              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                <p>
                  You are responsible for providing accurate and complete
                  information about your dog, including their medical history,
                  medications, allergies, behavioral concerns, reactivity, bite
                  history, and any other information that may affect their care
                  or safety.
                </p>

                <p>
                  Dogs can behave unpredictably, and dog boarding and training
                  involve inherent risks, including injury, illness, bites,
                  scratches, escape, and property damage. By using my services,
                  you acknowledge these risks and agree to be honest about your
                  dog&apos;s needs and behavior.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                3. Veterinary Care & Emergencies
              </h2>

              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                <p>
                  Top Dawg Pet Care is not a veterinary service and does not
                  provide medical advice or treatment.
                </p>

                <p>
                  If your dog becomes sick or injured while in my care, I will
                  make reasonable efforts to contact you or your emergency
                  contact. If immediate veterinary attention is reasonably
                  necessary, you authorize me to seek appropriate veterinary
                  care for your dog.
                </p>

                <p>
                  You are responsible for veterinary, medication,
                  transportation, and other related expenses incurred on behalf
                  of your dog, subject to applicable law.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                4. Boarding
              </h2>

              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                <p>
                  For boarding services, owners are responsible for providing
                  enough of their dog&apos;s regular food for the entire stay,
                  along with any required medications and special care
                  instructions.
                </p>

                <p>
                  Dogs must meet the health, vaccination, and behavioral
                  requirements communicated before booking.
                </p>

                <p>
                  I reserve the right to decline or discontinue boarding if a
                  dog&apos;s health or behavior creates a safety concern that
                  cannot reasonably be managed within the service.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                5. Training & Board & Train
              </h2>

              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                <p>
                  Training is a collaborative process between the dog, owner,
                  and trainer. I will provide individualized guidance based on
                  your dog&apos;s needs, but{" "}
                  <strong className="font-bold text-stone-950">
                    specific behavioral results or timelines cannot be
                    guaranteed.
                  </strong>
                </p>

                <p>
                  For Board & Train, continued progress depends on the
                  owner&apos;s participation and practice after the dog returns
                  home.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                6. Payments, Cancellations & Scheduling
              </h2>

              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                <p>
                  Payment is due according to the terms provided at booking.
                  Cancellation and rescheduling policies may vary by service
                  and will be communicated before booking.
                </p>

                <p>
                  Top Dawg Pet Care reserves the right to refuse or discontinue
                  services when safety concerns arise or when a dog&apos;s needs
                  fall outside the scope of the service being provided.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                7. Client Responsibilities
              </h2>

              <p className="mt-4 text-lg leading-8 text-stone-700">
                By using my services, you agree to:
              </p>

              <ul className="mt-5 space-y-3 pl-6 text-lg leading-8 text-stone-700">
                <li className="list-disc">
                  Provide accurate information about your dog
                </li>

                <li className="list-disc">
                  Follow reasonable safety and care recommendations
                </li>

                <li className="list-disc">
                  Communicate any changes to your dog&apos;s health or behavior
                </li>

                <li className="list-disc">
                  Provide required food, medications, and supplies
                </li>

                <li className="list-disc">
                  Participate in training and follow recommended exercises when
                  applicable
                </li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                8. Photos & Videos
              </h2>

              <p className="mt-4 text-lg leading-8 text-stone-700">
                With your permission, I may photograph or record your dog
                during services for use on the Top Dawg Pet Care website,
                social media, or other promotional materials. You may decline
                this permission without affecting your ability to use my
                services.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                9. Liability
              </h2>

              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                <p>
                  You understand that working with dogs involves inherent
                  risks. To the fullest extent permitted by California law, you
                  accept the ordinary risks associated with boarding, training,
                  and caring for your dog.
                </p>

                <p>
                  Nothing in these Terms is intended to waive or limit any
                  liability that cannot legally be waived or limited under
                  California law.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-black text-[#071033]">
                10. Governing Law
              </h2>

              <p className="mt-4 text-lg leading-8 text-stone-700">
                These Terms are governed by the laws of the State of
                California, to the extent permitted by applicable law.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}