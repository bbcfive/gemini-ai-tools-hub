import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Gemini3 Pro · AI Hub",
  description: "A Next.js + Tailwind AI tools directory built around the Gemini3 Pro semantic core, connecting models, plugins, and workflows."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${notoSans.variable}`} suppressHydrationWarning>
      <body className="bg-background text-body antialiased">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
