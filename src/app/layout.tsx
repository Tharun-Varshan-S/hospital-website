import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SecurityGuardian from "@/components/SecurityGuardian";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hearing Home Hospital | Advanced Healthcare",
  description: "Experience premium, modern healthcare. 24/7 support, qualified specialists, and advanced medical technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SecurityGuardian />
        {children}
      </body>
    </html>
  );
}
