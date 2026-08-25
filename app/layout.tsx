import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import { GlossaryDrawer } from "./shared/GlossaryDrawer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramanujan-discoveries.sai355897.chatgpt.site"),
  title: {
    default: "The Ramanujan Universe",
    template: "%s | The Ramanujan Universe",
  },
  description:
    "A digital museum and mathematical encyclopedia for Srinivasa Ramanujan's life, discoveries, notebooks, letters and legacy.",
  openGraph: {
    title: "The Ramanujan Universe",
    description: "Explore Srinivasa Ramanujan's mathematics, notebooks, correspondence and legacy.",
    images: ["/assets/hero-srinivasa-ramanujan.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ramanujan Universe",
    description: "A scholarly digital archive for Ramanujan's life and mathematics.",
    images: ["/assets/hero-srinivasa-ramanujan.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <GlossaryDrawer />
      </body>
    </html>
  );
}
