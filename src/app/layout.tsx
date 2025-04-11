import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "森野研究室",
  description: "芝浦工業大学 森野研究室の公式webサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 bg-fixed bg-cover text-neutral-100 ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Header />
        <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
