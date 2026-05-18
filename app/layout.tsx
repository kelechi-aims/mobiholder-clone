import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Grifter = localFont({
  src: [
    { path: "../public/fonts/grifterbold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-grifter",
});

const Inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const Rubik = localFont({
  src: [
    {
      path: "../public/fonts/Rubik-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
});

const Roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-VariableFont_wdth,wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

const Mulish = localFont({
  src: [
    {
      path: "../public/fonts/Mulish-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mulish",
});

const Unbounded = localFont({
  src: [
    {
      path: "../public/fonts/Unbounded-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-unbounded",
});

const Montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "mobiholder-clone",
  description: "Mobiholder-clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Grifter.variable} ${Inter.variable} ${Rubik.variable} ${Roboto.variable} ${Mulish.variable} ${Unbounded.variable} ${Montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
