
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio.vercel.app"),

  title: {
    default: "Ahmed Abu Al-Khair — Frontend Developer",
    template: "%s — Ahmed Abu Al-Khair",
  },

  description:
    "Ahmed Abu Al-Khair is a Frontend Developer focused on building modern, responsive and visually refined web experiences with React, Next.js and TypeScript.",

  keywords: [
    "Ahmed Abu Al-Khair",
    "Frontend Developer",
    "Frontend Developer Egypt",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "UI Developer",
    "Freelance Frontend Developer",
  ],

  authors: [
    {
      name: "Ahmed Abu Al-Khair",
    },
  ],

  creator: "Ahmed Abu Al-Khair",

  applicationName: "Ahmed Abu Al-Khair Portfolio",

  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.vercel.app",
    siteName: "Ahmed Abu Al-Khair",
    title: "Ahmed Abu Al-Khair — Frontend Developer",
    description:
      "Frontend Developer building modern digital experiences with React, Next.js and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Abu Al-Khair — Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Abu Al-Khair — Frontend Developer",
    description:
      "Frontend Developer building modern digital experiences with React, Next.js and TypeScript.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.variable} bg-black text-white`}>
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}