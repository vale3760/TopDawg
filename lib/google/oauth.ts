// lib/google/oauth.ts
import "server-only";

import { google } from "googleapis";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = process.env.GOOGLE_REDIRECT_URI;

if (!clientId || !clientSecret || !redirectUri) {
  throw new Error("Missing Google OAuth environment variables");
}

export const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri,
);