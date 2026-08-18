"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  DayPicker,
  type DateRange,
} from "react-day-picker";
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  format,
} from "date-fns";

import "react-day-picker/style.css";

type ServiceType =
  | "boarding"
  | "board-and-train";

type BoardingBooking = {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  numberOfDogs: number;
};

function normalizeDate(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
}

function parseLocalDate(dateString: string) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  return new Date(
    year,
    month - 1,
    day,
  );
}

function sameDay(
  first: Date,
  second: Date,
) {
  return (
    first.getFullYear() ===
      second.getFullYear() &&
    first.getMonth() ===
      second.getMonth() &&
    first.getDate() ===
      second.getDate()
  );
}

export default function BookingCalendar() {
  const [service, setService] =
    useState<ServiceType>("boarding");

  const [boardingRange, setBoardingRange] =
    useState<DateRange>();

  const [boardingBookings, setBoardingBookings] =
    useState<BoardingBooking[]>([]);

  const [availabilityLoading, setAvailabilityLoading] =
    useState(true);

  const [availabilityError, setAvailabilityError] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const today = useMemo(
    () => normalizeDate(new Date()),
    [],
  );

  const selectedNights = useMemo(() => {
    if (
      !boardingRange?.from ||
      !boardingRange.to
    ) {
      return 0;
    }

    return differenceInCalendarDays(
      boardingRange.to,
      boardingRange.from,
    );
  }, [boardingRange]);

  /* ------------------------------
     LOAD GOOGLE CALENDAR
  ------------------------------ */

  useEffect(() => {
    async function loadBookings() {
      try {
        setAvailabilityLoading(true);
        setAvailabilityError(false);

        const response = await fetch(
          "/api/calendar/availability",
          {
            cache: "no-store",
          },
        );

        const rawText =
          await response.text();

        if (!response.ok) {
          console.error(
            "Availability API failed:",
            response.status,
            response.statusText,
            rawText,
          );

          setAvailabilityError(true);
          return;
        }

        const data =
          JSON.parse(rawText);

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

              startDate:
                parseLocalDate(
                  booking.startDate,
                ),

              endDate:
                parseLocalDate(
                  booking.endDate,
                ),
            }),
          ),
        );
      } catch (error) {
        console.error(
          "Failed to load availability:",
          error,
        );

        setAvailabilityError(true);
      } finally {
        setAvailabilityLoading(false);
      }
    }

    void loadBookings();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ------------------------------
     ALL DATES WE SHOW
  ------------------------------ */

  const calendarDates = useMemo(() => {
    return eachDayOfInterval({
      start: today,

      end: new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        today.getDate(),
      ),
    });
  }, [today]);

  /* ------------------------------
     AVAILABLE DATES
  ------------------------------ */

  const availableDates = useMemo(() => {
    const dates: Date[] = [];

    boardingBookings.forEach(
      (booking) => {
        if (
          booking.name
            .trim()
            .toLowerCase() !==
          "available"
        ) {
          return;
        }

        const current =
          new Date(
            booking.startDate,
          );

        while (
          current <
          booking.endDate
        ) {
          dates.push(
            new Date(current),
          );

          current.setDate(
            current.getDate() + 1,
          );
        }
      },
    );

    return dates;
  }, [boardingBookings]);

  /* ------------------------------
     EVERYTHING ELSE = UNAVAILABLE
  ------------------------------ */

  const unavailableDates =
    useMemo(() => {
      return calendarDates.filter(
        (date) =>
          !availableDates.some(
            (availableDate) =>
              sameDay(
                date,
                availableDate,
              ),
          ),
      );
    }, [
      calendarDates,
      availableDates,
    ]);

  /* ------------------------------
     CONTACT URL
  ------------------------------ */

  const contactUrl =
    useMemo(() => {
      const params =
        new URLSearchParams();

      params.set(
        "service",
        service,
      );

      if (
        boardingRange?.from &&
        boardingRange.to
      ) {
        params.set(
          "startDate",
          format(
            boardingRange.from,
            "yyyy-MM-dd",
          ),
        );

        params.set(
          "endDate",
          format(
            boardingRange.to,
            "yyyy-MM-dd",
          ),
        );
      }

      return `/contact?${params.toString()}`;
    }, [
      service,
      boardingRange,
    ]);

  const canContinue =
    Boolean(
      boardingRange?.from &&
        boardingRange.to &&
        selectedNights > 0,
    );

  function changeService(
    nextService: ServiceType,
  ) {
    setService(nextService);

    setBoardingRange(
      undefined,
    );
  }

  return (
    <section className="bg-transparent px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,760px)_280px] lg:items-start">

          {/* LEFT */}
          <div className="min-w-0 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:rounded-3xl sm:p-8">

            {/* STEP 1 */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
                Step 1
              </p>

              <h2 className="mt-2 text-2xl font-black text-stone-950 sm:text-3xl">
                Choose a service
              </h2>

              <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                <ServiceButton
                  title="Boarding"
                  description={
                    <>
                      <span className="block">$100 per night</span>

                      <span className="mt-1 block text-xs opacity-80">
                        Holiday: $120 per night
                      </span>

                      <span className="block text-sm">
                        +1 dog: $60 per night
                      </span>
                    </>
                  }
                  selected={service === "boarding"}
                  onClick={() => changeService("boarding")}
                />

                <ServiceButton
                  title="Board & Train"
                  description="$160 per night"
                  selected={
                    service ===
                    "board-and-train"
                  }
                  onClick={() =>
                    changeService(
                      "board-and-train",
                    )
                  }
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

              {availabilityLoading && (
                <p className="mt-5 text-sm text-stone-500">
                  Loading availability...
                </p>
              )}

              {availabilityError && (
                <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                  Availability could not be loaded right now.
                  Please try again.
                </div>
              )}

              <div className="calendar-wrapper mt-6 w-full overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 sm:p-4 md:p-8">
                {mounted ? (
                  <DayPicker
                    mode="range"

                    selected={
                      boardingRange
                    }

                    onSelect={
                      setBoardingRange
                    }

                    disabled={[
                      {
                        before:
                          today,
                      },

                      ...unavailableDates,
                    ]}

                    excludeDisabled
                    min={1}
                    showOutsideDays

                    modifiers={{
                      available:
                        availableDates,

                      unavailable:
                        unavailableDates,
                    }}

                    modifiersClassNames={{
                      available:
                        "!bg-green-100 !text-green-800 !font-bold rounded-full",

                      unavailable:
                        "!bg-red-100 !text-red-700 !font-bold rounded-full cursor-not-allowed",

                      selected:
                        "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#051030] rounded-full",

                      range_start:
                        "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#051030] rounded-full",

                      range_middle:
                        "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#051030] rounded-full",

                      range_end:
                        "!bg-transparent !text-stone-950 !ring-2 !ring-inset !ring-[#051030] rounded-full",
                    }}
                  />
                ) : (
                  <div className="h-[500px]" />
                )}
              </div>

              {/* LEGEND */}
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-600">

                <CalendarLegend
                  label="Available"
                  styleType="available"
                />

                <CalendarLegend
                  label="Unavailable"
                  styleType="unavailable"
                />

                <CalendarLegend
                  label="Selected"
                  styleType="selected"
                />

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="rounded-3xl bg-stone-950 p-6 text-white shadow-xl lg:sticky lg:top-28">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              Your Selection
            </p>

            <h3 className="mt-2 text-lg font-black">
              {getServiceTitle(
                service,
              )}
            </h3>

            {boardingRange?.from ? (
              <div className="mt-5 space-y-3">

                <div>
                  <p className="text-xs text-stone-400">
                    Drop-off
                  </p>

                  <p className="font-bold">
                    {format(
                      boardingRange.from,
                      "MMM d, yyyy",
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-stone-400">
                    Pick-up
                  </p>

                  <p className="font-bold">
                    {boardingRange.to
                      ? format(
                          boardingRange.to,
                          "MMM d, yyyy",
                        )
                      : "Select pick-up date"}
                  </p>
                </div>

                {boardingRange.to &&
                  selectedNights >
                    0 && (
                    <div>
                      <p className="text-xs text-stone-400">
                        Stay
                      </p>

                      <p className="font-bold">
                        {
                          selectedNights
                        }{" "}
                        {selectedNights ===
                        1
                          ? "night"
                          : "nights"}
                      </p>
                    </div>
                  )}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-stone-400">
                Select your
                drop-off and
                pick-up dates.
              </p>
            )}

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
  description: React.ReactNode;
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
      <span className="block text-lg font-black">
        {title}
      </span>

      <span
      className={`mt-2 block ${
        selected
          ? "text-stone-300"
          : "text-stone-500"
      }`}
    >
      {description}
    </span>
    </button>
  );
}

function CalendarLegend({
  label,
  styleType,
}: {
  label: string;

  styleType:
    | "available"
    | "unavailable"
    | "selected";
}) {
  const styles = {
    available:
      "bg-green-100 border border-green-300",

    unavailable:
      "bg-red-100 border border-red-300",

    selected:
      "bg-white border-2 border-[#051030]",
  };

  return (
    <span className="flex items-center gap-2">
      <span
        className={`h-4 w-4 rounded-full ${styles[styleType]}`}
      />

      <span>{label}</span>
    </span>
  );
}

function getServiceTitle(
  service: ServiceType,
) {
  switch (service) {
    case "boarding":
      return "Boarding";

    case "board-and-train":
      return "Board & Train";
  }
}