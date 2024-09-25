import "./globals.css";
import type { Metadata } from "next";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'

const bellafair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellafair"
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed"
})

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Toursim Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${bellafair.variable} ${barlow.variable} ${barlowCondensed.variable} bg-blue-900 text-white min-h-screen overflow-x-hidden`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
