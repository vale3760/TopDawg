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
      <section className="bg-stone-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
            Availability
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-5xl">
            Find the right dates for your dog.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Choose overnight care appointment.
          </p>
        </div>
      </section>

      <BookingCalendar />
    </>
  );
}