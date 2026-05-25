import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - gpu.garden",
  description: "Free AI services for the community.",
  icons: {
    icon: "/favicon-small.png",
    shortcut: "/favicon-small.png",
    apple: "/favicon-small.png",
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
        {children}
      </body>
    </html>
  );
}
