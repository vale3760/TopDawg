// lib/google/calendar.ts
import "server-only";

import { google } from "googleapis";

import { oauth2Client } from "@/lib/google/oauth";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function getGoogleCalendar() {
  const { data, error } = await supabaseAdmin
    .from("google_connections")
    .select("access_token, refresh_token, token_expiry")
    .eq("provider", "google")
    .single();

  if (error || !data?.refresh_token) {
    throw new Error("Google Calendar has not been connected");
  }

  oauth2Client.setCredentials({
    access_token: data.access_token ?? undefined,
    refresh_token: data.refresh_token,
    expiry_date: data.token_expiry
      ? new Date(data.token_expiry).getTime()
      : undefined,
  });

  return google.calendar({
    version: "v3",
    auth: oauth2Client,
  });
}