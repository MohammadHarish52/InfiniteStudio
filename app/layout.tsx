import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const neutralSans = localFont({
  src: [
    {
      path: "./fonts/NeutralSansVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-neutral-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinite Studio",
  description:
    "Infinite Studio is a creative agency balancing raw vision with refined execution.",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${neutralSans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
