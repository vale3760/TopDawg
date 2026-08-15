import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Availability",
  description:
    "Check boarding, board-and-train, and private training availability.",
};

export default function AvailabilityPage() {
  return (
    <>
      {/* HERO + BOOKING AREA */}
      <section className="relative min-h-[1400px] overflow-hidden bg-[#2A2F36]">

      {/* MIA */}
        <img
          src="/miaP2.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />

        {/* Darker LEFT, clearer RIGHT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2230]/75 via-[#1B2230]/25 to-transparent" />

        <div className="relative z-10">

          {/* HEADING */}
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-24 md:px-8">
            <div className="max-w-2xl">
              <p className="text-lg font-bold uppercase tracking-[0.22em] text-[#C2DCFF]">
                Availability
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Find the right dates
                <br />
                for your dog.
              </h1>

              <p className="mt-6 text-lg text-white/90">
                Check availability for boarding and overnight care.
              </p>
            </div>
          </div>

          {/* BOOKING */}
          <BookingCalendar />

        </div>
      </section>
    </>
  );
}