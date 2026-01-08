import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "lenis/dist/lenis.css";
import "./globals.css";
import FloatingBadge from "@/components/FloatingBadge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agri - Agriculture Brand",
  description: "Premium agriculture products and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <LenisProvider>{children}</LenisProvider>
        <FloatingBadge />
      </body>
    </html>
  );
}
