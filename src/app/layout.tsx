import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

const siteName = "DataSafe";

export const metadata: Metadata = {
   title: {
    default: `${siteName}`,
    template: `%s | ${siteName}`,
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
  lang="en"
  className={`${inter.variable} h-full antialiased`}
>
  <body className={`${inter.className} min-h-full flex flex-col`}>
    {children}
  </body>
</html>
  );
}
