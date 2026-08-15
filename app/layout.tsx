import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import "react-day-picker/style.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Top Dawg Pet Care",
    template: "%s | Top Dawg Pet Care",
  },
  description:
    "Personalized dog boarding, private training, and behavior support.",
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