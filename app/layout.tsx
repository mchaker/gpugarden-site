import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import GravityGrid from "../components/GravityGrid";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
        className={`${inter.className} ${jetbrainsMono.variable} min-h-screen bg-[#08080a] bg-[radial-gradient(700px_circle_at_0%_0%,rgba(250,204,21,0.10),transparent_40%),radial-gradient(700px_circle_at_100%_0%,rgba(236,44,43,0.10),transparent_40%)] text-zinc-100 antialiased`}
      >
        <GravityGrid />
        {children}
      </body>
    </html>
  );
}
