"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  DayPicker,
  type DateRange,
} from "react-day-picker";
import { differenceInCalendarDays, eachDayOfInterval, format } from "date-fns";
import "react-day-picker/style.css";


type ServiceType = "boarding" | "board-and-train";

type BoardingBooking = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  numberOfDogs: number;
};

const BOARDING_CAPACITY = 2;

function normalizeDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function isDateDuringStay(
  date: Date,
  startDate: Date,
  endDate: Date,
) {
  const selectedDate = normalizeDate(date).getTime();
  const start = normalizeDate(startDate).getTime();
  const end = normalizeDate(endDate).getTime();

  // Checkout day does not count as an occupied night.
  return selectedDate >= start && selectedDate < end;
}

function parseLocalDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export default function BookingCalendar() {
  const [service, setService] = useState<ServiceType>("boarding");
  const [boardingRange, setBoardingRange] = useState<DateRange>();
  const [boardingBookings, setBoardingBookings] = useState<BoardingBooking[]>([]);

  const today = useMemo(() => normalizeDate(new Date()), []);

  const selectedNights = useMemo(() => {
    if (!boardingRange?.from || !boardingRange.to) {
      return 0;
    }

    return differenceInCalendarDays(
      boardingRange.to,
      boardingRange.from,
    );
  }, [boardingRange]);

  useEffect(() => {
  async function loadBookings() {
    try {
      const response = await fetch("/api/calendar/availability", {
        cache: "no-store",
      });

      const rawText = await response.text();

      console.log("Availability response:", {
        status: response.status,
        statusText: response.statusText,
        body: rawText,
      });

      if (!response.ok) {
        console.error("Availability API failed:", {
          status: response.status,
          statusText: response.statusText,
          body: rawText,
        });

        return;
      }

      const data = JSON.parse(rawText);

      setBoardingBookings(
        data.bookings.map(
          (booking: {
            id: string;
            name: string;
            startDate: string;
            endDate: string;
            numberOfDogs: number;
          }) => ({
            ...booking,
            startDate: parseLocalDate(booking.startDate),
            endDate: parseLocalDate(booking.endDate),
          }),
        ),
      );
    } catch (error) {
      console.error("Failed to load availability:", error);
    }
  }

  void loadBookings();
}, []);

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

function getDogsBookedForDate(date: Date) {
    return boardingBookings.reduce((total, booking) => {
      if (
        isDateDuringStay(
          date,
          booking.startDate,
          booking.endDate
        )
      ) {
        return total + booking.numberOfDogs;
      }

      return total;
    }, 0);
  }

  function getRemainingBoardingSpots(date: Date) {
    return Math.max(
      0,
      BOARDING_CAPACITY - getDogsBookedForDate(date)
    );
  }

  const calendarDates = useMemo(
  () =>
    eachDayOfInterval({
      start: today,
      end: new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        today.getDate(),
      ),
    }),
  [today],
);

  const oneSpotLeftDates = useMemo(
    () =>
      calendarDates.filter(
        (date) => getDogsBookedForDate(date) === 1,
      ),
    [calendarDates, boardingBookings],
  );

    const fullyBookedDates = useMemo(
      () =>
        calendarDates.filter(
          (date) =>
            getDogsBookedForDate(date) >= BOARDING_CAPACITY,
        ),
      [calendarDates, boardingBookings],
    );

  const minimumRemainingSpots = useMemo(() => {
    if (!boardingRange?.from || !boardingRange.to) {
      return undefined;
    }

    const nights = eachDayOfInterval({
      start: boardingRange.from,
      end: new Date(
        boardingRange.to.getFullYear(),
        boardingRange.to.getMonth(),
        boardingRange.to.getDate() - 1,
      ),
    });

    return Math.min(
      ...nights.map((date) => getRemainingBoardingSpots(date)),
    );
}, [boardingRange, boardingBookings]);

  const contactUrl = useMemo(() => {
  const params = new URLSearchParams();

  // Pass the selected service to the contact form
  params.set("service", service);

  if (boardingRange?.from && boardingRange.to) {
    params.set(
      "startDate",
      format(boardingRange.from, "yyyy-MM-dd")
    );

    params.set(
      "endDate",
      format(boardingRange.to, "yyyy-MM-dd")
    );
  }

  return `/contact?${params.toString()}`;
}, [service, boardingRange]);

  const canContinue =
    Boolean(
          boardingRange?.from &&
            boardingRange.to &&
            selectedNights > 0 &&
            minimumRemainingSpots !== undefined &&
            minimumRemainingSpots > 0,
        );

  function changeService(nextService: ServiceType) {
    setService(nextService);
    setBoardingRange(undefined);
  }
return (
  <section className="bg-transparent py-10">
    <div className="mx-auto w-[min(1100px,calc(100%-3rem))]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,760px)_280px] lg:items-start">

  {/* LEFT — CALENDAR */}
  <div className="rounded-3xl border border-white/40 bg-white/95 p-5 shadow-xl backdrop-blur-sm sm:p-8">

    {/* STEP 1 */}
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
        Step 1
      </p>

      <h2 className="mt-2 text-3xl font-black text-stone-950">
        Choose a service
      </h2>

      <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
        <ServiceButton
          title="Boarding"
          description="$100 per night"
          selected={service === "boarding"}
          onClick={() => changeService("boarding")}
        />

        <ServiceButton
          title="Board & Train"
          description="$160 per night"
          selected={service === "board-and-train"}
          onClick={() => changeService("board-and-train")}
        />
      </div>
    </div>

    {/* STEP 2 */}
    <div className="mt-12">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
        Step 2
      </p>

      <h2 className="mt-2 text-3xl font-black text-stone-950">
        Select drop-off and pick-up dates
      </h2>

      <div className="calendar-wrapper mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white p-4 sm:p-8">
        {mounted ? (
          <DayPicker
            mode="range"
            selected={boardingRange}
            onSelect={setBoardingRange}
            disabled={[
              { before: today },
              ...fullyBookedDates,
            ]}
            excludeDisabled
            min={1}
            showOutsideDays
            modifiers={{
              oneSpotLeft: oneSpotLeftDates,
              fullyBooked: fullyBookedDates,
            }}
            modifiersClassNames={{
              oneSpotLeft:
                "!bg-yellow-400 !text-stone-950 rounded-full",

              fullyBooked:
                "!bg-stone-200 !text-stone-400 !opacity-50 rounded-full cursor-not-allowed",

              selected:
                "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#4C6A58] rounded-full",

              range_start:
                "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#4C6A58] rounded-full",

              range_middle:
                "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#4C6A58] rounded-full",

              range_end:
                "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#4C6A58] rounded-full",
            }}
          />
        ) : (
          <div className="h-[500px]" />
        )}
      </div>

      {/* LEGEND */}
      <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-600">
        <CalendarLegend
          label="Open"
          styleType="open"
        />

        <CalendarLegend
          label="1 spot left"
          styleType="oneSpotLeft"
        />

        <CalendarLegend
          label="Fully booked"
          styleType="full"
        />
      </div>
    </div>
  </div>


  {/* RIGHT — SMALL SELECTION */}
  <aside className="rounded-3xl bg-stone-950 p-6 text-white shadow-xl lg:sticky lg:top-28">

    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
      Your Selection
    </p>

    <h3 className="mt-2 text-lg font-black">
      {getServiceTitle(service)}
    </h3>

    {boardingRange?.from ? (
      <div className="mt-5 space-y-3">

        {/* DROP OFF */}
        <div>
          <p className="text-xs text-stone-400">
            Drop-off
          </p>

          <p className="font-bold">
            {format(boardingRange.from, "MMM d, yyyy")}
          </p>
        </div>

        {/* PICK UP */}
        <div>
          <p className="text-xs text-stone-400">
            Pick-up
          </p>

          <p className="font-bold">
            {boardingRange.to
              ? format(boardingRange.to, "MMM d, yyyy")
              : "Select pick-up date"}
          </p>
        </div>

        {/* NIGHTS */}
        {boardingRange.to && selectedNights > 0 && (
          <div>
            <p className="text-xs text-stone-400">
              Stay
            </p>

            <p className="font-bold">
              {selectedNights}{" "}
              {selectedNights === 1
                ? "night"
                : "nights"}
            </p>
          </div>
        )}

      </div>
    ) : (
      <p className="mt-4 text-sm leading-6 text-stone-400">
        Select your drop-off and pick-up dates.
      </p>
    )}

    {/* CONTINUE */}
    {canContinue ? (
      <Link
        href={contactUrl}
        className="mt-6 block rounded-full bg-amber-300 px-4 py-3 text-center text-sm font-bold text-stone-950 transition hover:bg-amber-200"
      >
        Continue
      </Link>
    ) : (
      <button
        type="button"
        disabled
        className="mt-6 w-full cursor-not-allowed rounded-full bg-stone-800 px-4 py-3 text-sm font-bold text-stone-500"
      >
        Select dates
      </button>
    )}

    <p className="mt-4 text-xs leading-5 text-stone-500">
      Your reservation is not confirmed until approved.
    </p>

          </aside>
      </div>
    </div>
  </section>
);

  
}

type ServiceButtonProps = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

function ServiceButton({
  title,
  description,
  selected,
  onClick,
}: ServiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-2xl border p-5 text-left transition",
        selected
          ? "border-stone-950 bg-stone-950 text-white"
          : "border-stone-200 bg-white text-stone-950 hover:border-amber-500",
      ].join(" ")}
    >
      <span className="block text-lg font-black">{title}</span>
      <span
        className={`mt-2 block text-sm ${
          selected ? "text-stone-300" : "text-stone-500"
        }`}
      >
        {description}
      </span>
    </button>
  );
}

type BoardingSummaryProps = {
  range: DateRange | undefined;
  nights: number;
  remainingSpots: number | undefined;
  service: "boarding" | "board-and-train";
};

function BoardingSummary({
  range,
  nights,
  remainingSpots,
  service,
}: BoardingSummaryProps) {
  const nightlyPrice = service === "boarding" ? 100 : 160;

  if (!range?.from) {
    return (
      <p className="mt-6 leading-7 text-stone-400">
        Select your dogs drop-off and pick-up dates.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-5">
      <SummaryRow
        label="Drop-off"
        value={format(range.from, "MMM d, yyyy")}
      />

      <SummaryRow
        label="Pick-up"
        value={
          range.to ? format(range.to, "MMM d, yyyy") : "Select a date"
        }
      />

      {range.to && nights > 0 && (
        <>
          <SummaryRow
            label="Length"
            value={`${nights} ${nights === 1 ? "night" : "nights"}`}
          />

          <SummaryRow
            label="Estimated price"
            value={`$${nights * nightlyPrice}`}
          />

          <div className="rounded-2xl bg-stone-900 p-4">
            <p className="text-sm text-stone-400">
              Minimum availability during this stay
            </p>

            <p className="mt-2 text-2xl font-black text-amber-300">
              {remainingSpots ?? 0} of {BOARDING_CAPACITY} spots remaining
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4 border-b border-stone-800 pb-4">
      <span className="text-stone-400">{label}</span>
      <span className="text-right font-bold">{value}</span>
    </div>
  );
}

function CalendarLegend({
  label,
  styleType,
}: {
  label: string;
  styleType: "open" | "oneSpotLeft" | "full";
}) {
  const styles = {
    open: "border border-stone-300 bg-white",
    oneSpotLeft: "bg-yellow-400",
    full: "bg-stone-300 opacity-50",
  };

  return (
    <span className="flex items-center gap-2">
      <span
        className={`h-4 w-4 rounded ${styles[styleType]}`}
      />
      <span>{label}</span>
    </span>
  );
}

function getServiceTitle(service: ServiceType) {
  switch (service) {
    case "boarding":
      return "In-Home Boarding";
    case "board-and-train":
      return "Board & Train";
  }
}