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
        .map((event) => ({
            id: event.id,
            name: event.summary ?? "Unnamed booking",
            startDate: event.start!.date!,
            endDate: event.end!.date!,
            numberOfDogs: parseDogCount(event.description),
            }))

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

  const match = description.match(/dogs?\s*:\s*(\d+)/i);

  if (!match) {
    return 1;
  }

  return Number(match[1]);
}