import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Rohan Khatua Resume",
  description: "Rohan Khatua's Resume",
  applicationName: "Rohan Khatua Portfolio",
  keywords: ["Rohan", "Khatua", "Resume", "Rohan Khatua", "Rohan Khatua Resume"],
  category: "Portfolio",
  classification: "Portfolio",
  creator: "Rohan Khatua",
  robots: "index, follow",
  abstract: "Rohan Khatua's Resume",
  archives: "Rohan Khatua's Resume",
  authors: {
    name: "Rohan Khatua",
    url: "https://www.linkedin.com/in/rohankhatua/",
  },
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
