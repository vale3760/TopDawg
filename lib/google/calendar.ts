import "server-only";

import { google } from "googleapis";
import { oauth2Client } from "@/lib/google/oauth";

export function getGoogleCalendar() {
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!refreshToken) {
    throw new Error("Missing GOOGLE_REFRESH_TOKEN");
  }

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  return google.calendar({
    version: "v3",
    auth: oauth2Client,
  });
}