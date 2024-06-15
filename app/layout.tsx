import type { Metadata } from "next";
import "./_style/globals.css";
import "./_style/components.css";
import {ThemeProvider} from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Madamroger",
    template: "%s | Madamroger"
  },
  description: "Website portofolio Madamroger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
