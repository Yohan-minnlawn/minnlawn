import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minnlawn.com"),

  title: {
    default: "Minnlawn Lawn & Landscape | Rochester, MN",
    template: "%s | Minnlawn Lawn & Landscape",
  },

  description:
    "Professional lawn care, landscaping, seasonal cleanup, snow removal, and outdoor property services for residential and commercial clients in Rochester, Minnesota and surrounding communities.",

  applicationName: "Minnlawn Lawn & Landscape",

  keywords: [
    "lawn care Rochester MN",
    "landscaping Rochester MN",
    "lawn maintenance Rochester MN",
    "snow removal Rochester MN",
    "spring cleanup Rochester MN",
    "fall cleanup Rochester MN",
    "Minnlawn Lawn & Landscape",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Minnlawn Lawn & Landscape | Rochester, MN",
    description:
      "Professional outdoor property care for residential and commercial clients in Rochester, Minnesota and surrounding communities.",
    url: "https://minnlawn.com",
    siteName: "Minnlawn Lawn & Landscape",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}