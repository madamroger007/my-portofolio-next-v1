import type { Metadata } from 'next';
import './_style/globals.css';
import './_style/components.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Madamroger",
    template: "%s | Madamroger"
  },
  description: "Website portofolio Madamroger",
  openGraph: {
    title: "Madamroger",
    description: "Website portofolio Madamroger",
    url: "https://adamstd.my.id", // Ganti dengan URL situs Anda
    siteName: "Madamroger",
    images: [
      {
        url: "/src/img/icon/madamroger.svg", // Ganti dengan URL gambar Anda
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madamroger",
    description: "Website portofolio Madamroger",
    images: "/src/img/icon/madamroger.svg", // Ganti dengan URL gambar Anda
  }
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

        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
