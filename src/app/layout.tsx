import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dharris = localFont({
  src: "./font/Dharris.otf",
  variable: "--font-dharris",
});
const tanpearl = localFont({
  src: "./font/Tan-Pearl.otf",
  variable: "--font-tanpearl",
});

export const metadata: Metadata = {
  title: "Heart Of Gold Jewels",
  description: "Luxury You Can Treasure Forever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${tanpearl.variable} ${dharris.variable} ${playfair.variable} ${nunito.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-nunito">{children}</body>
    </html>
  );
}
