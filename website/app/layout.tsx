import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { getUserData } from "@/lib/database";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chariot",
  description: "An innovative app to ride within the city, for cheap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
