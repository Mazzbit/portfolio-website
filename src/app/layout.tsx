import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Klug | Personal Website",
  description: "Personal Website of Martin Klug, a Full Stack Developer and Game Engineer.",
  icons: {
    icon: [
      { url: "/mk.png", type: "image/png", sizes: "32x32" },
      { url: "/mk.png", type: "image/png", sizes: "192x192" },
      { url: "/mk.png", rel: "apple-touch-icon", sizes: "180x180" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
