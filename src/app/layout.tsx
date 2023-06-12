"use client";
import { Wallet } from "./components/Wallet";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get last 100 SOL transcactions by wallet",
  description: "NEXT.js x Solscan Public API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wallet>{children}</Wallet>
      </body>
    </html>
  );
}
