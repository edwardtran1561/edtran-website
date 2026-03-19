import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Providers from "./provider";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "only light",
};

export const metadata: Metadata = {
  // Title and description
  title: "Edward Tran",
  description: "Sharing the goods",
  // Favicon
  icons: [
    {
      rel: "icon",
      url: "/favicon-light.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/favicon-dark.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased bg-slate-100 dark:bg-gray-800 bg-gray-100 dark:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
