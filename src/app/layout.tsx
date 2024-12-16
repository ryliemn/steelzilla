import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steelzilla",
  description: "CNC plasma cut, hand-finished metal artwork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="light text-foreground bg-background max-w-[1280px] mx-auto font-sans">
            <Navbar></Navbar>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
