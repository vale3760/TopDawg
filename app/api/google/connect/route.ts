import { NextResponse } from "next/server";

import { oauth2Client } from "@/lib/google/oauth";

export async function GET() {
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    include_granted_scopes: true,
    scope: [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar.readonly",
    ],
  });

  return NextResponse.redirect(authorizationUrl);
}