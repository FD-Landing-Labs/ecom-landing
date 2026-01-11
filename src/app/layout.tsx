import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "lenis/dist/lenis.css";
import "./globals.css";
import FloatingBadge from "@/components/FloatingBadge";
import { data } from "@/data";

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
  title: data.site.seo.title,
  description: data.site.seo.description,
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
