import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_style/globals.css";
import "./_style/components.css";
import Navbar from "@/components/elemen/Navigation Bar/Navbar";
import  ThemeProvider  from '@/context/ThemeContext'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Website portofolio Madamroger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
        </body>
    </html>
  );
}
