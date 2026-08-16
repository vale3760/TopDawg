import { NextRequest, NextResponse } from "next/server";
import { oauth2Client } from "@/lib/google/oauth";

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
            "Google did not return a refresh token. Revoke the app's access from your Google Account and reconnect.",
        },
        {
          status: 400,
        },
      );
    }

    // TEMPORARY — copy this value into .env.local
    console.log("GOOGLE REFRESH TOKEN:", tokens.refresh_token);

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