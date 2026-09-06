import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import SecurityGuardian from "@/components/SecurityGuardian";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
      className={`${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SecurityGuardian />
        {children}
      </body>
    </html>
  );
}

