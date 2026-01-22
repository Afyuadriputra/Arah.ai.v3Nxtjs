import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "arah.ai — Academic Strategy, Navigated",
  description:
    "Autonomous AI Academic Agent integrated with SIAKAD to automate study planning and prevent academic risks."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen text-[16px] leading-relaxed text-black antialiased sm:text-[17px]">
        {children}
      </body>
    </html>
  );
}
