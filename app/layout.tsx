import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import "react-day-picker/style.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://topdawgpetcare.com"),

  title: {
    default: "Top Dawg Pet Care",
    template: "%s | Top Dawg Pet Care",
  },

  description:
    "Personalized dog boarding, private training, and behavior support.",

  openGraph: {
    title: "Top Dawg Pet Care",
    description:
      "Personalized dog boarding, private training, and behavior support.",
    url: "https://topdawgpetcare.com",
    siteName: "Top Dawg Pet Care",
    images: [
      {
        url: "/logoPreview.jpeg",
        width: 1200,
        height: 630,
        alt: "Top Dawg Pet Care",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Dawg Pet Care",
    description:
      "Personalized dog boarding, private training, and behavior support.",
    images: ["/topdawg-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}