import type { Metadata } from "next";
import BookingCalendar from "../../components/BookingCalendar";

export const metadata: Metadata = {
  title: "Availability",
  description:
    "Check boarding, board-and-train, and private training availability.",
};

type AvailabilityPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export default async function AvailabilityPage({
  searchParams,
}: AvailabilityPageProps) {
  const params = await searchParams;

const initialService: "boarding" | "board-and-train" =
  params.service === "board-and-train"
    ? "board-and-train"
    : "boarding";
  return (
    <>
      {/* HERO + BOOKING AREA */}
      <section className="relative min-h-screen overflow-hidden bg-[#2A2F36]">

        {/* MIA BACKGROUND */}
        <img
          src="/miaP2.png"
          alt=""
          aria-hidden
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-[115%]
            -translate-x-1/2
            object-cover
            object-[62%_top]

            sm:w-[108%]
            sm:object-[58%_top]

            lg:left-0
            lg:w-full
            lg:translate-x-0
            lg:object-[center_35%]
          "
        />

        {/* MOBILE OVERLAY */}
        <div className="absolute inset-0 bg-black/25 lg:hidden" />

        {/* DESKTOP GRADIENT */}
        <div
          className="
            absolute inset-0
            hidden
            bg-gradient-to-r
            from-[#1B2230]/75
            via-[#1B2230]/25
            to-transparent
            lg:block
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* HEADING */}
          <div
            className="
              mx-auto
              max-w-7xl
              px-5
              pb-6
              pt-14
              sm:px-6
              sm:pb-8
              sm:pt-20
              md:px-8
              md:pt-24
            "
          >
            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2DCFF] sm:text-base sm:tracking-[0.22em] md:text-lg">
                Availability
              </p>

              <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:mt-5 md:text-6xl">
                Find the right dates
                <br />
                for your dog.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:mt-6 sm:text-lg">
                Check availability for boarding and overnight care.
              </p>

            </div>
          </div>

          {/* BOOKING CALENDAR */}
          <BookingCalendar initialService={initialService}/>

        </div>
      </section>
    </>
  );
}