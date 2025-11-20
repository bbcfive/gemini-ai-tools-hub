import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Gemini3 Pro · AI Hub 工具站",
  description: "围绕新词 Gemini3 Pro 打造的 Next.js + Tailwind AI 工具站，连接模型与工作流。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${grotesk.variable} ${notoSans.variable}`} suppressHydrationWarning>
      <body className="bg-background text-body antialiased">
        {children}
      </body>
    </html>
  );
}
