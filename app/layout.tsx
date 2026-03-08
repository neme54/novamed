import type { Metadata } from "next";
import {
  DM_Serif_Display,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

import { site } from "@/lib/data/site";

const display = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://novamedpharma.com",
  ),
  title: {
    default: site.metadata.defaultTitle,
    template: site.metadata.titleTemplate,
  },
  description: site.description,
  openGraph: {
    title: site.metadata.defaultTitle,
    description: site.description,
    images: [{ url: site.metadata.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.defaultTitle,
    description: site.description,
    images: [site.metadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
