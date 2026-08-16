import { NextResponse } from "next/server";
import { getGoogleCalendar } from "@/lib/google/calendar";

export const dynamic = "force-dynamic";

type AvailabilityBooking = {
  id: string | null | undefined;
  name: string;
  startDate: string;
  endDate: string;
  numberOfDogs: number;
};

const BOARDING_CAPACITY = 2;

export async function GET() {
  try {
    const calendar = await getGoogleCalendar();

    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!calendarId) {
      throw new Error("Missing GOOGLE_CALENDAR_ID");
    }

    const now = new Date();
    const oneYearFromNow = new Date(now);

    oneYearFromNow.setFullYear(now.getFullYear() + 1);

    const response = await calendar.events.list({
      calendarId,
      timeMin: now.toISOString(),
      timeMax: oneYearFromNow.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      maxResults: 2500,
    });

    const bookings: AvailabilityBooking[] =
      response.data.items
        ?.filter((event) => event.start?.date && event.end?.date)
        .map((event) => {
          const name =
            event.summary?.trim() || "Unnamed booking";

          const normalizedName = name.toLowerCase();

          const isAvailable =
            normalizedName === "available";

          const isUnavailable =
            normalizedName === "unavailable";

          return {
            id: event.id,
            name,
            startDate: event.start!.date!,
            endDate: event.end!.date!,

            // Available does not use capacity
            // Unavailable blocks all capacity
            numberOfDogs: isAvailable
              ? 0
              : isUnavailable
                ? BOARDING_CAPACITY
                : parseDogCount(event.description),
          };
        }) ?? [];

    return NextResponse.json({
      bookings,
    });
  } catch (error) {
    console.error("Availability lookup failed:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unknown calendar error";

    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 500,
      },
    );
  }
}

function parseDogCount(
  description: string | null | undefined,
): number {
  if (!description) {
    return 1;
  }

  const match = description.match(
    /dogs?\s*:\s*(\d+)/i,
  );

  if (!match) {
    return 1;
  }

  return Number(match[1]);
}