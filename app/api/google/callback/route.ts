import { NextRequest, NextResponse } from "next/server";

import { oauth2Client } from "@/lib/google/oauth";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get("code");
    const oauthError = request.nextUrl.searchParams.get("error");

    if (oauthError) {
      return NextResponse.json(
        {
          error: `Google authorization failed: ${oauthError}`,
        },
        {
          status: 400,
        },
      );
    }

    if (!code) {
      return NextResponse.json(
        {
          error: "Google did not return an authorization code.",
        },
        {
          status: 400,
        },
      );
    }

    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.refresh_token) {
      return NextResponse.json(
        {
          error:
            "Google did not return a refresh token. Revoke the app's access in your Google account and connect again.",
        },
        {
          status: 400,
        },
      );
    }

    const { error: databaseError } = await supabaseAdmin
      .from("google_connections")
      .upsert(
        {
          provider: "google",
          access_token: tokens.access_token ?? null,
          refresh_token: tokens.refresh_token,
          token_expiry: tokens.expiry_date
            ? new Date(tokens.expiry_date).toISOString()
            : null,
          scope: tokens.scope ?? null,
          token_type: tokens.token_type ?? null,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "provider",
        },
      );

    if (databaseError) {
      throw new Error(
        `Could not save Google connection: ${databaseError.message}`,
      );
    }

    return NextResponse.redirect(
      new URL("/?googleCalendar=connected", request.url),
    );
  } catch (error) {
    console.error("Google OAuth callback failed:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unknown Google authorization error.";

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