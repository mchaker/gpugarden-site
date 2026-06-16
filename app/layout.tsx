import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GravityGrid from "../components/GravityGrid";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gpu.garden"),
  title: "Homepage - gpu.garden",
  description: "Free AI services for the community.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Homepage - gpu.garden",
    description: "Free AI services for the community.",
    url: "https://gpu.garden",
    siteName: "gpu.garden",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "gpu.garden logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "gpu.garden",
    description: "Free AI services for the community.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_28%),#09090b] text-zinc-100 antialiased`}
      >
        <GravityGrid />
        {children}
      </body>
    </html>
  );
}
